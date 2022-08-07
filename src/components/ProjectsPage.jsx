import React from 'react';
import SnowParticle from './subComponents/SnowParticle';
import { workData } from '../data/projects-data';
import ProjectCard from './subComponents/ProjectCard';

export default function ProjectsPage() {

    const ref = React.useRef(null);

    React.useEffect(() => {
        // const element = ref.current;

        // const rotate = () => {
        //     console.log('scrolling...');
        //     element.style.transform = `translateX(${-window.scrollY}px)`;
        // }

        // window.addEventListener('scroll', rotate);

        // return () => {
        //     window.removeEventListener('scroll', rotate);
        // }
    }, []);

    const workDataArray = workData.map(item => {
        return (
            <ProjectCard id={item.id} data={item} />
        )
    });

    return (
        <div className='projects-container'>
            <SnowParticle />
            <div className="projects-content">{workDataArray}</div>
        </div>
    )
}