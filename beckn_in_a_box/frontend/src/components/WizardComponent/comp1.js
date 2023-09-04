import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';
import config from '../../config.js'
import Button from 'react-bootstrap/Button';
import ModalComponent from '../ModalComponent/modal.js';
// import './comp1.css'
const Component1 = ({ onSubmit, org }) => {
  const backendURL = `${config.backendUrl}:${config.backendPort}`;
  const [formData, setFormData] = useState({
    project: '',
    project_type: '',
    project_role: '',
    organization_name: org,
    industry_domains: '',
    funnel_stages: '',
    manage: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isProjectRegistered, setIsProjectRegistered] = useState('');
  // New code
  const [modalShow, setModalShow] = useState(false);
  const [imageToShow, setImageToShow] = useState('');

  const checkProjectRegistration = async () => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      const result = await checkProjectRegistration();
      console.log(result)
      console.log("Helllo", result)
      if (result !== formData.project) {
        // changeId(2);
        setIsProjectRegistered('')
        onSubmit(formData);
        setFormData(generateEmptyFormData());
      } else {
        setIsProjectRegistered('Project Exists');
      }
    }
  };

  const generateEmptyFormData = () => ({
    project: '',
    project_type: '',
    project_role: '',
    organization_name: '',
    industry_domains: '',
    funnel_stages: '',
    manage: '', // Default value added
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // New Code
  const openModal = (imageUrl) => {
    setImageToShow(imageUrl);
    setModalShow(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setImageToShow('');
    setModalShow(false);
  };

  useEffect(() => {
    const form = document.getElementById('componentForm');
    setIsFormValid(
      Object.values(formData).every((value) => value !== '') && form.checkValidity()
    );
  }, [formData]);

  return (
    <form
      id="componentForm"
      className="text-left max-w-full p-5 rounded-[5px]"
      onSubmit={handleSubmit}
    >
      <h2 className='my-3 text-2xl inline-block text-blue-800/100'>Create a project</h2>
      <br />
      <div className="flex">
        <div className="w-6/12">
          <h3 className="my-3 text-xl inline-block text-blue-600/100">Name</h3>
          <br />
          <input
            className="min-w-[200px] w-full max-w-[400px] bg-blue-600 bg-opacity-25 px-4 py-2 pr-8 rounded-lg border-2 border-blue-600"
            type="text"
            name="project"
            value={formData.project}
            onChange={handleInputChange}
            required
          />


        </div>
        <div className="w-6/12">
      <h3 className="my-3 text-xl inline-block text-blue-600/100">Type</h3>
      <br />
      <select 
        className="rounded-lg border border-blue-600/100 bg-white px-4 py-2 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent py-2.5 min-w-[200px] w-full max-w-[400px] mb-4 p-2 rounded-[5px]"
        name="project_type"
        value={formData.project_type}
        onChange={handleInputChange}
        required
      >
        <option value="" disabled hidden>
          Select a type of project
        </option>
        <option value="User Application">User Application</option>
        <option value="SDK">SDK</option>
        <option value="Protocol Stack">Protocol Stack</option>
      </select>

      {/* Button to open the modal */}
      <Button variant="primary" onClick={openModal}>
        View Type Image
      </Button>

      {/* Modal for the Type */}
      <ModalComponent
        imageUrl="/home/prem/beckn-in-a-box/biab/frontend/src/components/ModalComponent/project_type.png" // Replace with the actual image URL for the "Type"
        show={modalShow}
        onHide={closeModal}
      />
    </div>
        {/* <div className="w-6/12">
          <h3 className="my-3 text-xl inline-block text-blue-600/100">Type</h3>
          <br />
          <select 
            className="rounded-lg border border-blue-600/100 bg-white px-4 py-2 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent py-2.5 min-w-[200px] w-full max-w-[400px] mb-4 p-2 rounded-[5px]"
            name="project_type"
            value={formData.project_type}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled hidden>
              Select a type of project
            </option>
            <option value="User Application">User Application</option>
            <option value="SDK">SDK</option>
            <option value="Protocol Stack">Protocol Stack</option>
          </select>
        </div> */}
      </div>

      <div className="flex my-4">
        <div className="w-6/12">
          <h3 className="my-3 text-xl inline-block text-blue-600/100">Select Your Role</h3>
          <br />
          <select
            className="rounded-lg border border-blue-600/100 bg-white px-4 py-2 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent py-2.5 min-w-[200px] w-full max-w-[400px] mb-4 p-2 rounded-[5px]"
            name="project_role"
            value={formData.project_role}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled hidden>
              Select your role
            </option>
            <option value="BAP">BAP</option>
            <option value="BPP">BPP</option>
            <option value="Beckn Gateway">Beckn Gateway</option>
            <option value="Beckn Registry">Beckn Registry</option>
          </select>
        </div>

        <div className="w-6/12">
          <h3 className="my-3 text-xl inline-block text-blue-600/100">Organization Name</h3>
          <br />
          <input
            className="min-w-[200px] w-full max-w-[400px] bg-blue-600 bg-opacity-25 px-4 py-2 pr-8 rounded-lg border-2 border-blue-600"
            type="text"
            name="organization_name"
            value={formData.organization_name}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="flex my-4">
        <div className="w-6/12">
          <h3 className="my-3 text-xl inline-block text-blue-600/100">Industry Domain</h3>
          <br />
          <select
            className="rounded-lg border border-blue-600/100 bg-white px-4 py-2 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent py-2.5 min-w-[200px] w-full max-w-[400px] mb-4 p-2 rounded-[5px]"
            name="industry_domains"
            value={formData.industry_domain}
            onChange={handleInputChange}
            required
          >
            <option value="" hidden>
              Select your domain
            </option>
            <option value="Retail">Retail</option>
            <option value="Logistics">Logistics</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Mobility">Mobility</option>
          </select>
        </div>

        <div className="w-6/12">
          <h3 className="my-3 text-xl inline-block text-blue-600/100">Funnel Stages</h3>
          <br />
          <select
            className="rounded-lg border border-blue-600/100 bg-white px-4 py-2 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent py-2.5 min-w-[200px] w-full max-w-[400px] mb-4 p-2 rounded-[5px]"
            name="funnel_stages"
            value={formData.funnel_stages}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled hidden>
              Select Funnel Stages
            </option>
            <option value="Package 1">Package 1</option>
            <option value="Package 2">Package 2</option>
            <option value="Package 3">Package 3</option>
            <option value="Package 4">Package 4</option>
          </select>
        </div>
      </div>

      <h3 className='my-4 text-lg inline-block text-blue-600/100'>Do you want to manage?</h3>
      <div className="flex">
        <button
          type="button"
          name="manage"
          value="1"
          className={`cursor-pointer font-[bold] w-[200px] text-[#333] m-1 px-4 py-2 rounded-[5px]  ${formData.manage === '1' ? 'bg-success-400 text-white' : ' bg-transparent border-2 border-400 text-black'}`}
          onClick={handleInputChange} 
        >
          Yes
        </button>
        <button
          type="button"
          name="manage"
          value="0"
          className={`cursor-pointer font-[bold] w-[200px] text-[#333] m-1 px-4 py-2 rounded-[5px] ${formData.manage === '0' ? 'bg-danger-400 text-white' : ' bg-transparent border-400 border-2 text-black'}`}
          onClick={handleInputChange}
        >
          No
        </button>
      </div>
      <button className="my-8 bg-danger-600 cursor-pointer text-[white] font-[bold] p-2 rounded-[5px] border-[none] active:scale-[0.8]" disabled={!isFormValid}>
        Save and Proceed
      </button>
      {isLoading && (
        <TailSpin type="ThreeDots" color="#00BFFF" height={50} width={50} />
      )}
      {!isFormValid && <p>Fill in the details</p>}
      <p>{isProjectRegistered}</p>
    </form>
  );
};

export default Component1;
