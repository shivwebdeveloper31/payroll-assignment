import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Dashboard from '../../pages/Dashboard';
import MyTeam from '../../pages/MyTeam.jsx';
import MyTask from '../../pages/MyTask/MyTask';
import Billing from '../../pages/Billing.jsx';
import Setting from '../../pages/Setting';

const Layout = () => {


    return (
        <Sidebar>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/my-team" element={<MyTeam />} />
                <Route path="/my-task" element={<MyTask />} />
                <Route path="/billing" element={<Billing />} />
                <Route path="/setting" element={<Setting />} />
            </Routes>
        </Sidebar>

    )
};

export default Layout;