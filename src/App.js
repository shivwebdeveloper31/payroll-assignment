import React from 'react';
import { Suspense } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/utiles/Layout';
import Protected from './components/utiles/ProtectedRoute';
const Dashboard = React.lazy(() => import('./pages/Dashboard.jsx'));
const MyTeam = React.lazy(() => import('./pages/MyTeam.jsx'))
const MyTask = React.lazy(() => import('./pages/MyTask/MyTask'));
const Login = React.lazy(() => import('./components/utiles/Login'));
const Billing = React.lazy(() => import('./pages/Billing.jsx'));
const Setting = React.lazy(() => import('./pages/Setting'));
const App = () => {

  return (
    <Suspense
      fallback={<div className='Lazy_Loding'> Wait Data Is Loding</div>}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Protected Component={Layout} />}>
            <Route path="/dashboard" element={<Protected Component={Dashboard} />} />
            <Route path="/my-team" element={<Protected Component={MyTeam} />} />
            <Route path="/my-task" element={<Protected Component={MyTask} />} />
            <Route path="/billing" element={<Protected Component={Billing} />} />
            <Route path="/setting" element={<Protected Component={Setting} />} />
          </Route>

        </Routes>
      </Router>
    </Suspense>

  )
};

export default App;