import React from 'react';
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Discord, Github, LinkedIn } from './Svgs';

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;
    &>*:not(:last-child) {
        margin: 0.5rem 0;
    }
`

const Line = styled.span`
    width: 2px;
    height: 10rem;
    background-color: ${props => props.theme.text};
`

const styles = {
    color: 'inherit'
}

export default function SocialIcons() {
    return (
        <Icons>
            <div>
                <a style={styles} target='_blank' rel='noreferrer' href='https://github.com/jeffreyhu16'>
                    <Github />
                </a>
            </div>
            <div>
                <a style={styles} target='_blank' rel='noreferrer' href='https://github.com/jeffreyhu16'>
                    <LinkedIn />
                </a>
            </div>
            <div>
                <a style={styles} target='_blank' rel='noreferrer' href='https://github.com/jeffreyhu16'>
                    <Discord />
                </a>
            </div>
            <Line />
        </Icons>
    )
}