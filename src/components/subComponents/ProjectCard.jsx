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
`

export default function ProjectCard(props) {

    const { name, description, tags, demo, github } = props.data;

    const tagsArray = tags.map((item, id) => {
        return (
            <span className='project-card-tag'>#{item}</span>
        )
    });

    return (
        <Box className='project-card'>
            <div className='project-card-title'>{name}</div>
            <div className='project-card-desc'>{description}</div>
            <div className='project-card-tag-container'>{tagsArray}</div>
            <div className='project-card-footer'>
                <Demo className='project-card-demo-link' href={demo} target='_blank'>Demo</Demo>
                <Git className='project-card-github-link' href={demo} target='_blank'>
                    <Github />
                </Git>
            </div>
        </Box>
    )
}