import React from 'react';
import styled from 'styled-components';
import { Github } from './Svgs';

const Box = styled.div``;

const Demo = styled.a`
    ${Box}:hover &{
        color: #000;
        background-color: #dcdcdc;
    }
`

const Git = styled.a`
    ${Box}:hover &{
        &{
            fill: #dcdcdc
        }
    }
    pointer-events: ${props => props.isPublic ? '' : 'none'};
`

export default function ProjectCard(props) {

    const { name, description, tags, isPublic, demo, github } = props.data;

    const tagsArray = tags.map((item, i) => {
        return (
            <span key={i} className='project-card-tag'>#{item}</span>
        )
    });

    return (
        <Box className='project-card'>
            <h3 className='project-card-title'>{name}</h3>
            <div className='project-card-desc'>{description}</div>
            <div className='project-card-tag-container'>{tagsArray}</div>
            <div className='project-card-footer'>
                <Demo className='project-card-demo-link' href={demo} target='_blank'>Demo</Demo>
                <Git className='project-card-github-link' href={github} isPublic={isPublic} target='_blank'>
                    <Github isPublic={isPublic} />
                </Git>
            </div>
        </Box>
    )
}