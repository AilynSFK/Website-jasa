import React, {useState, useEffect} from "react";
import { href } from "react-router-dom";

const navLinks = [
  { label : 'Tentang', href :  '#about'},
  { label : 'Produk' , href : "#pruducts"},
  { label : 'Keunggulan' , href : "#why"},
  { label : 'Ulasan' , href : "#testimonial"},
]

export default function Navbar () {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
     const onScroll = () => setScrolled(window.scrollY > 20)
     window.addEventListener('scroll', onScroll)
     return () => window.removeEventListener('scroll', onScroll)
  },[])

  return() 
  
}