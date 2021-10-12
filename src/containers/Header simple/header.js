import React from 'react';
import './header.css';
import image from '../../image.png';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

function Header(props) {
    return (
        <div className="header-simple">
            <div style={{ display: "inline-block", margin: '30px 0px 0px 36px' }}>
                <img src={image} className="image" alt="image" />
            </div>



        </div>
    );
}

export default Header;