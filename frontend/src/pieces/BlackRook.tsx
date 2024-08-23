import { useGLTF } from "@react-three/drei";
import { pieceProps } from "./pieceProps";
import { Vector3 } from "@react-three/fiber";

export function BlackRook(props: pieceProps) {
  const { nodes, materials } = useGLTF(
    "./model/wooden_chess_set/Black/BlackRook/BlackRook.gltf"
  );
  return (
    <group dispose={null} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.BlackPieces}
        position={props.position as Vector3}
        scale={[props.upScale, props.upScale, props.upScale]}
      />
    </group>
  );
}

useGLTF.preload("/BlackRook.gltf");
