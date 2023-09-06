import React, { useState, useRef, useEffect } from 'react';
import ls from 'local-storage';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const { userData } = props;
  const { username } = userData;
  const letter = username[0];
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleDropdownClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const logOutUser = () => {
    ls.remove('UserData');
    navigate('/signin/');
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between bg-blue-900/75 text-white p-2.5">
      <div className="text-2xl pl-8 font-semibold">BIAB</div>
      <div className="w-2/3 p-2.5">
        <input
          type="text"
          placeholder="Search for people, communities, code and more..."
          className="w-full bg-gray-200 p-2 rounded-full border-none outline-none"
        />
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="bg-red-500 text-white cursor-pointer mr-4 px-4 py-2 rounded-full shadow-md transition-transform duration-300 transform hover:scale-105"
          onClick={logOutUser}
        >
          Logout
        </button>
        <div className="w-10 h-10 bg-gray-300 mr-2.5 flex items-center justify-center rounded-full">
          <p className="text-2xl m-0 font-bold text-gray-800">{letter}</p>
        </div>
        <div
          className={`relative ${dropdownVisible ? 'active' : ''}`}
          ref={dropdownRef}
          onClick={handleDropdownClick}
        >
          <span className="cursor-pointer text-2xl">&#9776;</span>
          <div className="hidden absolute bg-gray-100 text-gray-800 z-[1] p-2.5 rounded-md shadow-md right-0 top-full">
            <p className="mb-1">Welcome, {username}!</p>
            <p className="mb-1">Email: {userData.email}</p>
            <button
              onClick={logOutUser}
              className="w-full bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-colors duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
