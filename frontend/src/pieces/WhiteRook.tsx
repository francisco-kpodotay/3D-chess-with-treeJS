import { useGLTF } from "@react-three/drei";
import { pieceProps } from "./pieceProps";
import { Vector3 } from "@react-three/fiber";

export function WhiteRook(props: pieceProps) {
  const { nodes, materials } = useGLTF(
    "./model/wooden_chess_set/White/WhiteRook/WhiteRook.gltf"
  );
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.WhitePieces}
        position={props.position as Vector3}
        scale={[props.upScale, props.upScale, props.upScale]}
      />
    </group>
  );
}

useGLTF.preload("/WhiteRook.gltf");
