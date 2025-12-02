import { Tab } from "bootstrap"
import React from "react"
import TableSeller from "./TableSeller"
import { useState } from "react"
import { ToastContainer, Bounce } from 'react-toastify';


const ManageSeller = (props) => {

    const [listSeller, setListSeller] = useState([])
    return (
        <div className="manage-seller-container">
            <div className="manage-seller-header">
            <h2>Manage Seller</h2>
            </div>
        <div className="table-seller">
            <TableSeller
            listSeller={listSeller}/>
        </div>
        <ToastContainer
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
                /> 
        </div>
           
            
    )
}

export default ManageSeller