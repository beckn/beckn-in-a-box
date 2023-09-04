import React from 'react';
import './apikeys.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ApiComponent from '../../../components/ApiComponent/apicomp';
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
            project_type: 'Protocol Stack'
        });
        console.log(response)
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
            <h1 className='text-[darkblue] text-[2.5rem]'>Account</h1>
            <br />
            <h2 onClick={createProject} className="my-4 mt-6 hover:cursor-pointer text-xl text-blue-500 flex items-center">
                Create an API <span className="text-lg ml-2">+</span>
            </h2>
            <div className="w-full bg-white shadow-sm rounded-lg p-4 h-full">
                {apiKeysList.map(api => (
                    <ApiComponent key={api.id} data={api} />
                ))}
            </div>
        </div>
    );
};

export default Apikeys;
