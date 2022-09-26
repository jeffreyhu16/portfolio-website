import React from 'react';
import { motion } from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';

export default function HomeButton() {
    return (
        <NavLink className='button-home-container' to='/'>
            <motion.button
                className='button-home'
                whileTap={{ scale: 0.9 }}
            >
                <HomeIcon className='icon-home' sx={{ fontSize: 32 }} />
            </motion.button>
        </NavLink>
    )
}