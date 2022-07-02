import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import HomeIcon from '@mui/icons-material/Home';

export default function HomeButton() {
    return (
        <div className='button-home'>
            {/* <FontAwesomeIcon icon={faHouse} className='icon-home' /> */}
            <HomeIcon sx={{ fontSize: 32 }} />
        </div>
    )
}