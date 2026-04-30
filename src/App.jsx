import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import AboutUs from './components/AboutUs'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'


function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <AboutUs />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}


export default App
