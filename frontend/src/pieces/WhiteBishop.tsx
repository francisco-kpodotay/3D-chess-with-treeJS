import { useGLTF } from "@react-three/drei";
import { pieceProps } from "./pieceProps";
import { Vector3 } from "@react-three/fiber";

export function WhiteBishop(props: pieceProps) {
  const { nodes, materials } = useGLTF(
    "./model/wooden_chess_set/White/WhiteBishop/WhiteBishop.gltf"
  );
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.WhitePieces}
        position={props.position as Vector3}
        rotation={[Math.PI, -0.02, Math.PI]}
        scale={[
          0.015 * props.upScale,
          0.016 * props.upScale,
          0.015 * props.upScale,
        ]}
      />
    </group>
  );
}

useGLTF.preload("/WhiteBishop.gltf");
