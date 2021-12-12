import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';
// import './projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Umratul/data_portfolio/main/data/data.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])
    
    return (
        <div>
            <h2 className="bg-info p-4 fst-italic">My projects</h2>
            <div className="project-container">
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;