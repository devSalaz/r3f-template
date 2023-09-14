import React, { useRef } from "react";
import { useFrame, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

import VertexShader from "../Assets/Shaders/TemplateShader/VertexShader";
import FragmentShader from "../Assets/Shaders/TemplateShader/FragmentShader";

const MainScene = () => {
  const cubeRef = useRef(null);
  const materialRef = useRef(null);

  const CubeMaterial = shaderMaterial({}, VertexShader, FragmentShader);
  extend({ CubeMaterial });

  useFrame((state, delta) => {
    cubeRef.current.rotation.x += delta;
    cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <mesh ref={cubeRef}>
        <boxGeometry />
        <cubeMaterial ref={materialRef} />
      </mesh>
    </>
  );
};

export default MainScene;
