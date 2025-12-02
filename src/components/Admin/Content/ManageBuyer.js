import { Tab } from "bootstrap"
import React, { useEffect } from "react"
import TableBuyer from "./TableBuyer"
import { useState } from "react"
import "./ManageBuyer.scss"
import { getListUsers } from "../../../services/ApiService"

const ManageBuyer = () => {

    const [listBuyer, setListBuyer] = useState([])
    const fetchListUser = async () => {
        let res = await getListUsers();
        // if(res && res.data){
        //     setListBuyer(res.data)
        // }   
        console.log("LIST USER RES:", res);
    }
    useEffect (() => {
        fetchListUser();
    }, [])
    return (
        <div className="manage-buyer-container">
            <div className="manage-buyer-header">
            <h2>Manage Buyer</h2>
            </div>
        <div className="table-buyer">
            <TableBuyer
             listBuyer={listBuyer}/>
        </div>
        </div>
    )
}

export default ManageBuyer