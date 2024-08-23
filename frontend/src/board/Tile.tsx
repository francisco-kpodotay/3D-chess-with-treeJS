import { Vector3 } from "@react-three/fiber";
import { useState } from "react";

interface TileProps {
  position: number[];
  color: string;
}

export function Tile(props: TileProps) {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
 /*  function handleClick(event){
    setActive(!active)
    console.log("tile position: ",props.position);
    
  } */

  return (
    <mesh
      position={props.position as Vector3}
      /* onClick={(e) => (handleClick(e))} */
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 0.1, 1]} />
      <meshStandardMaterial color={hovered ? "red" : props.color} />
    </mesh>
  );
}
