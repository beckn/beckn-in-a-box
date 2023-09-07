import React from 'react';
import './box.css';

const BoxComponent = ({ filled }) => {
  return <div className={`box ${filled ? 'filled' : ''}`}></div>;
};

export default BoxComponent;
