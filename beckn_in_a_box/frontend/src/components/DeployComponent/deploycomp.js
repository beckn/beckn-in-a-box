import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const DeploymentComponent = (props) => {
    const { data } = props;
    const { project, funnel_stages, project_role, project_type } = data;
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployed, setDeployed] = useState(false);
  const [error, setError] = useState(null);

  const handleDeployClick = async () => {
    setIsDeploying(true);
    setError(null);

    try {
      // Simulate deployment process with a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsDeploying(false);
      setDeployed(true);
    } catch (err) {
      setIsDeploying(false);
      setError('Deployment failed. Please try again.');
    }
  };

  return (
    <div className="w-full min-w-[250px] max-w-[300px] bg-white rounded-lg p-6 shadow-md border-2 border-blue-500 m-3">
    <h2 className="text-xl font-semibold mb-4">{project}</h2>
    <div className="my-5 mb-2">
        <h1 className="text-xs text-blue-500">Funnel Stages:</h1>
        <h1 className="text-sm text-black">{funnel_stages}</h1>
    </div>
    <div className="my-2 flex justify-between">
        <h1 className="text-md font-semibold text-black">{project_role}</h1>
    </div>
    {isDeploying ? (
        <div className="text-center">
        <FontAwesomeIcon icon={faSpinner} spin className="text-blue-500 text-4xl mb-4" />
        <p className="text-gray-600">Deploying...</p>
        </div>
    ) : (
        <div className="flex justify-center items-center">
        {!deployed ? (
            <button
            onClick={handleDeployClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md"
            >
            Deploy Now
            </button>
        ) : (
            <div className="text-center">
            <FontAwesomeIcon icon={faRocket} className="text-green-500 text-4xl mb-4" />
            <p className="text-gray-600">Deployment successful!</p>
            </div>
        )}
        </div>
    )}

    {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>

  );
};

export default DeploymentComponent;
