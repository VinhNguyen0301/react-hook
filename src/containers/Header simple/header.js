import React from 'react';
import './header.css';
import image from '../../image.png';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import help from '../DefineDocProcess/help-circle.png'
function Header(props) {
    return (
        <div className="header-simple">
            <div style={{ display: "flex", margin: '30px 0px 0px 36px' }}>
                <div>
                    <img src={image} className="image" alt="image" />
                </div>
                <div>
                    Help<span><img src={help} className="help" alt="help" /></span>
                </div>
            </div>

        </div>
    );
}

export default Header;