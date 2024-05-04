import React, { Suspense } from "react"
import { Canvas, events } from "@react-three/fiber"

import { AR } from "./ar"

interface ARCanvasProps {
  arEnabled?: boolean;
  tracking?: boolean;
  children: React.ReactNode;
  patternRatio?: number;
  detectionMode?: string;
  cameraParametersUrl?: string;
  matrixCodeType?: string;
  sourceType?: string;
  onCameraStreamReady?: () => void;
  onCameraStreamError?: (error: Error) => void;
  camera?: any;
  gl?: {
    antialias: boolean;
    powerPreference: string;
    physicallyCorrectLights: boolean;
  };
  onCreated?: any;
}

const eventManagerFactory = (state: any) => ({
  ...events(state),

  compute(event: any, state: any) {
    state.pointer.set(
      (event.clientX / state.size.width) * 2 - 1,
      -(event.clientY / state.size.height) * 2 + 1,
    )
    state.raycaster.setFromCamera(state.pointer, state.camera)
  },
})


const ARCanvas = ({
  arEnabled = true,
  tracking = true,
  children,
  patternRatio = 0.5,
  detectionMode = "mono_and_matrix",
  cameraParametersUrl = "/data/camera_para.dat",
  matrixCodeType = "3x3",
  sourceType = "webcam",
  onCameraStreamReady,
  onCameraStreamError,
  ...props
}:ARCanvasProps) => (
  <Canvas
    events={eventManagerFactory}
    camera={arEnabled ? { position: [0, 0, 0] } : props.camera}
    {...props}
  >
    <Suspense fallback={"...Loading"} >

    {arEnabled ? (
      <AR
        tracking={tracking}
        patternRatio={patternRatio}
        matrixCodeType={matrixCodeType}
        detectionMode={detectionMode}
        sourceType={sourceType}
        cameraParametersUrl={cameraParametersUrl}
        onCameraStreamReady={onCameraStreamReady}
        onCameraStreamError={onCameraStreamError}
      >
        {children}
      </AR>
    ) : (
      children
    )}
</Suspense>
  </Canvas>
);

export default ARCanvas
