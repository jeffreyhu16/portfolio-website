import React from 'react';
import styled from 'styled-components';
import Particle from './subComponents/Particle';
import SocialIcons from './subComponents/SocialIcons';

const Box = styled.div`
    background-color: ${props => props.theme.body};
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    &:hover {
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
    }
`

const Title = styled.div`

`

const Description = styled.div`
    color: ${props => props.theme.color};

`

export default function SkillsPage(props) {

    return (
        <Box className='skills-container'>
            <SocialIcons click={false} />
            <Main className='skills-content flex'>
                <Title className='skills-content-title'>Frontend</Title>
                <Description className='skills-content-desc'>

                </Description>
            </Main>
            <Main className='skills-content flex'>
                <Title className='skills-content-title'>Blockchain</Title>
                <Description className='skills-content-desc'>
                    
                </Description>
            </Main>
            <Particle />
        </Box>
    )
}