import React, { Suspense, lazy, useEffect, useRef, useState } from 'react'

import {Canvas} from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';

import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import Button from '../components/Button';

const HackerRoom = lazy(() => import('../components/HackerRoom'));

const HeroCanvasFallback = () => (
  <div className='hero-canvas-fallback' aria-hidden='true'>
    <div className='skeleton-shimmer h-44 w-44 rounded-[2rem] sm:h-56 sm:w-56' />
  </div>
);


const Hero = () => {
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);
  const pointerTargetRef = useRef({ x: 0, y: 0 });
  const pointerCurrentRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const [shouldRenderScene, setShouldRenderScene] = useState(false);

  const isSmall = useMediaQuery({maxWidth: 440})
  const ismobile = useMediaQuery({maxWidth: 768})
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})

  useEffect(() => {
    if (ismobile) return undefined;

    const section = sectionRef.current;
    const cursor = cursorRef.current;

    if (!section || !cursor) return undefined;

    const setCursorPosition = (x, y) => {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const animateCursor = () => {
      const current = pointerCurrentRef.current;
      const target = pointerTargetRef.current;

      current.x += (target.x - current.x) * 0.3;
      current.y += (target.y - current.y) * 0.3;

      setCursorPosition(current.x, current.y);
      animationFrameRef.current = window.requestAnimationFrame(animateCursor);
    };

    const handlePointerEnter = (event) => {
      const { clientX, clientY } = event;
      pointerTargetRef.current = { x: clientX, y: clientY };
      pointerCurrentRef.current = { x: clientX, y: clientY };
      setCursorPosition(clientX, clientY);
      section.classList.add('is-cursor-active');
    };

    const handlePointerMove = (event) => {
      pointerTargetRef.current = { x: event.clientX, y: event.clientY };
    };

    const handlePointerLeave = () => {
      section.classList.remove('is-cursor-active');
    };

    animationFrameRef.current = window.requestAnimationFrame(animateCursor);
    section.addEventListener('pointerenter', handlePointerEnter);
    section.addEventListener('pointermove', handlePointerMove);
    section.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      section.removeEventListener('pointerenter', handlePointerEnter);
      section.removeEventListener('pointermove', handlePointerMove);
      section.removeEventListener('pointerleave', handlePointerLeave);
      section.classList.remove('is-cursor-active');
    };
  }, [ismobile]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || shouldRenderScene) return undefined;

    let observer;
    let idleCallbackId;
    let timeoutId;
    let hasIntersected = false;
    let isPageReady = document.readyState === 'complete';

    const scheduleSceneLoad = () => {
      if (!hasIntersected || !isPageReady) return;

      if ('requestIdleCallback' in window) {
        idleCallbackId = window.requestIdleCallback(() => {
          setShouldRenderScene(true);
        }, { timeout: 1200 });
        return;
      }

      timeoutId = window.setTimeout(() => {
        setShouldRenderScene(true);
      }, 250);
    };

    const handleWindowLoad = () => {
      isPageReady = true;
      scheduleSceneLoad();
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        hasIntersected = true;
        scheduleSceneLoad();
        observer.disconnect();
      },
      { rootMargin: '200px 0px' },
    );

    observer.observe(section);

    if (!isPageReady) {
      window.addEventListener('load', handleWindowLoad, { once: true });
    }

    return () => {
      if (observer) observer.disconnect();
      if (!isPageReady) {
        window.removeEventListener('load', handleWindowLoad);
      }
      if (idleCallbackId && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleCallbackId);
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [shouldRenderScene]);

  calculateSizes(isSmall, ismobile, isTablet)

  return (
    <section
      ref={sectionRef}
      className='hero-section relative flex min-h-screen w-full flex-col overflow-x-clip'
      id='home'
    >
      {!ismobile && (
        <div
          ref={cursorRef}
          className='hero-cursor-follower'
          aria-hidden='true'
        >
          <div className='hero-cursor-core' />
        </div>
      )}

      <div className='hero-copy mx-auto mt-24 flex w-full flex-col gap-3 c-space sm:mt-32 lg:mt-36'>


        <p className='px-2 text-center font-generalsans text-2xl font-medium text-white sm:text-3xl'>Hi, I am Nikhil Bhatt
          <span className='waving-hand'>👋</span>
        </p>

        <p className="hero_tag text-gray_gradient">Full Stack Web Developer</p>
      </div>

      <div className='hero-canvas-wrap absolute inset-x-0 top-24 bottom-28 mt-6 w-full sm:inset-x-6 sm:top-28 sm:bottom-24 lg:inset-x-10 lg:top-32 lg:bottom-16'>
        {shouldRenderScene ? (
          <Suspense fallback={<HeroCanvasFallback />}>
            <Canvas
              className={`h-full w-full ${ismobile ? 'pointer-events-none' : 'pointer-events-auto'}`}
              dpr={[1, 1.5]}
              shadows
              gl={{ antialias: true, alpha: true }}
              style={{ touchAction: ismobile ? 'pan-y' : 'auto' }}
            >
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault fov={32} position={[0, 3, 22]} />
                <OrbitControls
                  enabled={!ismobile}
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
          </Suspense>
        ) : (
          <HeroCanvasFallback />
        )}

      </div>

      <div className='hero-cta absolute bottom-4 left-0 right-0 z-10 flex w-full justify-center c-space sm:bottom-2 lg:bottom-[-8px]'>
        <a href="#about" className='block w-full sm:w-auto'>
          <Button name='lets work together' isBeam containerClass='w-full max-w-sm px-4 text-sm sm:w-auto sm:min-w-[18rem] sm:px-6 sm:text-base md:min-w-[20rem] md:px-7 lg:min-w-[22rem] lg:px-8 lg:text-lg xl:min-w-[24rem]'/>
        </a>
      </div>
    </section>
  )
}

export default Hero







