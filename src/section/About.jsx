import React, { useState } from 'react'

import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {
 

  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy =  () =>{
    navigator.clipboard.writeText('bhattnikhil158@gmail.com');

    setHasCopied(true);
    setTimeout( () => {
      setHasCopied(false);
    }, 2000);
  }
  return (
    <section className='c-space my-20' id='about'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 h-full'>

        <div className='lg:col-span-2'>
          <div className='grid-container'>
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className='w-full sm:h-[276px] h-fit object-contain'
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
              src="/assets/grid2.png"
              alt="grid2"
              className='w-full sm:w-[276px] h-fit object-contain'
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
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                showAtmosphere={true}
                showGraticules={true}

              />
            </div>
            <div>
              <p className='grid-headtext'>
                I work remotely across most timezones.
              </p>
              <p className='grid-subtext'>
                I'm based in India, with remote work available
              </p>
              <Button name='Contact Me' isBeam containerClass='w-full mt-10' />
            </div>
          </div>
          <div className='grid-container justify-between lg:h-[290px]'>
            <img src="/assets/grid4.png" alt="grid-4" className='w-full h-[160px] object-contain' />

            <div className='space-y-3'>
              <p className='grid-subtext text-center'>
                Contact me
              </p>

              <div className='copy-container justify-center' onClick={handleCopy}>
              <img src={hasCopied ? '/assets/tick.svg': '/assets/copy.svg'} alt="copy" />
                <p className='lg:text-xl md:text-xl font-medium text-gray_gradient text-white text-center break-all'>bhattnikhil158@gmail.com</p>

              </div>
            </div>
          </div>
        </div>


        <div className='lg:col-span-4'>
          <div className='grid-container'>
            <img src="/assets/grid3.png" alt="grid3" className='w-full sm:h-[266px] h-fit object-contain' />
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

