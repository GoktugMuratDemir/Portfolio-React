import React from "react";
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";

// React Icons
import { FaSearchPlus } from "react-icons/fa";


const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5 mt-5">portfolio</h1>
        
        <div className="image-box-wrapper row justify-content-center">

          <div className="portfolio-image-box" >
            <p className="text-center box-title">Title Part</p>
            <img className="portfolio-image" src={netflix} alt="Netflix Clone Project..." />
            <p className="box-desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi!</p>
            <div className="overflow"></div>
            <a href="https://www.linkedin.com/in/g%C3%B6ktu%C4%9Fmuratdemir/" target="_blank"><FaSearchPlus className="portfolio-icon"  /></a>
          </div>

          {/* - */}
          <div className="portfolio-image-box">
            <p className="text-center box-title">Title Part</p>
            <img className="portfolio-image" src={cityGuide} alt="City Guide Project..." />
            <p className="box-desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi!</p>
            <div className="overflow"></div>
            <a href="https://www.linkedin.com/in/g%C3%B6ktu%C4%9Fmuratdemir/" target="_blank"><FaSearchPlus className="portfolio-icon"  /></a>
          </div>

          {/* - */}
          <div className="portfolio-image-box">
            <p className="text-center box-title">Title Part</p>
            <img className="portfolio-image" src={portfolio} alt="Portfolio React and Material UI Project..." />
            <p className="box-desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi!</p>
            <div className="overflow"></div>
            <a href="https://www.linkedin.com/in/g%C3%B6ktu%C4%9Fmuratdemir/" target="_blank"><FaSearchPlus className="portfolio-icon"  /></a>
          </div>

          {/* - */}
          <div className="portfolio-image-box">
            <p className="text-center box-title">Title Part</p>
            <img className="portfolio-image" src={taskManager} alt="Task Manager React and Redux Project..." />
            <p className="box-desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi!</p>
            <div className="overflow"></div>
            <a href="https://www.linkedin.com/in/g%C3%B6ktu%C4%9Fmuratdemir/" target="_blank"><FaSearchPlus className="portfolio-icon"  /></a>
          </div>

        </div>
      </div>
      
  </div>
  )
}

export default Portfolio;
