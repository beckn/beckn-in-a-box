import React from 'react';
import './App.css';
import Home from './pages/Home/home'
import SignIn from './pages/SignIn/sign'
import SignUp from './pages/SignUp/signup'
import Dashboard from './pages/MainContent/Dashboard/dashboard'
import ApiKeys from './pages/MainContent/API Keys/apikeys'
import Sdk from './pages/MainContent/SDKs/sdk'
import Deployments from './pages/MainContent/Deployments/deployments';
import Wizard from './pages/MainContent/Wizard/wizard';
import NotFound from './components/NotFound/not'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/signup" />} /> {/* Redirect root to /signup */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="apikeys" element={<ApiKeys />} />
            <Route path="sdks" element={<Sdk />} />
            <Route path="deployments" element={<Deployments />} />
            <Route path="wizard" element={<Wizard />} />
          </Route>
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for unknown paths */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
