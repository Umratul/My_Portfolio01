import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';
import Header from './Header/Header';



const Home = () => {
    const [projects, setProjects] = useState([]);
        useEffect(() => {
            fetch('https://raw.githubusercontent.com/Umratul/data_portfolio/main/data/data.json')
                .then(res => res.json())
                .then(data => setProjects(data));
        }, [])
    const sliceProject = projects.slice(0, 2);
    return (
        <div>
            <Header></Header>
            <h1 className="text-primary fst-italic p-3">Some of My Projects</h1>
            <div className="">
                {
                    sliceProject.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                    }
                </div>
        </div>
    );
};

export default Home;