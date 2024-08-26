import { BlackBishop } from "./BlackBishop";
import { BlackKing } from "./BlackKing";
import { BlackKnight } from "./BlackKnight";
import { BlackPawn } from "./BlackPawn";
import { BlackQueen } from "./BlackQueen";
import { BlackRook } from "./BlackRook";
import { WhiteBishop } from "./WhiteBishop";
import { WhiteKing } from "./WhiteKing";
import { WhiteKnight } from "./WhiteKnight";
import { WhitePawn } from "./WhitePawn";
import { WhiteQueen } from "./WhiteQueen";
import { WhiteRook } from "./WhiteRook";

export function Pieces() {
  const upScale = 28;

  return (
    <>
      <WhiteBishop position={[-3.5, 0, 1.5]} upScale={upScale} />
      <WhiteBishop position={[-3.5, 0, -1.5]} upScale={upScale} />
      <WhiteKing position={[-3.5, 0, 0.5]} upScale={upScale} />
      <WhiteKnight position={[-3.5, 0, -2.5]} upScale={upScale} />
      <WhiteKnight position={[-3.5, 0, 2.5]} upScale={upScale} />
      <WhitePawn position={[-2.5, 0, -3.5]} upScale={upScale} />
      <WhitePawn position={[-2.5, 0, -2.5]} upScale={upScale} />
      <WhitePawn position={[-2.5, 0, -1.5]} upScale={upScale} />
      <WhitePawn position={[-2.5, 0, -0.5]} upScale={upScale} />
      <WhitePawn position={[-2.5, 0, 0.5]} upScale={upScale} />
      <WhitePawn position={[-2.5, 0, 1.5]} upScale={upScale} />
      <WhitePawn position={[-2.5, 0, 2.5]} upScale={upScale} />
      <WhitePawn position={[-2.5, 0, 3.5]} upScale={upScale} />
      <WhiteQueen position={[-3.5, 0, -0.5]} upScale={upScale} />
      <WhiteRook position={[-3.5, 0, -3.5]} upScale={upScale} />
      <WhiteRook position={[-3.5, 0, 3.5]} upScale={upScale} />
      <BlackBishop position={[3.5, 0, 1.5]} upScale={upScale} />
      <BlackBishop position={[3.5, 0, -1.5]} upScale={upScale} />
      <BlackKing position={[3.5, 0, 0.5]} upScale={upScale} />
      <BlackKnight position={[3.5, 0, 2.5]} upScale={upScale} />
      <BlackKnight position={[3.5, 0, -2.5]} upScale={upScale} />
      <BlackPawn position={[2.5, 0, 3.5]} upScale={upScale} />
      <BlackPawn position={[2.5, 0, 2.5]} upScale={upScale} />
      <BlackPawn position={[2.5, 0, 1.5]} upScale={upScale} />
      <BlackPawn position={[2.5, 0, 0.5]} upScale={upScale} />
      <BlackPawn position={[2.5, 0, -0.5]} upScale={upScale} />
      <BlackPawn position={[2.5, 0, -1.5]} upScale={upScale} />
      <BlackPawn position={[2.5, 0, -2.5]} upScale={upScale} />
      <BlackPawn position={[2.5, 0, -3.5]} upScale={upScale} />
      <BlackQueen position={[3.5, 0, -0.5]} upScale={upScale} />
      <BlackRook position={[3.5, 0, 3.5]} upScale={upScale} />
      <BlackRook position={[3.5, 0, -3.5]} upScale={upScale} />
    </>
  );
}
