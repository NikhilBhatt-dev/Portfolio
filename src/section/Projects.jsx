import React, { useEffect, useState } from 'react'
import { myProjects } from '../constants'

const projectsCount = myProjects.length

const SkeletonBlock = ({ className = '' }) => (
  <div
    className={`skeleton-shimmer rounded-xl ${className}`.trim()}
    aria-hidden='true'
  />
)

const getProjectSceneKey = (title = '') => {
  const normalizedTitle = title.toLowerCase()

  if (
    normalizedTitle.includes('editor') ||
    normalizedTitle.includes('collaborative')
  ) {
    return 'editor'
  }

  if (
    normalizedTitle.includes('cli') ||
    normalizedTitle.includes('backend generator')
  ) {
    return 'cli'
  }

  if (
    normalizedTitle.includes('e-commerce') ||
    normalizedTitle.includes('ecommerce')
  ) {
    return 'ecommerce'
  }

  return 'ecommerce'
}

const sceneMetaMap = {
  ecommerce: {
    badge: 'Full-stack commerce',
    topChip: 'Stripe',
    bottomChip: 'JWT',
    metric: '24/7',
    metricLabel: 'Checkout flow',
    panelTitle: 'Commerce stack',
    panelItems: [
      'REST APIs',
      'Admin dashboard',
      'Cloudinary',
    ],
  },

  editor: {
    badge: 'Realtime collaboration',
    topChip: 'Yjs',
    bottomChip: 'Socket.IO',
    metric: '1K',
    metricLabel: 'Connections tested',
    panelTitle: 'Sync stack',
    panelItems: [
      'CRDT',
      'Presence',
      'Docker',
    ],
  },

  cli: {
    badge: 'Developer tooling',
    topChip: 'npm',
    bottomChip: 'E2E',
    metric: 'npx',
    metricLabel: 'One-command setup',
    panelTitle: 'Generator stack',
    panelItems: [
      'Templates',
      'Validation',
      'Testing',
    ],
  },
}

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
  const [isSpotlightLoaded, setIsSpotlightLoaded] = useState(false)
  const [displayedSpotlight, setDisplayedSpotlight] = useState(
    myProjects[0]?.spotlight
  )

  const currentProject = myProjects[selectedProjectIndex]

  const isEcommerceProject = currentProject.title
    ?.toLowerCase()
    .includes('ecommerce')

  const projectSceneKey = getProjectSceneKey(currentProject.title)
  const sceneMeta = sceneMetaMap[projectSceneKey]

  useEffect(() => {
    const nextSpotlight = currentProject.spotlight

    setIsSpotlightLoaded(false)

    if (nextSpotlight === displayedSpotlight) {
      setIsSpotlightLoaded(true)
      return
    }

    const preloadImage = new Image()
    preloadImage.src = nextSpotlight

    preloadImage.onload = () => {
      setDisplayedSpotlight(nextSpotlight)
      setIsSpotlightLoaded(true)
    }

    preloadImage.onerror = () => {
      setDisplayedSpotlight(nextSpotlight)
      setIsSpotlightLoaded(true)
    }
  }, [currentProject.spotlight, displayedSpotlight])

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0
          ? projectsCount - 1
          : prevIndex - 1
      }

      return prevIndex === projectsCount - 1
        ? 0
        : prevIndex + 1
    })
  }

  return (
    <section
      className='c-space my-14 sm:my-20'
      id='work'
    >
      <p className='head-text'>My Work</p>

      <div className='mt-12 grid w-full grid-cols-1 gap-5 lg:grid-cols-1'>

        {/* ================= PROJECT DETAILS ================= */}

        <div className='project-details-card relative flex flex-col gap-5 px-5 py-8 shadow-2xl sm:p-10'>

          {/* Project Spotlight */}
          <div className='absolute top-0 right-0 left-0 sm:left-auto'>

            {!isSpotlightLoaded && (
              <div className='project-spotlight-skeleton'>
                <SkeletonBlock className='h-full w-full rounded-xl' />
              </div>
            )}

            <img
              src={displayedSpotlight}
              alt={currentProject.title}
              className={`
                h-56
                w-full
                rounded-xl
                object-cover
                transition-opacity
                duration-500
                sm:h-80
                lg:h-96
                ${isSpotlightLoaded
                  ? 'opacity-100'
                  : 'opacity-0'}
              `}
            />

          </div>

          {/* Project Logo */}
          <div
            className='project-logo-box'
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt={`${currentProject.title} logo`}
              className={`
                project-logo-image
                ${currentProject.logoClassName || ''}
                ${isEcommerceProject
                  ? 'logo-fit-full'
                  : ''}
              `.trim()}
              style={currentProject.logoImageStyle}
            />
          </div>

          {/* Project Content */}
          <div className='project-copy-block my-5 flex flex-col gap-4 text-white-600 sm:gap-5'>

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

          {/* Technologies + Live Link */}
          <div className='mt-auto flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between'>

            <div className='flex flex-wrap items-center gap-3 max-sm:justify-center'>
              {currentProject.tags.map((tag, index) => (
                <div
                  key={index}
                  className='tech-logo'
                >
                  <img
                    src={tag.path}
                    alt={tag.name}
                  />
                </div>
              ))}
            </div>

            <a
              className='flex w-full items-center justify-center gap-2 text-white-600 sm:w-auto sm:justify-end'
              href={currentProject.href}
              target='_blank'
              rel='noreferrer'
            >
              <p>Check live site</p>

              <img
                src='/assets/arrow-up.png'
                alt='arrow'
                className='h-3 w-3'
              />
            </a>

          </div>

          {/* Navigation */}
          <div className='mt-7 flex items-center justify-between gap-4'>

            <button
              className='arrow-btn'
              onClick={() =>
                handleNavigation('previous')
              }
              aria-label='Previous project'
            >
              <img
                src='/assets/left-arrow.png'
                alt='Previous project'
                className='h-4 w-4'
              />
            </button>

            <button
              className='arrow-btn'
              onClick={() =>
                handleNavigation('next')
              }
              aria-label='Next project'
            >
              <img
                src='/assets/right-arrow.png'
                alt='Next project'
                className='h-4 w-4'
              />
            </button>

          </div>

        </div>

        {/* ================= PROJECT SHOWCASE ================= */}

      
        <div
          className={`
    project-showcase-shell
    theme-${projectSceneKey}
    h-[280px]
    sm:h-96
    md:h-[460px]
    lg:h-full
  `}
        >
          

       
            {/* =====================================================
              E-COMMERCE SCENE
             ===================================================== */}

          <div
            className={`
              project-scene
              ${projectSceneKey === 'ecommerce'
                ? 'is-visible'
                : ''}
            `}
          >

           
            

            
          </div>

          {/* =====================================================
              REALTIME COLLABORATIVE EDITOR
             ===================================================== */}

          <div
            className={`
              project-scene
              ${projectSceneKey === 'editor'
                ? 'is-visible'
                : ''}
            `}
          >

          

          </div>

          {/* =====================================================
              NODE.JS BACKEND GENERATOR CLI
             ===================================================== */}

          <div
            className={`
              project-scene
              ${projectSceneKey === 'cli'
                ? 'is-visible'
                : ''}
            `}
          >

         

           

          </div>

        </div>

      </div>
    </section>
  )
}

export default Projects