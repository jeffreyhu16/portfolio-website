import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import HomeButton from './subComponents/HomeButton';
import SocialIcons from './subComponents/SocialIcons';
import Logo from './subComponents/Logo';

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

const Work = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: rotate(270deg);
    text-decoration: none;
    z-index: 1;
`

const About = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
`

const Skills = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
`

const Center = styled.button`
    position: absolute;
    top: 50%;
    left: 50;
    transform: translate(-50%, -50%);

`



export default function Main() {
    return (
        <MainContainer>
            <Container>
                <HomeButton />
                <SocialIcons />
                <Logo />
                <Work to='/work'>
                    <h2>Work</h2>
                </Work>
                <div className='bottom-bar'>
                    <About to='/about'>
                        <h2>About</h2>
                    </About>
                    <Skills to='/skills'>
                        <h2>Skills</h2>
                    </Skills>
                </div>
            </Container>
        </MainContainer>
    )
}