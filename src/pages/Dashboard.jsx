import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Dashboard = () => {
    return (
        <div>
            <ToastContainer autoClose={2000} />
            <h1 style={{ textAlign: "center" }}>dashboard page</h1>
             
        </div>
    );
};

export default Dashboard;