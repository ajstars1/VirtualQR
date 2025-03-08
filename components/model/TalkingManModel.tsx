import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_8: THREE.SkinnedMesh;
    GLTF_created_0_rootJoint: THREE.Bone;
  };
  materials: {
    Wolf3D_Avatar: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Animation"; // You might need to adjust this based on your actual animation names
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

interface TalkingManModelProps {
  play: boolean;
}

export function TalkingManModel({ play }: TalkingManModelProps) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/assets/3d/talking-man.glb"
  ) as GLTFResult; // Assuming it's in the root of your public folder
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const animationAction = actions["Animation"]; // Use the correct animation name
    if (play && animationAction) {
      animationAction.reset().play();
    } else if (animationAction) {
      animationAction.stop();
    }
  }, [play, actions]);

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          position={[-0.0068, -0.6, -0.0042]} // Adjusted y position for "down"
          rotation={[-Math.PI / 2, 0, 0]} // Removed rotation on y and z axes
          scale={1.2}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Gerry01_68">
                <group name="Gerry01_Skeleton_67">
                  <group name="talk">
                    <skinnedMesh
                      name="Object_8"
                      geometry={nodes.Object_8.geometry}
                      material={materials.Wolf3D_Avatar}
                      skeleton={nodes.Object_8.skeleton}
                    />
                    <group name="Wolf3D_Avatar_69" />
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/3d/talking-man.glb");
