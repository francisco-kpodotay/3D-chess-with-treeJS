import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function useInactivityRotation() {
  const [isRotating, setIsRotating] = useState(false);
  const boardRef = useRef<THREE.Group>(null);
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inactiveTime = 5000; //30000 = 30 seconds

  useFrame(() => {
    if (isRotating && boardRef.current) {
      boardRef.current.rotation.y -= 0.004; 
    }
  });

  useEffect(() => {
    function handleUserClick() {
      // Reset rotation and clear timer on click
      setIsRotating(false);
      if (inactivityTimer.current) {
        clearTimeout(inactivityTimer.current);
      }
      inactivityTimer.current = setTimeout(() => {
        setIsRotating(true);
      }, inactiveTime); 
    }

    window.addEventListener("click", handleUserClick);

    // Start timer on mount
    inactivityTimer.current = setTimeout(() => {
      setIsRotating(true);
    }, inactiveTime);

    return () => {
      // Cleanup
      window.removeEventListener("click", handleUserClick);
      if (inactivityTimer.current) {
        clearTimeout(inactivityTimer.current);
      }
    };
  }, []);

  return boardRef;
}
