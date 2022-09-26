import React from 'react';
import SnowParticle from './subComponents/SnowParticle';
import { workData } from '../data/projects-data';
import ProjectCard from './subComponents/ProjectCard';

export default function ProjectsPage() {

    const elementRef = React.useRef(null);

    React.useEffect(() => {
        elementRef.current.addEventListener('wheel', handleWheel);
    }, []);


    const handleWheel = e => {
        e.preventDefault();
        elementRef.current.scrollLeft += e.deltaY;
    }

    const workDataArray = workData.map((item, i) => {
        return (
            <ProjectCard key={i} data={item} />
        )
    });

    return (
        <div className='projects-container'>
            <SnowParticle />
            <div className="projects-content" ref={elementRef}>{workDataArray}</div>
        </div>
    )
}