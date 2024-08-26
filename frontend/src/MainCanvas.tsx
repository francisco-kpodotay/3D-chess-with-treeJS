import { Canvas } from "@react-three/fiber";
import { Board } from "./board/Board";
import {
  CameraControls,
  Environment,
  GizmoHelper,
  GizmoViewport,
  PerspectiveCamera,
} from "@react-three/drei";
import { Pieces } from "./pieces/Pieces";
import { ClickHandler } from "./ClickHandler";
import { useInactivityRotation } from "./useInactivityRotation"; // Import the hook

function RotatingBoardAndPieces() {
  const boardRef = useInactivityRotation();

  return (
    <group ref={boardRef}>
      <Board />
      <Pieces />
    </group>
  );
}

export function MainCanvas() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <PerspectiveCamera makeDefault position={[-10, 4, 0]} />

      <RotatingBoardAndPieces />

      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport
          axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]}
          labelColor="white"
        />
      </GizmoHelper>
      <Environment preset="city" />
      <CameraControls />

      <ClickHandler />
    </Canvas>
  );
}
