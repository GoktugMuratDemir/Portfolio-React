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
                            <a className='footer-nav'>Home</a>
                            <br />
                            <a className='footer-nav'>About Me</a>
                            <br />
                            <a className='footer-nav'>Services</a>
                        </div>

                        <div className="col">
                            <a className='footer-nav'>Experience</a>
                            <br />
                            <a className='footer-nav'>Portfolio</a>
                            <br />
                            <a className='footer-nav'>Contacts</a>
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