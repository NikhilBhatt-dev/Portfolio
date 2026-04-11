import React, { Suspense, lazy } from 'react'

const Nav = lazy(() => import('./section/Nav'));
const Hero = lazy(() => import('./section/Hero'));
const About = lazy(() => import('./section/About'));
const Projects = lazy(() => import('./section/Projects'));
const Contact = lazy(() => import('./section/Contact'));
const Footer = lazy(() => import('./section/Footer'));

const PageSkeleton = ({ className = '', blocks = 3 }) => (
  <div className={`page-skeleton ${className}`.trim()} aria-hidden='true'>
    {Array.from({ length: blocks }, (_, index) => (
      <div
        key={`skeleton-${index}`}
        className={`skeleton-shimmer rounded-2xl ${index === 0 ? 'h-12 w-40' : 'h-28 w-full'}`}
      />
    ))}
  </div>
);

const App = () => {
  return (
    <main className='mx-auto w-full max-w-7xl overflow-x-hidden'>
      <Suspense fallback={<div className='nav-skeleton skeleton-shimmer' aria-hidden='true' />}>
        <Nav />
      </Suspense>

      <Suspense fallback={<PageSkeleton className='min-h-screen justify-center px-5 sm:px-10' blocks={4} />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<PageSkeleton className='my-14 px-5 sm:my-20 sm:px-10' blocks={4} />}>
        <About />
      </Suspense>

      <Suspense fallback={<PageSkeleton className='my-14 px-5 sm:my-20 sm:px-10' blocks={4} />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<PageSkeleton className='my-20 px-5 sm:px-10' blocks={3} />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<div className='footer-skeleton skeleton-shimmer mx-5 mb-4 mt-7 sm:mx-10' aria-hidden='true' />}>
        <Footer />
      </Suspense>
    </main>
  )
}

export default App
