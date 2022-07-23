import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    background-color: ${props => props.theme.body};
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
`

const Title = styled.div`

`

const Description = styled.div`
    color: ${props => props.theme.color};

`

export default function SkillsPage() {
    return (
        <Box className='skills-container'>
            <Main className='skills-content flex'>
                <Title className='skills-content-title'>Skills</Title>
                <Description className='skills-content-desc'>

                </Description>
            </Main>
            <Main className='skills-content flex'>
                <Title className='skills-content-title'>Skills</Title>
                <Description className='skills-content-desc'>
                    
                </Description>
            </Main>
        </Box>
    )
}