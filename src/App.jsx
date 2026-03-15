import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}