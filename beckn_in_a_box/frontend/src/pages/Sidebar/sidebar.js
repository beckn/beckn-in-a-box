import React from 'react';

const Sidebar = ({ activeTab, setActive }) => {
  const handleSidebarClick = (section) => {
    setActive(section);
  };

  return (
    <div className="flex flex-col bg-gray-800 text-white w-1/5 min-w-[200px] h-screen sticky top-0 border-r-2 border-blue-700">
      <p
        className={`cursor-pointer text-base text-left p-4 border-b border-solid ${
          activeTab === 'dashboard'
            ? 'border-blue-500 text-white bg-blue-700'
            : 'border-[#444]'
        }`}
        onClick={() => handleSidebarClick('dashboard')}
      >
        Dashboard
      </p>
      <p
        className={`cursor-pointer text-base text-left p-4 border-b border-solid ${
          activeTab === 'apiKeys'
            ? 'border-blue-500 text-white bg-blue-700'
            : 'border-[#444]'
        }`}
        onClick={() => handleSidebarClick('apiKeys')}
      >
        API Keys
      </p>
      <p
        className={`cursor-pointer text-base text-left p-4 border-b border-solid ${
          activeTab === 'sdk'
            ? 'border-blue-500 text-white bg-blue-700'
            : 'border-[#444]'
        }`}
        onClick={() => handleSidebarClick('sdk')}
      >
        SDKs
      </p>
      <p
        className={`cursor-pointer text-base text-left p-4 border-b border-solid ${
          activeTab === 'deployments'
            ? 'border-blue-500 text-white bg-blue-700'
            : 'border-[#444]'
        }`}
        onClick={() => handleSidebarClick('deployments')}
      >
        Deployments
      </p>
      <p
        className={`cursor-pointer text-base text-left p-4 border-b border-solid ${
          activeTab === 'wizard'
            ? 'border-blue-500 text-white bg-blue-700'
            : 'border-[#444]'
        }`}
        onClick={() => handleSidebarClick('wizard')}
      >
        Wizard
      </p>
    </div>
  );
};

export default Sidebar;
