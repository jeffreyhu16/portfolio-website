import React from 'react';
import styled from 'styled-components';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { config } from '../../config/star-config';

export default function StarParticle(props) {

    const init = async (engine) => {
        await loadSlim(engine);
    }

    return (
        <div className='particle-container'>
            <Particles options={config} init={init} />
        </div>
    )
}