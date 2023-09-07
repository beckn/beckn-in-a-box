import React, { useState } from 'react';
// import './apicomp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const ApiComponent = (props) => {
    const { data } = props;
    const { project, funnel_stages, project_role, project_type , user_api} = data;
    const [clickName, setName] = useState('Copy')
    const [clicked, setClicked] = useState(false);
    
    const handleCopyClick = () => {
        const apiText = user_api;
        navigator.clipboard.writeText(apiText);
        setName('Copied')
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
            setName('Copy')
        }, 1000); // Reset after 1 second
    };
    
    return (
        <div className="w-full h-full min-h-[50px] max-h-[70px] flex flex-row items-center bg-gradient-to-r from-indigo-500 to-purple-600 m-4 p-4 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-white">{project}</h1>
            <div className={`w-[100%] flex ml-4 ${clicked ? 'clicked' : ''}`}>
            <div className={`flex items-center ${clicked ? 'animate-pulse' : ''}`}>
              <h1
                  className="text-base text-blue-300 cursor-pointer hover:text-blue-500"
                  onClick={handleCopyClick}
              >
                  {user_api}
              </h1>
              <button className="bg-green-500 text-white text-center text-xs ml-2 px-3 py-1 rounded-md" onClick={handleCopyClick}>
                  {clickName}
              </button>
          </div>
            </div>
            <div className="flex justify-end items-center w-2/5 ml-auto">
                <p className="mr-4 text-sm text-gray-300">{funnel_stages}</p>
                <p className="mr-2 text-sm text-gray-300">{project_role}</p>
                <FontAwesomeIcon icon={faEdit} className="text-blue-400 text-lg cursor-pointer" />
            </div>
        </div>
    );
};

export default ApiComponent;
