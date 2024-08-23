import { useGLTF } from "@react-three/drei";
import { pieceProps } from "./pieceProps";
import { Vector3 } from "@react-three/fiber";

export function BlackPawn(props: pieceProps) {
  const { nodes, materials } = useGLTF(
    "./model/wooden_chess_set/Black/BlackPawn/BlackPawn.gltf"
  );
  return (
    <group dispose={null} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_68.geometry}
        material={materials.BlackPieces}
        position={props.position as Vector3}
        rotation={[-Math.PI, 0.58, -Math.PI]}
        scale={[props.upScale, props.upScale, props.upScale]}
      />
    </group>
  );
}

useGLTF.preload("/BlackPawn.gltf");
