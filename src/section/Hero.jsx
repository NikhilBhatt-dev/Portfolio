import React, { Suspense } from 'react'
import {Canvas} from '@react-three/fiber';
import { PerspectiveCamera, Ring } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import CanvasLoder from '../components/CanvasLoder';

import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/cube';
import Rings from '../components/Rings';




const Hero = () => {




  const isSmall = useMediaQuery({maxWidth: 440})
  const ismobile = useMediaQuery({maxWidth: 768})
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})


  const sizes =  calculateSizes(isSmall, ismobile, isTablet)

  return (
    <section className='min-h-screen w-full flex flex-col relative'>
       
      <div className='w-full mx-auto flex flex-col sm:mt-35 mt-20 c-space gap-3'>
      

        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans ml-7'>Hi, I am Nikhil Bhatt
          <span className='waving-hand'>👋</span>
        </p>

        <p className="hero_tag text-gray_gradient">Full Stack Web Developer</p>
      </div>

      <div className='w-full h-full absolute inset-10'>
      {/* <div className='w-full h-[650px]  '> */}

        
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoder />}>
         
          <PerspectiveCamera makeDefault position={[0,0,20]}  />

            <HackerRoom 
            position={sizes.deskPosition} 
            scale={sizes.deskScale}
            rotation={[0,-Math.PI, 0 ]}
             />

              <group>
                 <Target position = {sizes.targetPosition}></Target>
                 <ReactLogo position = {sizes.reactLogoPosition} />
                 <Cube  position = {sizes.cubePosition}/>
                 <Rings position= {sizes.ringPosition}/>
                 
              </group>  

            <ambientLight intensity={1} />
            <directionalLight position={[10,10,10]} 
            intensity={0.5} /> 
            </Suspense>

        </Canvas>

      </div>
    </section>
  )
}

export default Hero

//2.03