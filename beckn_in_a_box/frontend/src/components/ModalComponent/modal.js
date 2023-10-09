import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import project_domain from './project_domain.jpg';
import project_type from './project_type.jpg';
import select_funnel from './select_funnel_stages.jpg';

function ModalComponent({ imageUrl, show, onHide }) {
  const imageMap = {
    project_domain,
    project_type,
    select_funnel,
  };

  const typeImage = imageMap[imageUrl] || project_domain;
  const capitalizedImageUrl = imageUrl.toUpperCase();

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-opacity-50 bg-gray-900 ${
        show ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white w-2/3 md:w-1/2 lg:w-1/3 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{capitalizedImageUrl}</h2>
          <button
            onClick={onHide}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 6.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414L11.414 12l3.293 3.293a1 1 0 01-1.414 1.414L10 13.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 12 5.293 8.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="modal-content">
          <img src={typeImage} alt={capitalizedImageUrl} className="w-full" />
        </div>
        <div className="mt-4 flex justify-end">
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
