import { useGLTF } from "@react-three/drei";
import { pieceProps } from "./pieceProps";
import { useMemo } from "react";
import { MeshStandardMaterial } from "three";

export function WhitePawn(props: pieceProps) {
  const { nodes, materials } = useGLTF(
    "./model/wooden_chess_set/White/WhitePawn/WhitePawn.gltf"
  );

  // Clone the material and create a new material for each pawn
  const material = useMemo(() => {
    const mat = materials.WhitePieces.clone();
    // Optionally set initial color or other properties here
    return mat;
  }, [materials.WhitePieces]);

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={material}
        position={props.position as Vector3}
        rotation={[0, 0.293, 0]}
        scale={[props.upScale, props.upScale, props.upScale]}
      />
    </group>
  );
}

useGLTF.preload("./model/wooden_chess_set/White/WhitePawn/WhitePawn.gltf");
