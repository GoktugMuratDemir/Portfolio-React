import React from 'react'
import TestimonialsCarousel from './TestimonialsCarousel'


function Team() {
  return (
    <div>

        <div id='clients' className="testimonials">
            <h1>Happy Clients</h1>
            <div className="container">
                <div className="testimonials-content">
                    <TestimonialsCarousel />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Team