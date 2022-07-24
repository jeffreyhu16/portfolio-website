import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Discord, Github, LinkedIn } from './Svgs';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { darkTheme } from '../../Themes';

const Line = styled.span`
    width: 2px;
    height: 10rem;
    background-color: ${props => props.theme.text};
`

export default function SocialIcons(props) {

    const { click } = props;

    const fillColor = click ? darkTheme.text : darkTheme.body;

    return (
        <div className='socials-container'>
            <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/jeffreyhu16'
            >
                <Github fill={fillColor} />
            </a>
            <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/jeffreyhu16'
            >
                <LinkedIn fill={fillColor} />
            </a>
            <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/jeffreyhu16'
            >
                <Discord fill={fillColor} />
            </a>
            <a className='icon-email'>
                <MailOutlineIcon sx={{ fontSize: '2rem', color: fillColor }} />
            </a>
        </div>
    )
}