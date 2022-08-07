import React from 'react';
import styled from 'styled-components';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { config } from '../../config/link-config';

export default function LinkParticle(props) {

    const init = async (engine) => {
        await loadSlim(engine);
    }

    return (
        <div className='particle-container'>
            <Particles options={config} init={init} />
        </div>
    )
}