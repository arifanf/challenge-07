import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Default = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
            { children }
        </div>
        <Footer />
    </div>
  )
}

export default Default