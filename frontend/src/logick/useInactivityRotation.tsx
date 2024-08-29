import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function useInactivityRotation(inactiveTime: number, rotationSpeed: number) {
  const [isRotating, setIsRotating] = useState(false);
  const boardRef = useRef<THREE.Group>(null);
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useFrame(() => {
    if (isRotating && boardRef.current) {
      boardRef.current.rotation.y += rotationSpeed;
    }
  });

  useEffect(() => {
    const resetInactivityTimer = () => {
      setIsRotating(false);
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);

      inactivityTimer.current = setTimeout(() => {
        setIsRotating(true);
      }, inactiveTime);
    };

    window.addEventListener("click", resetInactivityTimer);

    // Start inactivity timer on mount
    inactivityTimer.current = setTimeout(() => {
      setIsRotating(true);
    }, inactiveTime);

    return () => {
      window.removeEventListener("click", resetInactivityTimer);
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    };
  }, [inactiveTime]);

  return boardRef;
}