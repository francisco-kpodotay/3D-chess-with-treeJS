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
import { useEffect } from "react";

// New component that handles the click event
function RaycastHandler() {
  const { camera, scene } = useThree();
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  function handleClick(event) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
  
    if (intersects.length > 0) {
      const intersectedObject = intersects[0].object;
  
      // Check if the object has a material
      if (intersectedObject.material) {
        // Clone and modify the material color if needed
        const newMaterial = intersectedObject.material.clone();
        newMaterial.color.set(0xff0000);
        intersectedObject.material = newMaterial;
      }
  
      // Set the position to [0, 0, 0]
      intersectedObject.position.set(0, 0, 0);
  
      console.log("Intersected object: ", intersectedObject);
    }
  }
  
  

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [camera, scene]);

  return null; // This component doesn't render anything visible
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

      {/* Include RaycastHandler inside the Canvas to use useThree */}
      <RaycastHandler />
    </Canvas>
  );
}
