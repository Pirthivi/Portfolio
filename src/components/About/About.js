import React from "react";
import { Link } from "react-router-dom";

import "../../styles/About/About.scss";

const About = () =>
{

  return (
    <>
      <div className="about" id="about">
        <div className="about__container">
          <div className="about__header" id="about__heading">
            <h1 data-aos="fade-down" data-aos-delay="0" data-aos-offset="20">
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                A
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                B
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                O
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                U
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                T
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
            <p></p>
          </div>

          <div className="about__details-container">
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-once="true"
            >
              <Link to="/about/intro">
                <h1>
                  0<span>1</span>
                </h1>
                <h2>
                  H<span>ello,</span>
                </h2>
                <p>
                  I am <span>Pirthivi Lohano.</span> <br /> Highly passoinate
                  Mern Stack Developer with more than 3 years of experience.
                </p>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <Link to="/about/experience">
                <h1>
                  0<span>2</span>
                </h1>
                <h2>
                  E<span>xperience</span>
                </h2>
                <p>
                  <span>3 year of experiences.</span>
                  <br />I have more than 3 years of experience in developing
                  highly responsive frontend of websites and backend using React.js and
                  Node.js
                </p>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="50"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <Link to="/about/internships">
                <h1>
                  0<span>3</span>
                </h1>
                <h2>
                  <span>Work Experience</span>
                </h2>
                <ul>
                 
                 
                  <li>
                    <span>The Contract Master, Lahore, Pakistan 07/2021 – 01/2022</span> - Senior Frontend Developer{" "}
                  </li>
                  <li>
                    <span>Gamitar Learning, India (Remote) 02/2020 –06/2021</span> - Frontend Developer{" "}
                  </li>
                  <li>
                    <span>Akkel AI , Laohre 06/2019 –01/2020</span> - QA and junior Front End developer{" "}
                  </li>
                </ul>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="700"
              data-aos-once="true"
            >
              <Link to="/about/graduation">
                <h1>
                  0<span>4</span>
                </h1>
                <h2>
                  E<span>ngineering</span>
                </h2>
                {/* <p>
                  <span>Muhmmad Ali Jinnah University, Karachi, Pakistan 07/2020 – 06/2022
                  </span>
                  <br />
                  Masters in Software Engineering
                </p> */}

                <p>
                  <span>Mehran University of Engineering and Technology, Jamshoro, Pakistan 01/2014 – 12/2018
                  </span>
                  <br />
                  Bachelor in Engineering
                </p>

              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
