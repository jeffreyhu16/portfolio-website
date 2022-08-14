import React from 'react';
import StarParticle from './subComponents/StarParticle';
import Planet from './subComponents/Planet';
import PurpleEth from './subComponents/PurpleEth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons';

export default function AboutPage() {
    return (
        <div className='about-container'>
            <StarParticle />
            <div className='about-content'>
                <div className='about-content-paragraph'>
                    I'm a passionate blockchain developer located in Taiwan. My programming journey started last year in frontend development and gradually made my transition into the Web3 space.
                </div>
                <div className='about-content-paragraph'>
                    I've built a solid foundation in frontend skills such as React, Javascript and CSS during the development of my first project, the Class Scheduler.
                </div>
                <div className='about-content-paragraph'>
                    Ever since I started coding projects with team members, I have been gaining experience through interships and freelance while learning in demand skills for blockchain development.
                </div>
            </div>
            <div className="cube-container">
                <div className='cube-spinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faSquareJs} color='#efd81d' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
                    </div>
                    <div className='face5'>
                        <img src="solidity-logo.svg" alt="" className='img-solidity' />
                    </div>
                    <div className='face6'>
                        <img src="hardhat-logo.svg" alt="" className='img-hardhat' />
                    </div>
                </div>
            </div>
        </div>
    )
}