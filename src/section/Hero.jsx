import React, { Suspense } from 'react'

import {Canvas} from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';

import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
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

      <div className='absolute inset-0 h-full w-full sm:inset-6 lg:inset-10 mt-6'>


          <Canvas
            className='h-full w-full'
            dpr={[1, 1.5]}
            shadows
            gl={{ antialias: true, alpha: true }}
          >
          <Suspense fallback={<CanvasLoader />}>

            <PerspectiveCamera makeDefault fov={32} position={[0, 3, 22]} />
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2.4}
              maxPolarAngle={Math.PI / 2.05}
              minAzimuthAngle={-Math.PI / 8}
              maxAzimuthAngle={Math.PI / 8}
            />
            <HackerRoom
              position={ismobile ? [0, -1.9, 0] : [0.6, -1.1, 0]}
              scale={ismobile ? 0.2 : isTablet ? 0.26 : 0.3}
              rotation={[0, Math.PI / 4, 0]}
            />

            <ambientLight intensity={1.4} />
            <hemisphereLight intensity={1.1} groundColor="#111111" color="#8fd3ff" />
            <directionalLight
              castShadow
              position={[8, 12, 6]}
              intensity={2.2}
              color="#f8fbff"
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <directionalLight position={[-8, 6, 8]} intensity={1} color="#7dd3fc" />
            <pointLight position={[0, 3, 10]} intensity={14} color="#f97316" distance={28} />
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










