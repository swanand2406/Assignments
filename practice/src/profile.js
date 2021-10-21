import React from "react";
import './style.css';
import logo from './logo.jpg'

function profile() {

    return (
        <div className="maincontainer" >
            <div className="Img">
                <img src={logo} alt="Logo" />
            </div>
            <div className="empdetails">
                <center>
                    <h4 className="square">
                        ID:10001<br /><br />
                        Name of the Employee:- XYZ<br /><br />
                        Contact No:-9087654321<br /><br />
                        Address:ABC,LMNOP<br /><br />
                        Email Address:-xyz@gmail.com<br /><br />
                        Experience:1 year<br /><br />
                        Expertise:ReactJs,Angular,Next.js,Flutter<br /><br />

                    </h4>
                </center>
            </div>
        </div>
    )

}

export default profile;