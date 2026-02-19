// import { useGLTF } from '@react-three/drei'
// import React, { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from "@gsap/react";


// const Target = () => {

//   const targetRef = useRef();
//   const { scene } = useGLTF(
//   'https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf'
  
// )
// }
// useGSAP(() => {
//   gsap.to(targetRef.current.position, {
//     y: "+=1",
//     duration: 1.5,
//     repeat: -1,
//     yoyo: true,
//   });
// }, []);


// return (
//   <mesh
//     ref={targetRef}
//     position={[-4, -3, -2]}   
//   >
//     <primitive object={scene} />
//   </mesh>
// )



// export default Target




import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    'https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf',
  );

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;