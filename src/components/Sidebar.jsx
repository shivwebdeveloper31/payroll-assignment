import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,

    FaThList,
    FaUserFriends
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Header from './Header';
const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/my-team",
            name: "My Team",
            icon: <FaUserFriends />
        },
        {
            path: "/my-task",
            name: "My Task",
            icon: <FaThList />
        },
        {
            path: "/billing",
            name: "Billing",
            icon: <FaUserAlt />
        },
        {
            path: "/setting",
            name: "Setting",
            icon: <FaThList />
        }
    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "80px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (

                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main style={{ marginLeft: isOpen ? "200px" : "50px" }}>
                <div className='Header_main'>
                    <div>
                        <Header />
                    </div>
                </div>
                <div style={{ marginTop: '40px' }}>
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Sidebar;