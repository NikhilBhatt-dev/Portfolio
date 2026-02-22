import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import DemoComputer from '../components/DemoComputer';
import { useMediaQuery } from 'react-responsive';

import CanvasLoder from '../components/CanvasLoder'
const projectsCount = myProjects.length;

const Projects = () => {

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectsCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectsCount - 1 ? 0 : prevIndex + 1;
      }
    });
  }

  return (
    <section className='c-space my-14 sm:my-20' id='work'>
      <p className='head-text'>My Work</p>

      <div className='mt-12 grid w-full grid-cols-1 gap-5 lg:grid-cols-2'>

        <div className='relative flex flex-col gap-5 px-5 py-8 shadow-2xl sm:p-10'>

          <div className='absolute top-0 right-0'>
            <img
              src={currentProject.spotlight}
              alt='spotlight'
              className='h-56 w-full rounded-xl object-cover sm:h-80 lg:h-96'
            />
          </div>

          <div
            className='p-3 backdrop-filter backdrop-blur-3xl w-16 h-16 rounded-lg flex items-center justify-center'
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className='w-full h-full object-contain shadow-sm'
            />
          </div>

          <div className='my-5 flex flex-col gap-5 text-white-600'>
            <p className='animatedText text-xl font-semibold text-white sm:text-2xl'>
              {currentProject.title}
            </p>

            <p className='animatedText'>
              {currentProject.desc}
            </p>

            <p className='animatedText'>
              {currentProject.subdesc}
            </p>
          </div>

          <div className='flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between'>
            <div className='flex flex-wrap items-center gap-3'>
              {currentProject.tags.map((tag, index) => (
                <div key={index} className='tech-logo'>
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className='flex w-full items-center justify-end gap-2 text-white-600 sm:w-auto'
              href={currentProject.href}
              target='_blank'
              rel='noreferrer'
            >
              <p>Check live site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className='w-3 h-3' />
            </a>
          </div>

          <div className='flex justify-between items-center mt-7'>
            <button
              className='arrow-btn'
              onClick={() => handleNavigation('previous')}
            >
              <img src="/assets/left-arrow.png" alt="left arrow" className='w-4 h-4' />
            </button>

            <button
              className='arrow-btn'
              onClick={() => handleNavigation('next')}
            >
              <img src="/assets/right-arrow.png" alt="right arrow" className='w-4 h-4' />
            </button>
          </div>

        </div>





        <div className='h-[320px] rounded-lg border border-black-300 bg-black-200 sm:h-96 md:h-[460px] lg:h-full'>

          <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <directionalLight position={[10, 10, 5]} />
            <Center>

              <Suspense fallback={<CanvasLoder/>}>
                <group scale={isMobile ? 1.15 : isTablet ? 1.3 : 2.0} position={[0, isMobile ? -4 : -3, 0]} rotation={[0, -0.1, 0]}>

                  <DemoComputer />


                </group>
              </Suspense>

            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />

          </Canvas>
        </div>

      </div>
    </section>
  )
}

export default Projects
