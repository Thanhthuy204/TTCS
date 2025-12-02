
import { FaBars } from "react-icons/fa";
import './Admin.scss';
import { useState } from "react";
import { Outlet } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Bounce } from 'react-toastify';
import SideBar from "./SideBar";

const Admin = (props) => {

    
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
            <SideBar />
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    
                </div>
                <div className="admin-main">
                <Outlet/>
                </div>
            </div>
            {/* <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
                /> */}
            
        </div>
    );
}
export default Admin;