import { useRef, useState } from "react";
import * as THREE from "three";

interface TileProps {
  position: number[];
  color: string;
}

export function Tile(props: TileProps) {

  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <mesh
      position={props.position}
      ref={meshRef}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 0.1, 1]} />
      <meshStandardMaterial color={hovered ? "red" : props.color} />
    </mesh>
  );
}
