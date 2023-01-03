import React from "react";
import "./Portfolio.css";
import * as SiIcons from "react-icons/si";
import data2 from "../../Images/data2.png";
import kural2 from "../../Images/kural2.png";
import video from "../../Images/video.png";
import todo1 from "../../Images/todo1.png";
import cms from "../../Images/cms.png";
import social from "../../Images/social.png";


function Portfolio() {
  return (
    <div id="portfolio">
      <h1 className="logo-text">Check out my work</h1>
      <div className="allProjects">
        <div className="card" data-aos="zoom-in-up">
          <img src={kural2} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">திருக்குறள்</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Thirukural</div>
            <div className="img-description">
              
              <p>
                Users can visit this and learn all thirukurals and their meaning by entering the number of a particular kural.
              </p>

              <div className="tech_used">
              
                <p className="codeLinks text-center pt-3">
                   <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Purushoth9199/Day-21-Tasksss-"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://astounding-cat-984e90.netlify.app/"
                  >
                    Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={data2} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Data Storing</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">C-R-U-D</div>
            <div className="img-description">
             
              <p>
                I have created this project for storing the data , 
                So basically this is a website which performs CRUD operations ,
                

              </p>
              <div className="tech_used">
               
                <p className="codeLinks text-center pt-3">
                   <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Purushoth9199/Day-29-tasks"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  
                  
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://storied-cuchufli-56d4af.netlify.app/"
                  >
                    Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={todo1} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">ToDo List</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">To Do</div>
            <div className="img-description">
              <p>
              This is a to-do project done using MERN stack , a TODO is written to tell future maintainers about something important.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Purushoth9199/ToDoList-Frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Purushoth9199/ToDoList-Backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://todolist-fsd.netlify.app"
                  >
                    Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={cms} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">CMS</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Contact management system</div>
            <div className="img-description">
              <p>
              This project helps us to save contacts of someone for the future needs , it is done using MERN stack
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Purushoth9199/CMS-Frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Purushoth9199/CMS-backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://contactmanagementsystem.netlify.app"
                  >
                    Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={video} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Video Streaming</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Videoplay</div>
            <div className="img-description">
              <p>
              This project helps us to stream and upload videos , 
              I have created this project using MERN stack.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Purushoth9199/Media-streaming-frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="	https://github.com/Purushoth9199/Media-streaming-backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://media-streaming.netlify.app/"
                  >
                    Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={social} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Social Media</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Social media app</div>
            <div className="img-description">
              <p>
              This app is done using MERN stack , used as a social media platform .
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Purushoth9199/Socialmedia-Frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Purushoth9199/Socialmedia-backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://fun-dan-go.netlify.app"
                  >
                    Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
       
       
      </div>
    </div>
  );
}

export default Portfolio;
