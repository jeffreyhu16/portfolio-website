import React from 'react';
import Logo from './subComponents/Logo';
import Intro from './Intro';

export default function MainContent(props) {

    const { click, setClick } = props;

    const logoStyles = {
        top: click ? '80%' : '50%',
        left: click ? '91%' : '50%'
    }

    const darkHalfStyles = {
        width: click ? '50%' : '0%',
        height: click ? '100%' : '0%'
    }

    return (
        <>
            <div className='dark-half' style={darkHalfStyles}></div>
            <div
                className='logo-container'
                style={logoStyles}
                onClick={() => setClick(!click)}
            >
                <Logo />
            </div>
            {click && <Intro />}
        </>
    )
}
