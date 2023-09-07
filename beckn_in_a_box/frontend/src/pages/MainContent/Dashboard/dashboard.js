import React from 'react';
// import './dashboard.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ProjectComponent from '../../../components/DashboardComponent/boxcomp';
import config from '../../../config.js'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-solid-svg-icons'; // Import the edit icon

const DashBoard = (props) => {
    const backendURL = `${config.backendUrl}:${config.backendPort}`;
    const { email,  setActive} = props;
    const [projectList, setProjectList] = useState([]); // Initialize with an empty array

    const getProject = async () => {
        const response = await axios.post(`${backendURL}/get-projects`, {
            email: email
        });
        setProjectList(response.data);
    }
    const createProject = async () => {
        setActive('wizard')
    }

    useEffect(() => {
        getProject();
    }, [email]);

    return (
        <div className='w-full bg-gray-100 rounded-lg p-6 text-left'>
            <h1 className="relative text-left p-0 left-0 my-3 text-4xl text-bold text-blue-800/100">Build with Beckn</h1>
            <br />
            <h2 onClick={createProject} className="my-4 mt-6 hover:cursor-pointer text-xl text-blue-500 flex items-center">
                Create a Project <span className="text-lg ml-2">+</span>
            </h2>
            <div className="w-full bg-[#f2f2f2] flex flex-wrap min-h-[250px] p-2.5 bg-white shadow-sm rounded-lg p-4 h-full">
                {projectList.map(project => (
                    <ProjectComponent key={project.id} data={project} />
                ))}
            </div>
        </div>
    );
};

export default DashBoard;
