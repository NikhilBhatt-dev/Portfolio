import { useGSAP } from '@gsap/react';
import { Center, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useCallback, useRef } from 'react';

const Rings = ({ position }) => {
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture('textures/rings.png');

  useGSAP(
    () => {
      if (refList.current.length === 0) return;

      const startPosition = [Math.abs(position[0]), position[1], position[2]];
      const centerPosition = [0, 0, position[2]];

      refList.current.forEach((r) => {
        r.position.set(startPosition[0], startPosition[1], startPosition[2]);
      });

      const timeline = gsap.timeline();

      timeline
        .to(refList.current.map((r) => r.position), {
          x: position[0],
          y: position[1],
          z: position[2],
          duration: 1.2,
          stagger: {
            each: 0.08,
          },
          ease: 'power2.out',
        })
        .to(refList.current.map((r) => r.position), {
          x: centerPosition[0],
          y: centerPosition[1],
          z: centerPosition[2],
          duration: 1.2,
          stagger: {
            each: 0.08,
          },
          ease: 'power2.inOut',
        })
        .to(
          refList.current.map((r) => r.rotation),
          {
            y: `+=${Math.PI * 2}`,
            x: `-=${Math.PI * 2}`,
            duration: 2.5,
            repeat: -1,
            repeatDelay: 0.5,
            stagger: {
              each: 0.15,
            },
          },
        );

      return () => {
        timeline.kill();
      };
    },
    {
      dependencies: position,
    },
  );

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]}></torusGeometry>
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
