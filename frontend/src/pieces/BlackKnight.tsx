import { useGLTF } from "@react-three/drei";
import { pieceProps } from "./pieceProps";
import { Vector3 } from "@react-three/fiber";

export function BlackKnight(props: pieceProps) {
  const { nodes, materials } = useGLTF(
    "./model/wooden_chess_set/Black/BlackKnight/BlackKnight.gltf"
  );
  //frontend\model\wooden_chess_set\Black\BlackKnight\BlackKnight.gltf
  return (
    <group dispose={null} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.BlackPieces}
        position={props.position as Vector3}
        rotation={[0, -0.335, 0]}
        scale={[
           props.upScale,
           props.upScale,
           props.upScale,
        ]}
      />
    </group>
  );
}

useGLTF.preload("/BlackKinght.gltf");
