import React, { useEffect, useState } from 'react'
import { myProjects } from '../constants'
const projectsCount = myProjects.length;

const SkeletonBlock = ({ className = '' }) => (
  <div className={`skeleton-shimmer rounded-xl ${className}`.trim()} aria-hidden='true' />
);

const getProjectSceneKey = (title = '') => {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes('editor') || normalizedTitle.includes('collaborative')) return 'editor';
  if (normalizedTitle.includes('nasa')) return 'nasa';
  if (normalizedTitle.includes('music')) return 'music';
  if (normalizedTitle.includes('snake')) return 'snake';
  return 'ecommerce';
};

const sceneMetaMap = {
  ecommerce: {
    badge: 'Live shopping feel',
    topChip: 'Sale',
    bottomChip: 'Fast UI',
    metric: '24/7',
    metricLabel: 'Checkout flow',
    panelTitle: 'Conversion stack',
    panelItems: ['Cart UX', 'Stripe ready', 'Cloud sync'],
  },
  editor: {
    badge: 'Realtime collab vibe',
    topChip: 'Yjs',
    bottomChip: 'Socket',
    metric: '12',
    metricLabel: 'Live peers',
    panelTitle: 'Sync stack',
    panelItems: ['CRDT', 'Presence', 'Docker build'],
  },
  nasa: {
    badge: 'Research engine vibe',
    topChip: 'ISS',
    bottomChip: 'Lab',
    metric: 'A-17',
    metricLabel: 'Mission state',
    panelTitle: 'Simulation nodes',
    panelItems: ['Vitals', 'Orbit logs', 'Anomaly scan'],
  },
  music: {
    badge: 'Creative learning vibe',
    topChip: 'Rhythm',
    bottomChip: 'Courses',
    metric: '128',
    metricLabel: 'BPM stream',
    panelTitle: 'Learning stack',
    panelItems: ['Lessons', 'Motion UI', 'Audio path'],
  },
  snake: {
    badge: 'Retro arcade vibe',
    topChip: 'Score',
    bottomChip: 'Game loop',
    metric: '03',
    metricLabel: 'Lives left',
    panelTitle: 'Core mechanics',
    panelItems: ['Collision', 'Food spawn', 'High score'],
  },
};

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [isSpotlightLoaded, setIsSpotlightLoaded] = useState(false);
  const [displayedSpotlight, setDisplayedSpotlight] = useState(myProjects[0].spotlight);

  const currentProject = myProjects[selectedProjectIndex];
  const isEcommerceProject = currentProject.title?.toLowerCase().includes('ecommerce');
  const projectSceneKey = getProjectSceneKey(currentProject.title);
  const sceneMeta = sceneMetaMap[projectSceneKey];

  useEffect(() => {
    const nextSpotlight = currentProject.spotlight;

    if (nextSpotlight === displayedSpotlight) {
      setIsSpotlightLoaded(true);
      return;
    }

    const preloadImage = new Image();
    preloadImage.src = nextSpotlight;
    preloadImage.onload = () => {
      setDisplayedSpotlight(nextSpotlight);
      setIsSpotlightLoaded(true);
    };
  }, [currentProject.spotlight, displayedSpotlight]);

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

        <div className='project-details-card relative flex flex-col gap-5 px-5 py-8 shadow-2xl sm:p-10'>

          <div className='absolute top-0 right-0 left-0 sm:left-auto'>
            {!isSpotlightLoaded && (
              <div className='project-spotlight-skeleton'>
                <SkeletonBlock className='h-full w-full rounded-xl' />
              </div>
            )}
            <img
              src={displayedSpotlight}
              alt='spotlight'
              className={`h-56 w-full rounded-xl object-cover transition-opacity duration-500 sm:h-80 lg:h-96 ${isSpotlightLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>

          <div
            className='project-logo-box'
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className={`project-logo-image ${currentProject.logoClassName || ''} ${isEcommerceProject ? 'logo-fit-full' : ''}`.trim()}
              style={currentProject.logoImageStyle}
            />
          </div>

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

          <div className='mt-auto flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between'>
            <div className='flex flex-wrap items-center gap-3 max-sm:justify-center'>
              {currentProject.tags.map((tag, index) => (
                <div key={index} className='tech-logo'>
                  <img src={tag.path} alt={tag.name} />
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
              <img src="/assets/arrow-up.png" alt="arrow" className='w-3 h-3' />
            </a>
          </div>

          <div className='mt-7 flex items-center justify-between gap-4'>
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





        <div className={`project-showcase-shell theme-${projectSceneKey} h-[280px] rounded-lg border border-black-300 bg-black-200 sm:h-96 md:h-[460px] lg:h-full`}>
          <div className='project-showcase-backdrop' />
          <div className='project-showcase-grid' />
          <div className='project-showcase-glow' />
          <div className='project-showcase-base' />
          <div className='project-showcase-orbit project-showcase-orbit-one' />
          <div className='project-showcase-orbit project-showcase-orbit-two' />

          <div className='project-scene-badge'>{sceneMeta.badge}</div>

          <div className='project-data-panel project-data-panel-right'>
            <span className='project-panel-label'>Active metric</span>
            <strong>{sceneMeta.metric}</strong>
            <span className='project-panel-subtle'>{sceneMeta.metricLabel}</span>
          </div>

          <div className='project-data-panel project-data-panel-left'>
            <span className='project-panel-label'>{sceneMeta.panelTitle}</span>
            <ul className='project-panel-list'>
              {sceneMeta.panelItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={`project-scene ${projectSceneKey === 'ecommerce' ? 'is-visible' : ''}`}>
            <div className='project-holo-card holo-left'>
              <span>Realtime</span>
            </div>
            <div className='project-holo-card holo-right'>
              <span>Orders</span>
            </div>
            <div className='project-model-cart'>
              <div className='project-cart-handle' />
              <div className='project-cart-body' />
              <div className='project-cart-frame' />
              <div className='project-cart-bag bag-one' />
              <div className='project-cart-bag bag-two' />
              <div className='project-cart-wheel left' />
              <div className='project-cart-wheel right' />
            </div>
            <div className='project-floating-chip top-right'>{sceneMeta.topChip}</div>
            <div className='project-floating-chip bottom-left delay-chip'>{sceneMeta.bottomChip}</div>
          </div>

          <div className={`project-scene ${projectSceneKey === 'editor' ? 'is-visible' : ''}`}>
            <div className='project-editor-presence presence-left'>
              <span />
              <span />
              <span />
            </div>
            <div className='project-editor-presence presence-right'>
              <span />
              <span />
            </div>
            <div className='project-model-editor'>
              <div className='project-editor-window'>
                <div className='project-editor-topbar'>
                  <i />
                  <i />
                  <i />
                  <span>collab-session.js</span>
                </div>
                <div className='project-editor-body'>
                  <div className='project-editor-sidebar'>
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className='project-editor-code'>
                    <div className='project-code-line short'><span /></div>
                    <div className='project-code-line med'><span /></div>
                    <div className='project-code-line long active'><span /></div>
                    <div className='project-code-line med'><span /></div>
                    <div className='project-code-line short'><span /></div>
                    <div className='project-code-line long'><span /></div>
                    <div className='project-cursor cursor-one' />
                    <div className='project-cursor cursor-two' />
                    <div className='project-sync-wave wave-one' />
                    <div className='project-sync-wave wave-two' />
                  </div>
                </div>
              </div>
            </div>
            <div className='project-floating-chip top-right'>{sceneMeta.topChip}</div>
            <div className='project-floating-chip bottom-left delay-chip'>{sceneMeta.bottomChip}</div>
          </div>

          <div className={`project-scene ${projectSceneKey === 'nasa' ? 'is-visible' : ''}`}>
            <div className='project-star-cluster star-left' />
            <div className='project-star-cluster star-right' />
            <div className='project-model-planet'>
              <div className='project-planet-core' />
              <div className='project-planet-atmosphere' />
              <div className='project-planet-ring' />
              <div className='project-satellite' />
            </div>
            <div className='project-floating-chip top-right'>{sceneMeta.topChip}</div>
            <div className='project-floating-chip bottom-left delay-chip'>{sceneMeta.bottomChip}</div>
          </div>

          <div className={`project-scene ${projectSceneKey === 'music' ? 'is-visible' : ''}`}>
            <div className='project-wave-lines'>
              <span />
              <span />
              <span />
            </div>
            <div className='project-model-music'>
              <div className='project-vinyl' />
              <div className='project-vinyl-reflection' />
              <div className='project-tonearm' />
              <div className='project-equalizer'>
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className='project-floating-chip top-right'>{sceneMeta.topChip}</div>
            <div className='project-floating-chip bottom-left delay-chip'>{sceneMeta.bottomChip}</div>
          </div>

          <div className={`project-scene ${projectSceneKey === 'snake' ? 'is-visible' : ''}`}>
            <div className='project-arcade-panel'>
              <span>Retro Mode</span>
            </div>
            <div className='project-model-snake'>
              <div className='project-snake-grid' />
              <div className='project-snake-body body-one head' />
              <div className='project-snake-body body-two' />
              <div className='project-snake-body body-three' />
              <div className='project-snake-body body-four' />
              <div className='project-snake-body body-five' />
              <div className='project-snake-food' />
            </div>
            <div className='project-floating-chip top-right'>{sceneMeta.topChip}</div>
            <div className='project-floating-chip bottom-left delay-chip'>{sceneMeta.bottomChip}</div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects

