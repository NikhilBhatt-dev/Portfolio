import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const HeroCamera = ({ children, ismobile }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Smoothly move camera
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);


    // Only rotate if NOT mobile
    if (!ismobile && groupRef.current) {
      easing.dampE(
        groupRef.current.rotation,
       [-state.pointer.y / 5, -state.pointer.x / 8, 0],
       
        0.25,
        delta
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export default HeroCamera;
