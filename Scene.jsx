/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 /Users/ajstars/Developer/AR/arcode/public/femaleGirl02/scene.gltf 
Author: T0ndji (https://sketchfab.com/T0ndji)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/female-girl-02-9718d74df62e4aa6a43308db1572dd39
Title: Female Girl 02
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.UniqueID_6} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.UniqueID_6} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')