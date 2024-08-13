import { Canvas } from "@react-three/fiber"
import { Board } from "./board/Board"
import { CameraControls } from "@react-three/drei";


export function MainCanvas(){
  return(
    <Canvas>
      <Board/>
      <CameraControls />
    </Canvas>
  )
}