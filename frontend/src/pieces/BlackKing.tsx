import { useGLTF } from "@react-three/drei";
import { pieceProps } from "./pieceProps";
import { Vector3 } from "@react-three/fiber";

export function BlackKing(props: pieceProps) {
  const { nodes, materials } = useGLTF(
    "./model/wooden_chess_set/Black/BlackKing/BlackKing.gltf"
  );
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials.BlackPieces}
        position={props.position as Vector3}
        rotation={[Math.PI, -1.108, Math.PI]}
        scale={[
          0.015 * props.upScale,
          0.016 * props.upScale,
          0.015 * props.upScale,
        ]}
      />
    </group>
  );
}

useGLTF.preload("/BlackKing.gltf");
