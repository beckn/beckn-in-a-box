import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Component1 from '../../../components/WizardComponent/comp1';
// import './wizard.css';
import { v4 as uuidv4 } from 'uuid';
import config from '../../../config.js'
function Wizard(props) {
  const backendURL = `${config.backendUrl}:${config.backendPort}`;
  const { data} = props;
  const {email, organization} = data
  console.log(email)
  
  const [activeComponent, setActiveComponent] = useState(1);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (Object.keys(formData).length !== 0) {
      addProjectToDatabase();
    }
  }, [formData]);

  const handleFormSubmit = (data) => {
    setFormData({ ...data });
  };
  const checkProjectRegistration = async () => {
    try {
      const response = await axios.post(`${backendURL}/check-project`, {
        project: formData.project,
      });

      const data = response.data;
      const { details } = data;
      console.log(details)
      return details;
    } catch (error) {
      console.error('Error checking project registration:', error);
    }
  };

  const addProjectToDatabase = async () => {
    try {
      const request = { ...formData, id: uuidv4(), email: email };
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      await setFormData({});
      const details = await checkProjectRegistration(); 
      console.log(details)
      if(details === formData.project){
        
        alert("Project Added Successfully")
      }
      else{
        alert("Error! Check backend app.js")
      }
      // await setActiveComponent(1);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='relative h-screen m-0 p-4'>
      <h1 className="relative text-left p-0 left-0 my-3 text-4xl text-bold text-blue-800/100">Build with Beckn</h1>
      <div>
        {activeComponent === 1 && <Component1 onSubmit={handleFormSubmit} org={organization} />}
      </div>
    </div>
  );
}

export default Wizard;
