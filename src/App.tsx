import { useEffect } from 'react'
import { Contact } from './components/Contact'
import { CurrentFocus } from './components/CurrentFocus'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Packages } from './components/Packages'
import { Services } from './components/Services'
import { SupportTerms } from './components/SupportTerms'
import { Work } from './components/Work'
import { WhyUs } from './components/WhyUs'
import { MessengerFloat } from './components/MessengerFloat'
import { initAnalytics } from './lib/analytics'
import { useReveal } from './lib/useReveal'
import './App.css'

function App() {
  useEffect(() => {
    initAnalytics()
  }, [])

  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CurrentFocus />
        <Packages />
        <SupportTerms />
        <Services />
        <WhyUs />
        <Work />
        <Contact />
      </main>
      <Footer />
      <MessengerFloat />
    </>
  )
}

export default App
