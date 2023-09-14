import React from "react";
import MainScene from "./MainScene";

import { Canvas } from "@react-three/fiber";

const CanvasThree = () => {
  return (
    <>
      <div className="canvas-container">
        <Canvas>
          <MainScene />
        </Canvas>
      </div>
    </>
  );
};

export default CanvasThree;
