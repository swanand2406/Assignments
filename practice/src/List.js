import React from "react";
import './style.css'
import profile from './profile';
import {useHistory } from 'react-router-dom';
function List() {
    const employees=[
        {
            "id":1001,
            "name":"John Smith",
            "address":"Pune",
            "number":"1234567890"
        },
        {
            "id":1002,
            "name":"James Hammy",
            "address":"New York",
            "number":"5678904321"
        },
        {
            "id":1003,
            "name":"Harry Kanes",
            "address":"Sydney",
            "number":"9876543210"
        },
        {
            "id":1004,
            "name":"Beth Anglin",
            "address":"London",
            "number":"1245789620"
        },
        {
            "id":1005,
            "name":"Abel Tutor",
            "address":"L.A",
            "number":"1122334455"
        },
        {
            "id":1006,
            "name":"Emmie Clarke",
            "address":"Southampton",
            "number":"4455667788"
        },
        {
            "id":1007,
            "name":"Lara Smith",
            "address":"Boston",
            "number":"0988909789"
        },
        {
            "id":1008,
            "name":"Sameer Apte",
            "address":"Pune",
            "number":"8765432190"
        },
        {
            "id":1009,
            "name":"Mark Wood",
            "address":"Auckland",
            "number":"3434345656"
        },
        {
            "id":1010,
            "name":"Bonny Johnson",
            "address":"Melbourne",
            "number":"167895432"
        }
    ]
    const history = useHistory();
    const handleClick = () => history.push('/profile');
    return (
        <div className="main">
            <div >
                <center>
                    <h1> Employee List </h1>
                </center>
            </div>
            <div>
                <table border="1" className="table">
                    <thead>
                    <tr className="Titlehead">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Contact Number</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {employees.map((key)=>(
                                 <tr>
                                     <td>{key.id}</td>
                                 <td>
                                    {key.name}
                                 </td>
                                 <td>
                                     {key.number}
                                 </td>
                                 <td>
                                     {key.address}
                                 </td>
                                 <td>
                                     <button onClick={handleClick}>View Information</button>
                                 </td>
                             </tr>
                        ))}
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List;