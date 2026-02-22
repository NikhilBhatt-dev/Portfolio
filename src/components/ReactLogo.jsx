import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const FLOAT_SPEED_X = 1.3;
const FLOAT_AMPLITUDE_X = 0.28;
const ROTATION_SPEED_X = 0.45;
const ROTATION_SPEED_Y = 0.8;
const ROTATION_SPEED_Z = 1.4;
const PHASE_OFFSET = 0.9;
const BASE_ROTATION = [0, 0, 0];

const ReactLogo = ({ position = [8, 8, 0], ...props }) => {
  const { nodes, materials } = useGLTF('/models/react.glb');
  const groupRef = useRef();
  const basePosition = useMemo(() => [position[0], position[1], position[2]], [position]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const t = clock.getElapsedTime() + PHASE_OFFSET;
    groupRef.current.position.set(
      basePosition[0] + Math.cos(t * FLOAT_SPEED_X) * FLOAT_AMPLITUDE_X,
      basePosition[1],
      basePosition[2],
    );
    groupRef.current.rotation.set(
      BASE_ROTATION[0] + t * ROTATION_SPEED_X,
      BASE_ROTATION[1] + t * ROTATION_SPEED_Y,
      BASE_ROTATION[2] + t * ROTATION_SPEED_Z,
    );
  });

  return (
    <group ref={groupRef} scale={0.4} {...props}>
      <mesh
        geometry={nodes['React-Logo_Material002_0'].geometry}
        material={materials['Material.002']}
        position={[0, 0.79, 0.181]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.39, 0.39, 0.5]}
      />
    </group>
  );
};

useGLTF.preload('/models/react.glb');

export default ReactLogo;
