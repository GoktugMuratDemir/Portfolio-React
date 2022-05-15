import React from "react"
import Typed from "react-typed"
import {Link} from "react-scroll"

function Header() {
  return (
    <div id="home" className="header-wrapper">
        <div className="main-info">
            <h1>Web development and websites promotions</h1>
            <Typed 
                className="typed-text"
                strings={["Web Design","Web Development","Facebook Ads SMM","Google Ads"]}
                typeSpeed={50}
                backSpeed={60}
                loop
            />
            <Link smooth={true} to="contacts" offset={-70} className="btn-main-offer">Contact Me</Link>
        </div>
    </div>
  )
}

export default Header