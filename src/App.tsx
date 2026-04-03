import { lazy, Suspense } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { LoadingSections } from './components/LoadingSections'
import { SkipLink } from './components/SkipLink'
import { Hero } from './sections/Hero'

const About = lazy(() => import('./sections/About'))
const CurrentRole = lazy(() => import('./sections/CurrentRole'))
const Projects = lazy(() => import('./sections/Projects'))
const Skills = lazy(() => import('./sections/Skills'))
const Education = lazy(() => import('./sections/Education'))
const Contact = lazy(() => import('./sections/Contact'))

export default function App() {
  return (
    <>
      <SkipLink />
      <Header />
      <main
        id="main"
        tabIndex={-1}
        className="outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg-elevated)]"
      >
        <Hero />
        <Suspense fallback={<LoadingSections />}>
          <About />
          <CurrentRole />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
