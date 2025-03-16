"use client";

import "../App.scss";
import AITalkingMan from "@/components/pageRender";



import {  useRef } from "react";
import { Bot} from 'lucide-react';
import ControlTray from "@/components/control-tray/ControlTray";
import { LiveAPIProvider } from "@/contexts/LiveAPIContext";

// interface GlProps {
//   gl: {
//     antialias: boolean;
//     powerPreference: string;
//     physicallyCorrectLights: boolean;
//     setSize: (width: number, height: number) => void;
//   };
// }


// function Rig() {
//   return useFrame((state, delta) => {
//     easing.damp3(
//       state.camera.position,
//       [1 + state.mouse.x / 4, 1.5 + state.mouse.y / 4, 2.5],
//       0.2,
//       delta
//     );
//   });
// }
export default  function Scan() {
  

  const API_KEY = process.env.NEXT_PUBLIC_REACT_APP_GEMINI_API_KEY as string;

  if (typeof API_KEY !== "string") {
    throw new Error("set REACT_APP_GEMINI_API_KEY in .env");
  }
  
  const host = "generativelanguage.googleapis.com";
  const uri = `wss://${host}/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent`;
   const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <main className="h-[100vh]"> <LiveAPIProvider url={uri} apiKey={API_KEY}>
    {/* <div className="relative min-h-screen bg-black"> */}
      {/* Original 3D Canvas Content */}
     
      <div className="min-h-screen bg-transparent flex items-center justify-center">
        <div id="canvas-container">
          {/* Your existing 3D canvas content */}
          {/* <AITalkingMan /> */}
        </div>
      </div>
      {/* <ARCanvas
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
       <div className="min-h-screen bg-transparent flex items-center justify-center">
        <div id="canvas-container"> */}
          {/* Your existing 3D canvas content */}
          {/* <AITalkingMan />
        </div>
      </div> */}

        {/* <ambientLight />
        <pointLight position={[0, 0, 20]} intensity={20.0} />
        <pointLight position={[10, 10, 0]} intensity={10.0} /> */}
        {/* <ambientLight />
        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize={1024}
        /> */}

        {/* <group position={[0.7, 1, 0]} rotation={[0, 0, 0]}>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </group> */}
        {/* <OrbitControls /> */}

        {/* <ARMarker
          params={{ smooth: true }}
          type={"pattern"}
          patternUrl={"/data/patt.hiro"}
          onMarkerFound={() => {
            console.log("Marker Found");
          }}
        >
          <group position={[0, 1, 0]} rotation={[-1, 0, 0]}>
            <Suspense fallback={
              <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={"hotpink"} />
              </mesh>
            }>
              <Model />
            </Suspense>
          </group>
        </ARMarker> */}

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
      {/* </ARCanvas> */}





            {/* Sticker-style Banners */}
            {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg px-6 py-3 rotate-[-1deg] shadow-lg pointer-events-auto hover:rotate-[1deg] transition-transform">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-black" />
            <h1 className="text-2xl font-bold text-black">
              0Unveiled&apos;s Demo assistant
            </h1>
          </div>
        </div>
      </div> */}
    {/* </div> */}
    <ControlTray
      videoRef={videoRef}
      supportsVideo={false}
      // onVideoStreamChange={setVideoStream}
      >
      {/* put your own buttons here */}
    </ControlTray>
  </LiveAPIProvider>
    </main>
  );
}
