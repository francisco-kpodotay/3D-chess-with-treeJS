import { useGLTF } from "@react-three/drei";
import { pieceProps } from "./pieceProps";
import { Vector3 } from "@react-three/fiber";

export function WhiteKnight(props: pieceProps) {
  const { nodes, materials } = useGLTF(
    "./model/wooden_chess_set/White/WhiteKnight/WhiteKnight.gltf"
  );
  return (
    <group dispose={null} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.WhitePieces}
        position={props.position as Vector3}
        rotation={[-Math.PI, 0.409, -Math.PI]}
        scale={[
           props.upScale,
           props.upScale,
           props.upScale,
        ]}
      />
    </group>
  );
}

useGLTF.preload("/WhiteKnight.gltf");
