import React from 'react';
import Navbar from '../Navbar/navbar'
// import Sidebar from '../Sidebar/sidebar';
import MainContent from '../MainContent/index';
import ls from 'local-storage';
import {Navigate} from 'react-router-dom'
// import BoxComponent from './components/Boxbar/box's

const Home = () => {
    const containerStyle = {
        display: 'flex'
    };
    const userData= ls.get('UserData')
    if (userData === null || userData === undefined) {
      return <Navigate to="/signin/" />
    }
    else{
        return (
            <div>
                <Navbar userData={userData} />
                <div style={containerStyle}>
                    <MainContent userData={userData}/>
                </div>
            </div>
        );
    }
    

    
}

export default Home;
