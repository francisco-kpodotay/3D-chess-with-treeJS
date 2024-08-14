/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/BlackKinght.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.BlackPieces}
        position={[0.122, 0.04, -0.088]}
        rotation={[0, -0.335, 0]}
      />
    </group>
  )
}

useGLTF.preload('/BlackKinght.gltf')