import React, { useState, useEffect } from 'react';
// import './sdk.css';
import axios from 'axios';
import SdkComponent from '../../../components/SdkComponent/sdkcomp'
import config from '../../../config.js'

const Sdk = (props) => {
  const backendURL = `${config.backendUrl}:${config.backendPort}`;
    const { email,  setActive} = props;
    const [sdkList, setSdkList] = useState([]);

    const getSdks = async () => {
        const response = await axios.post(`${backendURL}/get-details`, {
            email: email,
            project_type: 'SDK'
        });
        console.log(response)
        setSdkList(response.data);
    }
    const createProject = async () => {
        setActive('wizard')
    }

    useEffect(() => {
        getSdks();
    }, [email]);

    return (
<div className="w-full h-full bg-gray-100 rounded-lg p-6 text-left">
<h1 className="relative text-left p-0 left-0 my-3 text-4xl text-bold text-blue-800/100">Build with Beckn</h1>
  <div className="flex items-center mb-4">
  <h2 onClick={createProject} className="my-4 mt-6 hover:cursor-pointer text-xl text-blue-500 flex items-center">
                Create a SDK <span className="text-lg ml-2">+</span>
    </h2>
  </div>
  <div className="w-full bg-white shadow-sm rounded-lg p-4 h-full">
    <div className="w-full bg-[#f2f2f2] flex flex-wrap min-h-[250px] p-2.5 bg-white shadow-sm rounded-lg p-4 h-full">
      {sdkList.map((sdk) => (
        <SdkComponent key={sdk.id} data={sdk} />
      ))}
    </div>
  </div>
</div>

    );
};

export default Sdk;
