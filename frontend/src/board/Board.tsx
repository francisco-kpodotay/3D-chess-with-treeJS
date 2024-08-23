import { useEffect, useState } from "react";
import { Tile } from "./Tile";

export function Board() {
  const [tiles, setTiles] = useState()

  useEffect(()=>{
    generateTiles()
  })


  function generateTiles() {
    const tiles = [];

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const tileCoordinate = [col - 3.5, -0.05, row - 3.5];

        tiles.push(
          <Tile
            key={`${row}-${col}`}
            position={tileCoordinate}
            color={(row + col) % 2 === 0 ? "white" : "black"}
          />
        );
      }
    }
    setTiles(tiles)
  }

  return <>{tiles}</>;
}
