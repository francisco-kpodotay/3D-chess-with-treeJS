import { Tile } from "./Tile";

export function Board() {
  return (
    <>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Tile position={[-1.2, 0, 0]} />
      <Tile position={[1.2, 0, 0]} />
    </>
  );
}
