import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
const Dashboard = () => {
    const logoutHandler = () => {
        auth.signOut().then(() => {
            console.log('User signed out');
        }).catch((error) => {
            console.error('Sign out failed:', error.message);
        });
        
    };
    return (
        <div className="dashboard" id="Dashboard">
            <h1>Dashboard</h1>
            <button onClick={logoutHandler}  style={{color:"white"}}>LogOut</button>
        </div>
    );
}

export default Dashboard;
