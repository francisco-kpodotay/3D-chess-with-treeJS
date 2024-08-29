import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";


import {
  CameraControls,
  Environment,
  GizmoHelper,
  GizmoViewport,
  PerspectiveCamera,
} from "@react-three/drei";

import { Board } from "./board/Board";
import { Pieces } from "./pieces/Pieces";
import { ClickHandler } from "./logick/ClickHandler";
import { useInactivityRotation } from "./logick/useInactivityRotation";

const ROTATION_SPEED = 0; // -0.002 
const INACTIVE_TIME = 5000; // 5000ms = 5 seconds

function RotatingBoardAndPieces() {
  const boardRef = useInactivityRotation(INACTIVE_TIME, ROTATION_SPEED);

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
