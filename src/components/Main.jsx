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
    right: 0;
    transform: rotate(270deg);
    text-decoration: none;
    z-index: 1;
`

const About = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    text-decoration: none;
    z-index: 1;
`

const Skills = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
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

    return (
        <MainContainer>
            <Container>
                <div className='dark-half' style={darkHalfStyles}></div>
                <HomeButton />
                <SocialIcons theme={click ? 'dark' : 'light'} />
                <div
                    className='logo-container'
                    style={logoStyles}
                    onClick={() => setClick(!click)}
                >
                    <Logo />
                </div>
                <Work to='/projects'>
                    <h2>Projects</h2>
                </Work>
                <div className='bottom-bar'>
                    <About click={click} to='/about'>
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