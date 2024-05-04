import {ArMarkerControls , ArToolkitContext} from "@ar-js-org/ar.js/three.js/build/ar-threex";
import { useFrame } from "@react-three/fiber"
import React, { useEffect, useRef, useState } from "react"

import { useAR } from "./ar"

interface ARMarkerProps {
  type: "pattern" | "barcode"
  barcodeValue?: string
  patternUrl?: string
  params?: any
  onMarkerFound?: () => void
  onMarkerLost?: () => void
  children: React.ReactNode
}

const ARMarker = ({
  children,
  type,
  barcodeValue,
  patternUrl,
  params,
  onMarkerFound,
  onMarkerLost,
}: ARMarkerProps) => {
  const markerRoot = useRef();
 
  const { arToolkitContext }: { arToolkitContext: ArToolkitContext } = useAR();
  const [isFound, setIsFound] = useState(false);
  useEffect( () => {
    if (!arToolkitContext) {
      return;
    }
    const markerControls = new ArMarkerControls(
      arToolkitContext,
      markerRoot.current,
      {
        type,
        barcodeValue: type === "barcode" ? barcodeValue : null,
        patternUrl: type === "pattern" ? patternUrl : null,
        ...params,
      }
    );

    return () => {
      const index = arToolkitContext._arMarkersControls.indexOf(markerControls);
      arToolkitContext._arMarkersControls.splice(index, 1);
    };
  }, [ arToolkitContext, barcodeValue, patternUrl, params, type]);

  useFrame(() => {
    if ((markerRoot.current as any) && (markerRoot.current as any).visible && !isFound) {
      setIsFound(true);
      if (onMarkerFound) {
        onMarkerFound();
      }
    } else if ((markerRoot.current as any) && !(markerRoot.current as any).visible && isFound) {
      setIsFound(false);
      if (onMarkerLost) {
        onMarkerLost();
      }
    }
  });

  return <group ref={markerRoot as any}>{children}</group>;
};

export default ARMarker
