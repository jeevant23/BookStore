import React from 'react'
import Navbar from '../componet/Navbar'
import Course from '../componet/Course'
import Footer from '../componet/Footer'


function Courses() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen">
    <Course />
    </div>
    <Footer />
    </>
  )
}

export default Courses
