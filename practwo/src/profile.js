import React from "react";
import logo from './logo.jpg'
import { useHistory } from 'react-router-dom';



function Profile() {
    const history = useHistory();
    const handleClick = () => history.push('/');

    return (
        <div>
            <center>
                <img src={logo} alt="Logo" />
                <div class="box-content h-scren w-72 p-16 
                border-8 border-green-300 bg-gray-500 m4 text-white">
                    ID:10001<br /><br />
                    Name of the Employee:- XYZ<br /><br />
                    Contact No:-9087654321<br /><br />
                    Address:ABC,LMNOP<br /><br />
                    Email Address:-xyz@gmail.com<br /><br />
                    Experience:1 year<br /><br />
                    Expertise:ReactJs,Angular,Next.js,Flutter<br /><br />
                    <button onClick={handleClick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Back</button>

                </div>
            </center>
        </div>
    )
}

export default Profile;