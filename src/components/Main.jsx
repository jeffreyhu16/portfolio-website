import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import HomeButton from './subComponents/HomeButton';
import SocialIcons from './subComponents/SocialIcons';
import Logo from './subComponents/Logo';
import Intro from './Intro';
import { motion } from 'framer-motion';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const MainContainer = styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
`

const Container = styled.div`
    padding: 2rem;
    height: 100vh;
`

const Projects = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;
    right: 0;
    transform: rotate(-90deg) translateX(18px);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 2;
`

const About = styled(NavLink)`
    color: ${props => props.click.color};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
`

const Skills = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
`

const CornersLeft = styled.div`
    border: ${props => props.click.border};
    background-color: ${props => props.click.backgroundColor};
    &:before {
        width: ${props => props.click.beforeWidthHeight};
        height: ${props => props.click.beforeWidthHeight};
        background-color: ${props => props.click.backgroundColor};
    }
`

export default function Main() {

    const [click, setClick] = React.useState(false);

    const logoStyles = {
        top: click ? '80%' : '50%',
        left: click ? '92%' : '50%'
    }

    const darkHalfStyles = {
        width: click ? '50%' : '0%',
        height: click ? '100%' : '0%'
    }

    const clickStyles = {
        color: click ? '#dcdcdc' : '#000',
        backgroundColor: click ? '#000' : '#dcdcdc',
        border: click ? '1px solid #dcdcdc' : '1px solid #000',
        beforeWidthHeight: click ? 'calc(100% + 4px)' : '0%'
    }

    return (
        <MainContainer>
            <Container>
                <div className='dark-half' style={darkHalfStyles}></div>
                <HomeButton />
                <SocialIcons click={click} />
                <div
                    className='logo-container'
                    style={logoStyles}
                    onClick={() => setClick(!click)}
                >
                    <Logo />
                </div>
                <Projects to='/projects' className='projects-header'>
                    <motion.h2
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Projects
                    </motion.h2>
                </Projects>
                <div className='bottom-bar'>
                    <About to='/about' click={clickStyles} className='about-header'>
                    <motion.h2
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        About
                    </motion.h2>
                    </About>
                    <Skills to='/skills'>
                    <motion.h2
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Skills
                    </motion.h2>
                    </Skills>
                </div>
                <ArrowBackIosIcon
                    sx={{ fontSize: '3rem', color: click ? '#dcdcdc' : '#000' }}
                    className='icon-corner top-left-corner'
                />
                <ArrowBackIosIcon
                    sx={{ fontSize: '3rem' }}
                    className='icon-corner top-right-corner'
                />
                <ArrowBackIosIcon
                    sx={{ fontSize: '3rem', color: click ? '#dcdcdc' : '#000' }}
                    className='icon-corner bottom-left-corner'
                />
                <ArrowBackIosIcon
                    sx={{ fontSize: '3rem' }}
                    className='icon-corner bottom-right-corner'
                />
                {click && <Intro />}
            </Container>
        </MainContainer>
    )
}