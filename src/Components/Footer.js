import React from 'react'
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    RedditShareButton,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    RedditIcon
} from "react-share"

import {Link} from "react-scroll"

function Footer() {
  return (
    <div className='footer text-center'>
        <div className="container">
            <div className="row">

                <div className="col-lg-4 col-md-6 col-sm-6">

                    <div className="d-flex">
                        <p>City Moscow Main st 2020 office #223</p>
                    </div>

                    <div className="d-flex">
                        <a href="tel:555-555-5555">555-555-5555</a>
                    </div>

                    <div className="d-flex">
                        <p>lorem@gmail.com</p>
                    </div>

                </div>

                <div className="col-lg-3 col-md-2 col-sm-6">

                    <div className="row">

                        <div className="col">
                            <Link smooth={true} offset={-70} to="home" className='footer-nav'>Home</Link>
                            <br />
                            <Link smooth={true} offset={-70} to="about" className='footer-nav'>About Me</Link>
                            <br />
                            <Link smooth={true} offset={-70} to="services" className='footer-nav'>Services</Link>
                        </div>

                        <div className="col">
                            <Link smooth={true} offset={-70} to="experience" className='footer-nav'>Experience</Link>
                            <br />
                            <Link smooth={true} offset={-70} to="clients" className='footer-nav'>Happy Clients</Link>
                            <br />
                            <Link smooth={true} offset={-70} to="portfolio" className='footer-nav'>Portfolio</Link>
                            <br />
                            <Link smooth={true} offset={-70} to="contacts" className='footer-nav'>Contacts</Link>
                        </div>

                    </div>

                </div>

                <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                    <div className="d-flex justify-content-center SocialIcons">

                        <FacebookShareButton 
                            url={"https://www.youtube.com/c/8020Coding"}
                            quote={"Front-End Developer"}
                            hashtag="#React"
                        >
                            <FacebookIcon className='mx-3' size={36} />
                        </FacebookShareButton>

                        <TwitterShareButton 
                            url={"https://www.youtube.com/c/8020Coding"}
                            quote={"Front-End Developer"}
                            hashtag="#React"
                        >
                            <TwitterIcon className='mx-3' size={36} />
                        </TwitterShareButton>

                        <RedditShareButton 
                            url={"https://www.youtube.com/c/8020Coding"}
                            quote={"Front-End Developer"}
                            hashtag="#React"
                        >
                            <RedditIcon className='mx-3' size={36} />
                        </RedditShareButton>

                        <LinkedinShareButton 
                            url={"https://www.youtube.com/c/8020Coding"}
                            quote={"Front-End Developer"}
                            hashtag="#React"
                        >
                            <LinkedinIcon className='mx-3' size={36} />
                        </LinkedinShareButton>
                    </div>
                    <p className="pt-3 text-center">
                        Copyright&copy;
                        {new Date().getFullYear()}&nbsp;New Horizon | All Right Reserved
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer