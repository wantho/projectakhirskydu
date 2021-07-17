import React, { Component } from 'react';
import Status1 from './Status1';
import Logo1 from "../images/Group90.png";
import './UpdateStatus.css';

class UpdateStatus extends Component {
    render() {
        return (
            <div>
                <div className="box1">
                    <p className="text2">What’s on you mind, Paul? <span><img id="d" src={Logo1} /></span></p>
                </div>
                <div>
                    <Status1  />
                   
                </div>


            </div>
        )
    }
}

export default UpdateStatus;
