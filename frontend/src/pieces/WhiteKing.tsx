import { useGLTF } from "@react-three/drei";
import { pieceProps } from "./pieceProps";
import { Vector3 } from "@react-three/fiber";

export function WhiteKing(props: pieceProps) {
  const { nodes, materials } = useGLTF(
    "./model/wooden_chess_set/White/WhiteKing/WhiteKing.gltf"
  );
  return (
    <group dispose={null} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials.WhitePieces}
        position={props.position as Vector3}
        rotation={[0, 1.044, 0]}
        scale={[
          0.015 * props.upScale,
          0.016 * props.upScale,
          0.015 * props.upScale,
        ]}
      />
    </group>
  );
}

useGLTF.preload("/WhiteKing.gltf");
