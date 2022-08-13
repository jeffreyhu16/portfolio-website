import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Box = styled(motion.div)`
    background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    background-repeat: no-repeat;
    background-size: 100% 2px;
`

const Text = styled.div`
    color: ${props => props.theme.body};
`

export default function Intro() {
    return (
        <Box
            className='intro-container'
            initial={{ height: '0' }}
            animate={{ height: '50vh' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <div className='intro-sub-container'>
                <Text className='intro-text flex'>
                    <h1 className='intro-text-header'>Welcome,</h1>
                    <div className='intro-text-name'>I'm Jeffrey</div>
                    <div className='intro-text-desc'>A Blockchain Developer with a passion for Web3</div>
                </Text>
            </div>
            <div className='intro-sub-container'>
                <img className='avatar' src='avatar.png' />
            </div>
        </Box>
    )
}