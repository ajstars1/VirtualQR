import {
  ArToolkitContext
} from "@ar-js-org/ar.js/three.js/build/ar-threex";
import { useFrame, useThree } from "@react-three/fiber";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";

const ARContext = createContext<ArToolkitContext>({});

const videoDomElemSelector = "#arjs-video";


const AR = React.memo(function  AR({
  tracking = true,
  children,
  sourceType,
  patternRatio,
  matrixCodeType,
  detectionMode,
  cameraParametersUrl,
  onCameraStreamReady,
  onCameraStreamError,
}: {
  tracking?: boolean;
  children: React.ReactNode;
  sourceType: string;
  patternRatio: number;
  matrixCodeType: string;
  detectionMode: string;
  cameraParametersUrl: string;
  onCameraStreamReady?: () => void; 
  onCameraStreamError?: (error: Error) => void;
}) {
  const { gl, camera } = useThree();

  const {ArToolkitContext,ArToolkitSource} = require("@ar-js-org/ar.js/three.js/build/ar-threex");
  const arContext = useMemo(() => {
    const arToolkitSource = new ArToolkitSource({ sourceType });
    const arToolkitContext = new ArToolkitContext({
      cameraParametersUrl,
      detectionMode,
      patternRatio,
      matrixCodeType,
    });

    return { arToolkitContext, arToolkitSource };
  }, [
    sourceType,
    cameraParametersUrl,
    detectionMode,
    patternRatio,
    matrixCodeType,
    ArToolkitContext,
    ArToolkitSource,
  ]);

  const onResize = useCallback(() => {
    const { arToolkitContext, arToolkitSource } = arContext;

    // arToolkitSource.onResizeElement();
    // arToolkitSource.copyElementSizeTo(gl.domElement);
    if (arToolkitContext.arController !== null) {
      arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
      camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
    }
  }, [gl, arContext, camera]);

  const onUnmount = useCallback(() => {
    const video = document.querySelector(
      videoDomElemSelector
    ) as HTMLVideoElement;
    if (video) {
      (video.srcObject as MediaStream)
        ?.getTracks()
        .map((track) => track.stop());
      video.remove();
    }
  }, []);

  useEffect(() => {
    arContext.arToolkitSource.init(() => {
      const video = document.querySelector(
        videoDomElemSelector
      ) as HTMLVideoElement;
      video.style.position = "fixed";
      video.style.width = '100%';
      video.style.height = '100%';
      video.style.borderRadius = '20px'

      // video.style.maxWidth = "none";

      video.onloadedmetadata = () => {
        console.log(
          "actual source dimensions",
          video.videoWidth,
          video.videoHeight
        );
        // console.log("FHHHELSFLS:::",arContext);

        if (video.videoWidth > video.videoHeight) {
          arContext.arToolkitContext.arController.orientation = "landscape";
          arContext.arToolkitContext.arController.options.orientation =
            "landscape";
        } else {
          arContext.arToolkitContext.arController.orientation = "portrait";
          arContext.arToolkitContext.arController.options.orientation =
            "portrait";
        }

        if (onCameraStreamReady) {
          onCameraStreamReady();
        }
        onResize();
      };
    }, onCameraStreamError);

    arContext.arToolkitContext.init(() =>
      camera.projectionMatrix.copy(
        arContext.arToolkitContext.getProjectionMatrix()
      )
    );

    window.addEventListener("resize", onResize);

    return onUnmount;
  }, [
    arContext,
    camera,
    onCameraStreamReady,
    onCameraStreamError,
    onResize,
    onUnmount,
  ]);

  useFrame(() => {
    if (!tracking) {
      return;
    }

    if (
      arContext.arToolkitSource &&
      arContext.arToolkitSource.ready !== false
    ) {
      arContext.arToolkitContext.update(arContext.arToolkitSource.domElement);
    }
  });

  const value = useMemo(
    () => ({ arToolkitContext: arContext.arToolkitContext }),
    [arContext]
  );

  return <ARContext.Provider value={value}>{children}</ARContext.Provider>;
});

const useAR = () => {
  const arValue = useContext(ARContext);
  return useMemo(() => ({ ...arValue }), [arValue]);
};

export { AR, useAR };
