
import { useState } from "react";

import Globe from 'react-globe.gl'
import Button from '../components/Button'
import { useMediaQuery } from 'react-responsive'
import GlobeErrorBoundary from '../components/GlobeErrorBoundary'

const createFallbackCables = () =>
  Array.from({ length: 50 }, () => ({
    coords: [
      {
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360
      },
      {
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360
      }
    ]
  }));

const About = () => {
 
  const isSmall = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const globeSize = isSmall ? 240 : isTablet ? 300 : 326;

  const [hasCopied, setHasCopied] = useState(false);
  const [cables] = useState(createFallbackCables);



  const handleCopy =  () =>{
    navigator.clipboard.writeText('bhattnikhil158@gmail.com');

    setHasCopied(true);
    setTimeout( () => {
      setHasCopied(false);
    }, 2000);
  }

  return (
    <section className='c-space my-14 sm:my-20' id='about'>
      <div className='grid h-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6 lg:gap-6'>

        <div className='lg:col-span-2'>
          <div className='grid-container'>
            <img
              src="/assets/grid.png"
              alt="grid-1"
              className='h-fit w-full object-contain sm:h-[276px]'
            />

            <div>
              <p className='grid-headtext'>Hi, I am Nikhil Bhatt</p>

              <p className="grid-subtext text-white">
                A passionate Full Stack Developer focused on building modern
                and animated 3D web experiences.

                I enjoy creating immersive user experiences using React,
                Three.js, and modern web technologies.
              </p>
            </div>
          </div>
        </div>

        <div className='lg:col-span-2'>
          <div className="grid-container">
            <img
              src="/assets/techstacks.png"
              
             
              alt="grid2"
              className='mx-auto h-fit w-full object-contain sm:w-[276px]'
            />

            <div>
              <p className='grid-headtext'>Tech Stack</p>
              <p className='grid-subtext'>
                I specialize in JavaScript with a focus on React, Three.js, and Next.js.
              </p>
            </div>
          </div>
        </div>


        <div className='lg:col-span-2 lg:row-span-2 flex flex-col gap-5'>
          <div className='grid-container'>
            <div className='flex w-full items-center justify-center rounded-3xl' style={{ minHeight: globeSize }}>
              <GlobeErrorBoundary
                fallback={
                  <div className='flex h-full w-full items-center justify-center text-sm text-white-600'>
                    3D globe unavailable
                  </div>
                }
              >
                

                <Globe
                  height={globeSize}
                  width={globeSize}
                  backgroundColor="rgba(0,0,0,0)"
                  // globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                  

                  showAtmosphere={true}

                  pathsData={cables}
                  pathPoints="coords"
                  pathPointLat="lat"
                  pathPointLng="lng"

                  pathColor={() => ["#ff0080", "#00ffff", "#00ff00", "#ffaa00"][Math.floor(Math.random() * 4)]}

                  pathStroke={0.4}
                  pathDashLength={0.5}
                  pathDashGap={0.1}
                  pathDashAnimateTime={4000}
                />


              </GlobeErrorBoundary>
            </div>
            <div>
              <p className='grid-headtext'>
                I work remotely across most timezones.
              </p>
              <p className='grid-subtext'>
                I'm based in India, with remote work available
              </p>
              <Button name='Contact Me' isBeam containerClass='mt-8 w-full sm:mt-10 sm:w-fit sm:min-w-56' />
            </div>
          </div>
          <div className='grid-container justify-between lg:h-[290px]'>
            <img src="/assets/grid4.png" alt="grid-4" className='h-[140px] w-full object-contain sm:h-[160px]' />

            <div className='space-y-3'>
              <p className='grid-subtext text-center'>
                Contact me
              </p>

              <div className='copy-container justify-center' onClick={handleCopy}>
              <img src={hasCopied ? '/assets/tick.svg': '/assets/copy.svg'} alt="copy" />
                <p className='text-center text-sm font-medium text-gray_gradient text-white break-all sm:text-base lg:text-xl'>bhattnikhil158@gmail.com</p>

              </div>
            </div>
          </div>
        </div>


        <div className='lg:col-span-4'>
          <div className='grid-container'>
            <img src="/assets/grid3.png" alt="grid3" className='h-fit w-full object-contain sm:h-[266px]' />
            <div>
              <p className='grid-headtext'>My Passion for coding</p>
              <p className='grid-subtext'>
                I have a deep passion for coding and constantly strive to
                improve my skills and knowledge in the field.
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About

