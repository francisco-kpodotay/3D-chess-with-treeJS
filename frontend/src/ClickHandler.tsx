import * as THREE from "three";
import { useEffect,  useRef,  } from "react";
import { useThree } from "@react-three/fiber";

export function ClickHandler() {
  const { camera, scene } = useThree();
  const piece = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const intersectedMesh = selectMesh(event);
      
      if (!intersectedMesh) return;

      const tileScale = new THREE.Vector3(1, 1, 1);

      if (tileScale.equals(intersectedMesh.scale)) {
        // Handling tile click
        console.log("This is a tile: ", intersectedMesh);

        if (piece.current) {
          // Move the piece to the tile's position
          piece.current.position.set(intersectedMesh.position.x, piece.current.position.y, intersectedMesh.position.z);
          changeMeshColor("original", piece.current);
          piece.current = null;
        }
      } else {
        // Handling piece click
        console.log("This is a piece: ", intersectedMesh);

        if (piece.current === null) {
          // Select the piece
          piece.current = intersectedMesh;
          changeMeshColor("red", piece.current);
        } else if (piece.current === intersectedMesh) {
          // Deselect the piece
          changeMeshColor("original", piece.current);
          piece.current = null;
        } else {
          piece.current.position.set(intersectedMesh.position.x, piece.current.position.y, intersectedMesh.position.z);
          intersectedMesh.position.set(4.5,intersectedMesh.position.y,4.5);
          changeMeshColor("original", piece.current);
          piece.current = null;
        }
      }
    }

    function changeMeshColor(color: "red" | "original", mesh: THREE.Mesh) {
      if (Array.isArray(mesh.material)) {
        mesh.material.forEach((material) => {
          const newMaterial = material.clone();
          applyColor(newMaterial, color);
        });
      } else {
        const newMaterial = mesh.material.clone();
        applyColor(newMaterial, color);
        mesh.material = newMaterial;
      }
    }
    
    function applyColor(material: THREE.Material, color: "red" | "original") {
      if (material instanceof THREE.MeshStandardMaterial || material instanceof THREE.MeshBasicMaterial) {
        if (color === "red") {
          material.color.set(0xff0000);
        } else if (color === "original") {
          material.color.set(0xffffff); 
        }
      }
    }

    function selectMesh(event: MouseEvent): THREE.Mesh | null {
      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();

      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;
        if (intersectedObject instanceof THREE.Mesh) {
          return intersectedObject;
        }
      }
      return null;
    }

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [camera, scene]);

  return null;
}