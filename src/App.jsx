import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar.jsx'
import Footer from './component/footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        <p className="text-2xl font-bold text-blue-500 bg-amber-100">hello</p>
      </main>
      <Footer />
    </>
  )
}

export default App
