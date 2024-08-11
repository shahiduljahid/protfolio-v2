import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./../Loader";

const Computers = ({ isMobile, scaleValue }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor="black" />
      <spotLight
        position={[-200, 500, 100]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* <pointLight intensity={50} /> */}
      <primitive
        object={computer.scene}
        scale={scaleValue}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
function getScreenSizeValue() {
  const width = window.innerWidth;
  let value;

  if (width >= 1280) {
    // Extra-large screens (>= 1280px)
    value = 0.8;
  } else if (width >= 1024) {
    // Large screens (>= 1024px)
    value = 1.5;
  } else if (width >= 768) {
    // Medium screens (>= 768px)
    value = 1.5;
  } else if (width > 1280) {
    // Screens larger than extra-large (> 1280px)
    value = 1.5;
  } else {
    // Small screens (less than 768px)
    value = 1.2; // Assuming small screens fall under medium size value condition
  }

  return value;
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scaleValue, setScaleValue] = useState(1);

  useEffect(() => {
    setScaleValue(getScreenSizeValue());
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    getScreenSizeValue;
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} scaleValue={scaleValue} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
