import React, { Suspense } from 'react'
import { Leva } from 'leva'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'

import Button from '../components/Button'
import CanvasLoader from '../components/CanvasLoader'
import HeroCamera from '../components/HeroCamera'
import HeroModel from '../components/HeroModel'
import StarsCanvas from '../components/StarsCanvas'
import { calculateSizes } from '../constants'

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <section className='relative flex min-h-screen w-full flex-col' id='home'>
      <div className='absolute inset-0 h-full w-full'>
        <StarsCanvas />
        <Canvas className='-z-10 -mt-10 h-full w-full'>
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <HeroModel
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, 0, 0]}
              />
            </HeroCamera>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>

      <div className='c-space relative mx-auto flex w-full flex-col gap-3 mt-20 sm:mt-36'>
        <div>
          <p className='header-text font-generalsans text-xl font-bold text-white sm:text-5xl'>
            Hi, I&apos;m Nikhil <span className='waving-hand'>👋</span>
          </p>
          <p className='hero_tag mt-2 !text-left text-xl text-neutral-200'>
            Full Stack Developer
          </p>
          <p className='about max-w-[37rem] text-neutral-200'>
            Driven Full Stack Developer passionate about building modern, <br /> scalable, and user-friendly web applications. Skilled in front -end <br /> and back-end development with a focus on clean code and performance.
          </p>

          <div className='mt-3 mx-2 flex cursor-pointer gap-3'>
            <a
              className='social-icon'
              href='https://github.com/NikhilBhatt-dev'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='/assets/github.svg'
                alt='github'
                className='h-1/2 w-1/2'
              />
            </a>
            <a
              className='social-icon'
              href='https://www.linkedin.com/in/nikhil-bhatt-485046295/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='/assets/linkedin.svg'
                alt='linkedin'
                className='h-1/2 w-1/2'
              />
            </a>
           
           
            <a
              className='social-icon'
               href=''
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='/assets/instagram.svg'
                alt='instagram'
                className='h-1/2 w-1/2'
              />
            </a>
          </div>

          <div className='mt-2 flex gap-3'>
            <a href='#contact' className='z-50 w-fit'>
              <Button
                name='CONTACT ME'
                isBeam
                containerClass='w-40 sm:min-w-40 sm:w-fit'
              />
            </a>

            <a
              href=''
              rel='noopener noreferrer'
              className='z-50 w-fit'
            >
              <Button
                name='CV'
                isBeam
                containerClass='w-40 sm:min-w-40 sm:w-fit'
              />
            </a>
          </div>
        </div>

        
      </div>

      <div className='c-space absolute -bottom-2 left-0 right-0 z-10 flex w-full justify-center sm:-bottom-4'>
        <a href='#about' className='flex w-full justify-center sm:w-auto'>
          <Button
            name="Let's work together"
            isBeam
            containerClass='mx-auto w-full sm:min-w-96 sm:w-fit'
            p
          />
        </a>
      </div>

     
    </section>
  )
}

export default Hero
