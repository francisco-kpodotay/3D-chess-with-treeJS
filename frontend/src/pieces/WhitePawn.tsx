import { useGLTF } from "@react-three/drei";
import { pieceProps } from "./pieceProps";
import { Vector3 } from "@react-three/fiber";

export function WhitePawn(props: pieceProps) {
  const { nodes, materials } = useGLTF(
    "./model/wooden_chess_set/White/WhitePawn/WhitePawn.gltf"
  );
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.WhitePieces}
        position={props.position as Vector3}
        rotation={[0, 0.293, 0]}
        scale={[props.upScale, props.upScale, props.upScale]}
      />
    </group>
  );
}

useGLTF.preload("/WhitePawn.gltf");
