"use client";

import Model from "@/components/Model";
import { ARCanvas, ARMarker } from "@/components/ar";
import { OrbitControls, PresentationControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense } from "react";
interface GlProps {
  gl: {
    antialias: boolean;
    powerPreference: string;
    physicallyCorrectLights: boolean;
    setSize: (width: number, height: number) => void;
  };
}


function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [1 + state.mouse.x / 4, 1.5 + state.mouse.y / 4, 2.5],
      0.2,
      delta
    );
  });
}
export default  function Scan() {
  

  return (
    <main className="h-[100vh]">
      <ARCanvas
        gl={{
          antialias: false,
          powerPreference: "default",
          physicallyCorrectLights: true,
        }}
        onCameraStreamReady={() => console.log("Camera stream ready")}
        onCameraStreamError={() => console.error("Camera stream error")}
        onCreated={({ gl }: GlProps) => {
          gl.setSize(window.innerWidth, window.innerHeight);
          // gl.setSize(1200, 100);
        }}
        className={"fixed z-50"}
      >
        {/* <ambientLight />
        <pointLight position={[0, 0, 20]} intensity={20.0} />
        <pointLight position={[10, 10, 0]} intensity={10.0} /> */}
        <ambientLight />
        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize={1024}
        />

        {/* <group position={[0.7, 1, 0]} rotation={[0, 0, 0]}>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </group> */}
        <OrbitControls />

        <ARMarker
          params={{ smooth: true }}
          type={"pattern"}
          patternUrl={"/data/patt.hiro"}
          onMarkerFound={() => {
            console.log("Marker Found");
          }}
        >
          <group position={[0, 1, 0]} rotation={[-1, 0, 0]}>
            <Suspense fallback={null}>
              <Model />
            </Suspense>
          </group>
        </ARMarker>

        {/* <mesh
            rotation={[-0.5 * Math.PI, 0, 0]}
            position={[0, -1, 0]}
            receiveShadow
          >
            <planeBufferGeometry args={[10, 10, 1, 1]} />
            <shadowMaterial transparent opacity={0.2} />
          </mesh> */}
        {/* <Rig /> */}
        {/* <OrbitControls />
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

            <Model />
          </PresentationControls> */}
        {/* </ARMarker> */}
      </ARCanvas>
    </main>
  );
}
