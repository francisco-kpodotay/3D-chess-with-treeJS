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
  return (
    <>
      <WhiteBishop upScale={28} position={[-3.5, 0, 1.5]} />
      <WhiteBishop upScale={28} position={[-3.5, 0, -1.5]} />
      <WhiteKing upScale={28} position={[-3.5, 0, -0.5]} />
      <WhiteKnight upScale={28} position={[-3.5, 0, -2.5]} />
      <WhiteKnight upScale={28} position={[-3.5, 0, 2.5]} />
      <WhitePawn upScale={28} position={[-2.5, 0, -3.5]} />
      <WhitePawn upScale={28} position={[-2.5, 0, -2.5]} />
      <WhitePawn upScale={28} position={[-2.5, 0, -1.5]} />
      <WhitePawn upScale={28} position={[-2.5, 0, -0.5]} />
      <WhitePawn upScale={28} position={[-2.5, 0, 0.5]} />
      <WhitePawn upScale={28} position={[-2.5, 0, 1.5]} />
      <WhitePawn upScale={28} position={[-2.5, 0, 2.5]} />
      <WhitePawn upScale={28} position={[-2.5, 0, 3.5]} />
      <WhiteQueen upScale={28} position={[-3.5, 0, 0.5]} />
      <WhiteRook upScale={28} position={[-3.5, 0, -3.5]} />
      <WhiteRook upScale={28} position={[-3.5, 0, 3.5]} />

      <BlackBishop upScale={28} position={[3.5, 0, 1.5]} />
      <BlackBishop upScale={28} position={[3.5, 0, -1.5]} />
      <BlackKing upScale={28} position={[3.5, 0, -0.5]} />
      <BlackKnight upScale={28} position={[3.5, 0, 2.5]} />
      <BlackKnight upScale={28} position={[3.5, 0, -2.5]} />
      <BlackPawn upScale={28} position={[2.5, 0, 3.5]} />
      <BlackPawn upScale={28} position={[2.5, 0, 2.5]} />
      <BlackPawn upScale={28} position={[2.5, 0, 1.5]} />
      <BlackPawn upScale={28} position={[2.5, 0, 0.5]} />
      <BlackPawn upScale={28} position={[2.5, 0, -0.5]} />
      <BlackPawn upScale={28} position={[2.5, 0, -1.5]} />
      <BlackPawn upScale={28} position={[2.5, 0, -2.5]} />
      <BlackPawn upScale={28} position={[2.5, 0, -3.5]} />
      <BlackQueen upScale={28} position={[3.5, 0, 0.5]} />
      <BlackRook upScale={28} position={[3.5, 0, 3.5]} />
      <BlackRook upScale={28} position={[3.5, 0, -3.5]} />
    </>
  );
}
