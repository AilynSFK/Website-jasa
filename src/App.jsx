import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/about'
import Products from './components/product'
import WhyUs from './components/whyUs'
import Testimonial from './components/testimonial'
import Contact from './components/contact'
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