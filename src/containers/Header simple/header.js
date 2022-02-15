import React from 'react';
import './header.css';
import image from '../../assets/image.png';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import help from '../DefineDocProcess/help-circle.png'
function Header(props) {
    return (
        <div className="header-simple" >
            <div style={{ display: "flex", margin: '0px 0px 0px 0px' }}>
                <div style={{ width: '95%', margin: '20px 0px 0px 24px' }}>
                    <img src={image} className="image" alt="image" width="40px" height="40px" />
                </div>
                <div style={{ width: '5%', margin: '28px 80px 0px 0px' }}>
                    <span><img src={help} className="" alt="help" style={{ marginRight: '10px' }} /></span>
                     Help
                </div>
            </div>

        </div>
    );
}

export default Header;