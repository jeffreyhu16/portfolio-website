import React from 'react';
import styled from 'styled-components';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { config } from '../../config/snow-config';

export default function SnowParticle(props) {

    const init = async (engine) => {
        await loadSlim(engine);
    }

    return (
        <div className='particle-container'>
            <Particles options={config} init={init} />
        </div>
    )
}