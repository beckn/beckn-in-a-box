import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import DeploymentComponent from '../../../components/DeployComponent/deploycomp'
import config from '../../../config.js'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-solid-svg-icons'; // Import the edit icon

const Apikeys = (props) => {
    const backendURL = `${config.backendUrl}:${config.backendPort}`;
    const { email,  setActive} = props;
    const [apiKeysList, setApisList] = useState([]); // Initialize with an empty array

    const getApis = async () => {
        const response = await axios.post(`${backendURL}/get-details`, {
            email: email,
            project_type: 'User Application'
        });
        console.log(response.data)
        setApisList(response.data);
    }

    const createProject = async () => {
        setActive('wizard')
    }

    useEffect(() => {
        getApis();
    }, [email]);

    return (
        <div className='w-full h-full bg-gray-100 rounded-lg p-6 text-left'>
            
            <h1 className="relative text-left p-0 left-0 my-3 text-4xl text-bold text-blue-800/100">Build with Beckn</h1>
            <br />
            <h2 onClick={createProject} className="my-4 mt-6 hover:cursor-pointer text-xl text-blue-500 flex items-center">
                Deploy Your Project<span className="text-lg ml-2">+</span>
            </h2>
            <div className="w-full bg-white shadow-sm rounded-lg p-4 h-full ">
                <div className='flex flex-wrap '>
                {apiKeysList.map(deploy => (
                    <DeploymentComponent key={deploy} data={deploy} />
                ))}
                </div>
            </div>
        </div>
    );
};

export default Apikeys;
