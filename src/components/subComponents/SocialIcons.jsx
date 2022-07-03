import React from 'react';
import styled from 'styled-components';
import { Discord, Github, LinkedIn } from './Svgs';
import { darkTheme } from '../../Themes';

const Line = styled.span`
    width: 2px;
    height: 10rem;
    background-color: ${props => props.theme.text};
`

export default function SocialIcons(props) {

    const { theme } = props;

    const fillColor = theme === 'dark' ? darkTheme.text : darkTheme.body;

    return (
        <div className='socials-container'>
            <a target='_blank' rel='noreferrer' href='https://github.com/jeffreyhu16'>
                <Github fill={fillColor} />
            </a>
            <a target='_blank' rel='noreferrer' href='https://github.com/jeffreyhu16'>
                <LinkedIn fill={fillColor} />
            </a>
            <a target='_blank' rel='noreferrer' href='https://github.com/jeffreyhu16'>
                <Discord fill={fillColor} />
            </a>
        </div>
    )
}