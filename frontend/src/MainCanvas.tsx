import { Canvas, useThree } from "@react-three/fiber";
import { Board } from "./board/Board";
import {
  CameraControls,
  Environment,
  GizmoHelper,
  GizmoViewport,
  PerspectiveCamera,
} from "@react-three/drei";
import { Pieces } from "./pieces/Pieces";
import * as THREE from "three";
import { useEffect, useReducer, useRef, useState } from "react";

// New component that handles the click event
function ClickHandler() {
  const { camera, scene } = useThree();
  const piece = useRef<THREE.Mesh | null>(null);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const intersectedMesh = selectMesh(event);
    const tileScale = new THREE.Vector3(1, 1, 1);

    if (tileScale.equals(intersectedMesh.scale)) {
      console.log("this is a tile: ", intersectedMesh);
      
      if (piece.current !== null){
        console.log(intersectedMesh?.position);
        piece.current.position.x = intersectedMesh?.position.x
        piece.current.position.z = intersectedMesh?.position.z
        changeMeshColor("original", piece.current);
        piece.current = null;
      }
    } else {
      console.log("this is a piece: ", intersectedMesh);

      if (piece.current === null) {
        console.log("Selected Piece: ", piece.current);
        piece.current = intersectedMesh;
        changeMeshColor("red", piece.current);
      } else {
        if (piece.current === intersectedMesh) {
          changeMeshColor("original", piece.current);
          piece.current = null;
        } else {
          //piece.current = intersectedMesh;
          piece.current.position.x = intersectedMesh.position.x
          piece.current.position.z = intersectedMesh.position.z
          
          intersectedMesh.position.x = 4.5
          intersectedMesh.position.z = 4.5
          changeMeshColor("original", piece.current);
          piece.current = null;
          //changeMeshColor("red", piece.current);
        }
      }

      //change the color to red

      //change back the color
      //changeMeshColor("original", intersectedObject)
    }

    //intersectedMesh.position.set(0, 0, 0);
  }

  function changeMeshColor(color, mesh) {
    const newMaterial = mesh.material.clone();
    if (color === "red") {
      newMaterial.color.set(0xff0000);
      mesh.material = newMaterial;
    }
    if (color === "original") {
      const originalColor = new THREE.Color(1, 1, 1);
      newMaterial.color.set(originalColor);
      mesh.material = newMaterial;
    }
  }

  function selectMesh(event: React.MouseEvent<HTMLButtonElement>) {
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const intersectedMesh = intersects[0].object;
      return intersectedMesh;
    } else {
      return null; //TO-DO
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [camera, scene]);

  return null;
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

      <Board />
      <Pieces />

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
