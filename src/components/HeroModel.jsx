import React, { useEffect, useRef, useState } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

export default function HeroModel(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/cool_man.glb')
  const { actions } = useAnimations(animations, group)
  const [modelScale, setModelScale] = useState(2)
  const [modelPosition, setModelPosition] = useState([0, -5, 0])
  const [lookRotationY, setLookRotationY] = useState(0)
  const basePosition = props.position ?? [0, 0, 0]
  const baseRotation = props.rotation ?? [0, 0, 0]
  const mergedPosition = [
    basePosition[0] + modelPosition[0],
    basePosition[1] + modelPosition[1],
    basePosition[2] + modelPosition[2],
  ]

  useFrame((_, delta) => {
    if (!group.current) {
      return
    }

    easing.dampE(
      group.current.rotation,
      [baseRotation[0], baseRotation[1] + lookRotationY, baseRotation[2]],
      0.35,
      delta
    )
  })

  useEffect(() => {
    if (!actions) {
      return undefined
    }

    actions.walking?.reset().fadeIn(0.5).play()
    setModelScale(1.8)
    setModelPosition([0, -7, -2])

    const saluteTimer = window.setTimeout(() => {
      actions.walking?.fadeOut(3)
      actions.salute?.reset().fadeIn(0.25).play()
      setModelScale(4)
      setModelPosition([0, -10, 0])
    }, 1000)

    const sitTimer = window.setTimeout(() => {
      actions.salute?.fadeOut(0.5)
      actions.sit?.reset().fadeIn(0.5).play()
      setModelScale(5)
      setModelPosition([0, -7, 0])
    }, 6000)

    const lookLeftTimer = window.setTimeout(() => {
      setLookRotationY(0.35)
    }, 7200)

    const lookRightTimer = window.setTimeout(() => {
      setLookRotationY(-0.3)
    }, 8600)

    const lookFrontTimer = window.setTimeout(() => {
      // Slightly turn toward the camera/user instead of returning perfectly neutral.
      setLookRotationY(-0.2)
    }, 10200)

    return () => {
      window.clearTimeout(saluteTimer)
      window.clearTimeout(sitTimer)
      window.clearTimeout(lookLeftTimer)
      window.clearTimeout(lookRightTimer)
      window.clearTimeout(lookFrontTimer)
    }
  }, [actions])

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={mergedPosition}
      scale={modelScale}
      rotation={baseRotation}
    >
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]} scale={2}>
          <group name='root'>
            <group name='GLTF_SceneRootNode' rotation={[Math.PI / 2, 0, 0]}>
              <group name='Armature_178'>
                <group name='GLTF_created_0'>
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name='Object_7'
                    geometry={nodes.Object_7.geometry}
                    material={materials['Wolf3D_Skin.003']}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name='Object_9'
                    geometry={nodes.Object_9.geometry}
                    material={materials['Wolf3D_Teeth.003']}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name='Object_11'
                    geometry={nodes.Object_11.geometry}
                    material={materials['Wolf3D_Body.003']}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name='Object_13'
                    geometry={nodes.Object_13.geometry}
                    material={materials['Wolf3D_Outfit_Bottom.003']}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name='Object_15'
                    geometry={nodes.Object_15.geometry}
                    material={materials['Wolf3D_Outfit_Footwear.003']}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name='Object_17'
                    geometry={nodes.Object_17.geometry}
                    material={materials['Wolf3D_Outfit_Top.003']}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    name='Object_19'
                    geometry={nodes.Object_19.geometry}
                    material={materials['Wolf3D_Hair.003']}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name='Object_21'
                    geometry={nodes.Object_21.geometry}
                    material={materials['Wolf3D_Glasses.003']}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <skinnedMesh
                    name='Object_23'
                    geometry={nodes.Object_23.geometry}
                    material={materials['Wolf3D_Eye.003']}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <skinnedMesh
                    name='Object_25'
                    geometry={nodes.Object_25.geometry}
                    material={materials['Wolf3D_Eye.003']}
                    skeleton={nodes.Object_25.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/cool_man.glb')
