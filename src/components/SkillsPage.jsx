import React from 'react';
import styled from 'styled-components';
import LinkParticle from './subComponents/LinkParticle';
import SocialIcons from './subComponents/SocialIcons';
import { BulletPoint } from './subComponents/Svgs';

const Box = styled.div`
    background-color: ${props => props.theme.body};
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    &:hover {
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
    }
`

const Description = styled.div`
    color: ${props => props.theme.color};
`

const Bullet = styled.div`
    ${Main}:hover &{
        &{
            fill: #dcdcdc
        }
    }
`

export default function SkillsPage(props) {

    const { theme } = props;

    return (
        <Box className='skills-container'>
            <Main className='skills-content'>
                <h3 className='skills-content-title'>Frontend</h3>
                <Description className='skills-content-desc'>
                    <div className="skills-point-container">
                        <Bullet>
                            <BulletPoint />
                        </Bullet>
                        <div className="skills-point">Created a professional calendar design using pure css with flexbox</div>
                    </div>
                    <div className="skills-point-container">
                        <Bullet>
                            <BulletPoint />
                        </Bullet>
                        <div className="skills-point">Utilized Redux to improve render performace by over 100%</div>
                    </div>
                    <div className="skills-point-container">
                        <Bullet>
                            <BulletPoint />
                        </Bullet>
                        <div className="skills-point">Incorporated Material UI's Data Grid Component to display/edit data</div>
                    </div>
                    <div className="skills-point-container">
                        <Bullet>
                            <BulletPoint />
                        </Bullet>
                        <div className="skills-point">Integrated animations using Three.js with performance in mind</div>
                    </div>
                </Description>
            </Main>
            <Main className='skills-content'>
                <h2 className='skills-content-title'>Blockchain</h2>
                <Description className='skills-content-desc'>
                <div className="skills-point-container">
                        <Bullet>
                            <BulletPoint />
                        </Bullet>
                        <div className="skills-point">Developed and deployed smart contracts on Rinkeby Testnet</div>
                    </div>
                    <div className="skills-point-container">
                        <Bullet>
                            <BulletPoint />
                        </Bullet>
                        <div className="skills-point">Applied thorough Unit/Integration testing with Hardhat</div>
                    </div>
                    <div className="skills-point-container">
                        <Bullet>
                            <BulletPoint />
                        </Bullet>
                        <div className="skills-point">Created Governance and ERC721 tokens with OpenZeppelin Contracts</div>
                    </div>
                    {/* <div className="skills-point-container">
                        <Bullet>
                            <BulletPoint />
                        </Bullet>
                        <div className="skills-point">Integrated animations using Three.js with performance in mind</div>
                    </div> */}
                </Description>
            </Main>
            <LinkParticle />
        </Box>
    )
}