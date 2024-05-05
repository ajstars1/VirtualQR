"use client";

import Model from "@/components/Model";
import { ARCanvas, ARMarker } from "@/components/ar";
import { OrbitControls, PresentationControls, useGLTF } from "@react-three/drei";
interface GlProps {
  gl: {
    antialias: boolean;
    powerPreference: string;
    physicallyCorrectLights: boolean;
    setSize: (width: number, height: number) => void;
  };
}

export default  function Scan() {
  

  return (
    <main className="h-[80vh]">
      <ARCanvas
        gl={{
          antialias: false,
          powerPreference: "default",
          physicallyCorrectLights: true,
        }}
        onCameraStreamReady={() => console.log("Camera stream ready")}
        onCameraStreamError={() => console.error("Camera stream error")}
        onCreated={({ gl }:GlProps) => {
          gl.setSize(window.innerWidth, window.innerHeight);
          // gl.setSize(1200, 100);
        }}
      >
        <ambientLight />
        <pointLight position={[0, 0, 20]} intensity={20.0} />
        <pointLight position={[10, 10, 0]} intensity={10.0} />
        <ARMarker
          params={{ smooth: true }}
          type={"pattern"}
          patternUrl={"/data/patt.hiro"}
          onMarkerFound={() => {
            console.log("Marker Found");
          }}
        >
          {/* <OrbitControls /> */}
          <PresentationControls
            enabled={true} // the controls can be disabled by setting this to false
            global={true} // Spin globally or by dragging the model
            cursor={true} // Whether to toggle cursor style on drag
            snap={false} // Snap-back to center (can also be a spring config)
            speed={1} // Speed factor
            zoom={1} // Zoom factor when half the polar-max is reached
            rotation={[0, 0, 0]} // Default rotation
            // polar={[0, Math.PI / 2]} // Vertical limits
            // azimuth={[-Infinity, Infinity]} // Horizontal limits
            config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
          >
            <mesh
              onClick={(e) => {
                alert("Clicked on the mesh");
              }}
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={"hotpink"} />
            </mesh>

            {/* <Model /> */}
          </PresentationControls>
        </ARMarker>
      </ARCanvas>
    </main>
  );
}
