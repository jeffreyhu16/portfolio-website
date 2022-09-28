import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Discord, Github, LinkedIn } from './Svgs';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { darkTheme } from '../../themes/themes';

const Line = styled.span`
    width: 2px;
    height: 10rem;
    background-color: ${props => props.theme.text};
`

export default function SocialIcons(props) {

    const { theme, click } = props;

    const fillColor = click ? theme.body : theme.text;

    const sendEmail = () => {
        window.location.href = 'mailto:jeffreyhu16@gmail.com';
    }

    return (
        <div className='socials-container'>
            <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/jeffreyhu16'
            >
                <Github fill={fillColor} isPublic={true} />
            </a>
            <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/jeffrey-hu-958391102/'
            >
                <LinkedIn fill={fillColor} />
            </a>
            <a
                target='_blank'
                rel='noreferrer'
                href='https://discordapp.com/users/909326422659694603'
            >
                <Discord fill={fillColor} />
            </a>
            <a className='icon-email' onClick={sendEmail}> 
                <MailOutlineIcon sx={{ fontSize: '2rem', color: fillColor }} />
            </a>
        </div>
    )
}