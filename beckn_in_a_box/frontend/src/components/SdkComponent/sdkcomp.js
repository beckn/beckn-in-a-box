import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const SdkComponent = (props) => {
  const { data } = props;
  const { project, industry_domains, funnel_stages, project_role } = data;

  const [downloading, setDownloading] = useState(false);

  const handleDownloadClick = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 2000); // Simulating download delay
  };

  return (
<div className={`w-full min-w-[250px] max-w-[300px] h-full min-h-[200px] max-h-[250px] flex flex-col justify-between bg-gradient-to-r from-blue-400 to-purple-500 m-4 p-6 rounded-lg shadow-md`}>
  <div>
    <div className="flex justify-items-stretch items-center">
      <h1 className="text-2xl font-semibold text-white mb-2 mr-2">{project}</h1>
    </div>
  </div>
  <div className="mt-2">
    <h1 className="text-xs text-blue-200 mb-1">Industry Domain:</h1>
    <h1 className="text-sm text-white mb-2">{industry_domains}</h1>
    <h1 className="text-xs text-blue-200 mb-1">Funnel Stages:</h1>
    <h1 className="text-sm text-white">{funnel_stages}</h1>
  </div>
  <div className="mt-2">
    <div className="flex justify-between">
      <h1 className="text-base text-white">{project_role}</h1>
      <button
        onClick={handleDownloadClick}
        className={`text-base ${downloading ? 'cursor-not-allowed' : ''} text-blue hover:text-blue-200 focus:outline-none`}
      >
        {downloading ? (
          <div className="flex items-center">
            <FontAwesomeIcon icon={faArrowCircleDown} spin className="text-blue mr-2" />
            Downloading...
          </div>
        ) : (
          <div className="flex items-center">
            <FontAwesomeIcon icon={faArrowCircleDown} className="text-blue mr-2" />
            Download SDK
          </div>
        )}
      </button>
    </div>
  </div>
</div>

  );
};

export default SdkComponent;
