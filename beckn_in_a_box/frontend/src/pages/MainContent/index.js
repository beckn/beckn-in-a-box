import React, { useState } from 'react';
import Dashboard from '../MainContent/Dashboard/dashboard';
import ApiKeys from '../MainContent/API Keys/apikeys'
import Sdk from './SDKs/sdk';
import Deployments from './Deployments/deployments';
import Wizard from './Wizard/wizard'
import Sidebar from '../Sidebar/sidebar';

function MainContent(props) {
  const [activeTab, setActive] = useState('dashboard');
  const { userData } = props;
  const { email, organization } = userData;

  return (
    <>
      <Sidebar activeTab={activeTab} setActive={setActive} />
      <div className="h-screen pl-8 w-3/5">
        {activeTab === 'dashboard' && <Dashboard email={email} setActive={setActive}/>}
        {activeTab === 'apiKeys' && <ApiKeys email={email} setActive={setActive}/>}
        {activeTab === 'sdk' && <Sdk email={email} setActive={setActive}/>}
        {activeTab === 'deployments' && <Deployments email={email} setActive={setActive}/>}
        {activeTab === 'wizard' && <Wizard data={{email, organization}} setActive={setActive}/>}
      </div>
    </>
  );
}

export default MainContent;
