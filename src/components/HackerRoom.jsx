import React, { useMemo, useRef } from 'react'
import { Center, Float, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

const lerp = (start, end, alpha) => start + (end - start) * alpha

const getSegmentProgress = (elapsed, start, duration) => {
  const raw = (elapsed - start) / duration
  return Math.min(Math.max(raw, 0), 1)
}

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const HackerRoom = (props) => {
  const { scene } = useGLTF('/models/scene.glb')
  const groupRef = useRef()
  const leftHeadlightRef = useRef()
  const rightHeadlightRef = useRef()
  const leftHeadlightTargetRef = useRef()
  const rightHeadlightTargetRef = useRef()
  const leftGlowRef = useRef()
  const rightGlowRef = useRef()
  const leftSpillRef = useRef()
  const rightSpillRef = useRef()
  const targetPosition = useMemo(() => {
    const [x = 0, y = 0, z = 0] = props.position || [0, 0, 0]
    return { x, y, z }
  }, [props.position])

  useFrame((state) => {
    if (!groupRef.current) return

    const elapsed = state.clock.getElapsedTime()
    const y = targetPosition.y
    const z = targetPosition.z
    const baseRotationY = props.rotation?.[1] ?? 0
    let x = targetPosition.x
    let rotationY = baseRotationY

    if (elapsed < 2.4) {
      const progress = easeInOutCubic(getSegmentProgress(elapsed, 0, 2.4))
      x = lerp(targetPosition.x - 8, targetPosition.x, progress)
      rotationY = lerp(baseRotationY - 0.1, baseRotationY, progress)
    }

    groupRef.current.position.set(x, y, z)
    groupRef.current.rotation.set(props.rotation?.[0] ?? 0, rotationY, props.rotation?.[2] ?? 0)

    const headlightProgress = easeInOutCubic(clamp((elapsed - 2.2) / 0.9, 0, 1))
    const headlightIntensity = lerp(0, 42, headlightProgress)
    const spillOpacity = lerp(0, 0.28, headlightProgress)
    const spillScale = lerp(0.7, 1.1, headlightProgress)
    const glowOpacity = lerp(0, 0.95, headlightProgress)

    if (leftHeadlightRef.current) {
      leftHeadlightRef.current.intensity = headlightIntensity
      leftHeadlightRef.current.target = leftHeadlightTargetRef.current
    }

    if (rightHeadlightRef.current) {
      rightHeadlightRef.current.intensity = headlightIntensity
      rightHeadlightRef.current.target = rightHeadlightTargetRef.current
    }

    if (leftHeadlightTargetRef.current) {
      leftHeadlightTargetRef.current.updateMatrixWorld()
    }

    if (rightHeadlightTargetRef.current) {
      rightHeadlightTargetRef.current.updateMatrixWorld()
    }

    if (leftGlowRef.current) {
      leftGlowRef.current.material.opacity = glowOpacity
    }

    if (rightGlowRef.current) {
      rightGlowRef.current.material.opacity = glowOpacity
    }

    if (leftSpillRef.current) {
      leftSpillRef.current.material.opacity = spillOpacity
      leftSpillRef.current.scale.set(spillScale, spillScale, spillScale)
    }

    if (rightSpillRef.current) {
      rightSpillRef.current.material.opacity = spillOpacity
      rightSpillRef.current.scale.set(spillScale, spillScale, spillScale)
    }
  })

  return (
    <group ref={groupRef} rotation={props.rotation} scale={props.scale} dispose={null}>
      <Center>
        <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.18}>
          <primitive
            object={scene}
            position={[0, -1.2, 0]}
            rotation={[0, Math.PI / 7, 0]}
            scale={8.8}
          />
          <object3D ref={leftHeadlightTargetRef} position={[8.5, -0.35, 14]} />
          <object3D ref={rightHeadlightTargetRef} position={[4.8, -0.35, 14]} />
          <spotLight
            ref={leftHeadlightRef}
            position={[3.9, -0.08, 4.9]}
            angle={0.24}
            penumbra={0.5}
            distance={46}
            intensity={0}
            color="#fff7dc"
            decay={1.6}
          />
          <spotLight
            ref={rightHeadlightRef}
            position={[1.9, -0.08, 4.55]}
            angle={0.24}
            penumbra={0.5}
            distance={46}
            intensity={0}
            color="#fff7dc"
            decay={1.6}
          />
          <mesh ref={leftGlowRef} position={[3.95, -0.02, 5.05]}>
            <sphereGeometry args={[0.22, 16, 16]} />
            <meshBasicMaterial color="#fff8dc" transparent opacity={0} />
          </mesh>
          <mesh ref={rightGlowRef} position={[1.95, -0.02, 4.72]}>
            <sphereGeometry args={[0.22, 16, 16]} />
            <meshBasicMaterial color="#fff8dc" transparent opacity={0} />
          </mesh>
          <mesh
            ref={leftSpillRef}
            position={[4.5, -1.9, 12.8]}
            rotation={[-Math.PI / 2, 0, -0.2]}
          >
            <planeGeometry args={[4.2, 10]} />
            <meshBasicMaterial color="#fff3c4" transparent opacity={0} />
          </mesh>
          <mesh
            ref={rightSpillRef}
            position={[0.8, -1.9, 12.2]}
            rotation={[-Math.PI / 2, 0, -0.12]}
          >
            <planeGeometry args={[4.2, 10]} />
            <meshBasicMaterial color="#fff3c4" transparent opacity={0} />
          </mesh>
        </Float>
      </Center>
    </group>
  )
}

useGLTF.preload('/models/scene.glb')

export default HackerRoom
