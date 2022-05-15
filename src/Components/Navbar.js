import React from "react"
import logo from "../logo.png"

import {Link} from "react-scroll"

// React Fontawesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'
 
function Navbar() {


  return (
    <>
    

        <nav className="navbar navbar-expand-lg navbar-light fixed-top">    
            <div className="container">

                <Link smooth={true} to="home" className="navbar-brand" href="#">
                    <img className="logo" src={logo} alt="logo.." />
                </Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color:"#fff" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item active">
                            <Link smooth={true} offset={-70} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-70} to="about" className="nav-link" href="#">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-70} to="services" className="nav-link" href="#">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-70} to="experience" className="nav-link" href="#">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-70} to="portfolio" className="nav-link" href="#">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-70} to="clients" className="nav-link" href="#">Happy Client</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-70} to="contacts" className="nav-link" href="#">Contacts</Link>
                        </li>
                    
                    </ul>

                </div>
                
            </div>

        </nav>

    
    
    </>
  )
}

export default Navbar