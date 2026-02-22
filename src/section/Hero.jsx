import React, { Suspense } from 'react'
import {Canvas} from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import CanvasLoder from '../components/CanvasLoder';

import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Rings';
import HeroCamera from '../components/HeroCamera';
import Button from '../components/Button';




const Hero = () => {




  const isSmall = useMediaQuery({maxWidth: 440})
  const ismobile = useMediaQuery({maxWidth: 768})
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})


  const sizes =  calculateSizes(isSmall, ismobile, isTablet)

  return (
    <section className='relative flex min-h-screen w-full flex-col overflow-x-clip' id='home'>
       
      <div className='mx-auto mt-24 flex w-full flex-col gap-3 c-space sm:mt-32 lg:mt-36'>
       

        <p className='px-2 text-center font-generalsans text-2xl font-medium text-white sm:text-3xl'>Hi, I am Nikhil Bhatt
          <span className='waving-hand'>👋</span>
        </p>

        <p className="hero_tag text-gray_gradient">Full Stack Web Developer</p>
      </div>

      <div className='absolute inset-0 h-full w-full sm:inset-6 lg:inset-10'>
      {/* <div className='w-full h-[650px]  '> */}

        
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoder />}>
         
          <PerspectiveCamera makeDefault position={[0,0,20]}  />
            <HeroCamera ismobile={ismobile}>
            <HackerRoom 
            position={sizes.deskPosition} 
            scale={sizes.deskScale}
            rotation={[0,-Math.PI, 0 ]}
             />

             </HeroCamera>

              <group>
               
                 <ReactLogo position = {sizes.reactLogoPosition} />
                 <Cube  position = {sizes.cubePosition}/>
                 <Rings position= {sizes.ringPosition}/>
                   {/* <Target position = {sizes.ringPositionPosition}></Target> */}

              </group>  

            <ambientLight intensity={1} />
            <directionalLight position={[10,10,10]} 
            intensity={0.5} /> 
            </Suspense>

        </Canvas>

      </div>

      <div className='absolute bottom-4 left-0 right-0 z-10 flex w-full justify-center c-space sm:bottom-2 lg:bottom-[-8px]'>
        <a href="#about" className='block w-full sm:w-auto'>
          <Button name='lets work together' isBeam containerClass='w-full max-w-sm px-4 text-sm sm:w-auto sm:min-w-[18rem] sm:px-6 sm:text-base md:min-w-[20rem] md:px-7 lg:min-w-[22rem] lg:px-8 lg:text-lg xl:min-w-[24rem]'/>
        </a>
      </div>
    </section>
  )
}

export default Hero






