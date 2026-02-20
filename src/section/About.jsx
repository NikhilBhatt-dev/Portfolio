import React from 'react'
import Globe from 'react-globe.gl'

const About = () => {
  return (
    <section className='c-space my-20'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>

        <div className='col-span-1 xl:row-span-3'>
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

        <div className='col-span-1 xl:row-span-3'>
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


        {/* <div className='col-span-1 xl:row-span-4'>
            <div className='grid-container'>
                <div  className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                    <Globe 
                    height={326}
                    width={326}
                    backgroundColor='rgba(0,0,0,0)'
                    backgroudImageOpacity={0.5}
                     showAtmosphere
                     showGraticules
                     globeimageUrl={}/>

                </div>
            </div>
        </div> */}
        <div className='col-span-1 xl:row-span-4'>
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
  </div>
</div>

      </div>
    </section>
  )
}

export default About