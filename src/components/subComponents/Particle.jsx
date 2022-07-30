
import React from 'react';
import styled from 'styled-components';
import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { loadLinksPreset } from 'tsparticles-preset-links';
import configDark from '../../config/particles.json';
import configLight from '../../config/particles-light.json';

const Box = styled.div`

`

export default function Particle(props) {

    const { theme } = props;
    console.log(theme);

    const config = {
        background: {
            color: {
                value: '#dcdcdc',
            },
        },
        particles: {
            color: {
                value: '#000'
            },
            links: {
                color: {
                    value: '#000'
                }
            },
            move: {
                speed: 4
            }
        },
        preset: 'links'
    }

    const init = async (engine) => {
        await loadLinksPreset(engine);
    }

    return (
        <Box className='particle-container'>
            <Particles options={config} init={init} />
        </Box>
    )
}