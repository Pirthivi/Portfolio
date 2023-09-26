import React from 'react'

import '../../../styles/About/Route/Experience.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
    return (
        <>
            <div className="experience">
                <div className="experience__container">
                    <div className="experience__header">
                        <h2 className="experience__number">0<span>2</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>xperience</span>.</h1>
                    </div>
                    <div className="experience__description">
                        <div className="experience__main-box">
                            <div className="experience__box">
                                <h2>The Contract Master, Lahore, Pakistan</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;07/07/2021 - PRESENT</h3>
                                <ul>
                                    <p>Responsible for -</p>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Developing multiple highly responsive and adaptive website using React and Material Ui</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Designed new features from scratch,
                                            modified the architectural
                                            design, and reviewed the code using React.js,
                                            Redux, and Material UI.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='600'>
                                        <span>Building reusable code</span>
                                    </li>
                                    {/* <li data-aos='fade-right' data-aos-delay='800'>
                                        <span>Add few more lines...</span>
                                    </li> */}
                                </ul>
                            </div>

                            {/* You can put this repeated code as a child component similar to internship.js  */}
                            <div className="experience__box">
                                <h2>Gamitar Learning, India (Remote)</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;01/02/2020 - 01/06/2021</h3>
                                <ul>
                                    <p>Responsible for -</p>
                                    <li data-aos='fade-right' data-aos-delay='200' data-aos-offset="-5000">
                                        <span>created the UI from scratch, and created 30+
                                            custom reusable components.
                                            Deploy the app using AWS EC2.
                                        </span>
                                    </li>

                                    <li data-aos='fade-right' data-aos-delay='600' data-aos-offset="-5000">
                                        <span>Developed the offline game from scratch and tested it using automatic UI
                                            testing tools</span>
                                    </li>
                                    {/* <li data-aos='fade-right' data-aos-delay='800' data-aos-offset="-5000">
                                        <span>Add few more lines...</span>
                                    </li> */}
                                </ul>
                            </div>
                            <div className="experience__box">
                                <h2>Akkel AI , lahore</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;01/06/2019 - 01/01/2020</h3>
                                <ul>
                                    {/* <p>Responsible for -</p>
                                    <li data-aos='fade-right' data-aos-delay='200' data-aos-offset="-5000">
                                        <span>created the UI from scratch, and created 30+
                                            custom reusable components.
                                            Deploy the app using AWS EC2.
                                        </span>
                                    </li> */}

                                    {/* <li data-aos='fade-right' data-aos-delay='600' data-aos-offset="-5000">
                                        <span>Developed the offline game from scratch and tested it using automatic UI
                                            testing tools</span>
                                    </li> */}
                                    {/* <li data-aos='fade-right' data-aos-delay='800' data-aos-offset="-5000">
                                        <span>Add few more lines...</span>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience