import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function HomeButton() {
    return (
        <button className='button-home'>
            <FontAwesomeIcon icon={faHouse} className='icon-home' />
        </button>
    )
}