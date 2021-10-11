import React from 'react';
import './Header.css';
import logoDe from './logoDe.png';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

function Header(props) {
    return (
        <div className="header">
            {/* <div style={{ display: "inline-block" }}>
                <img src={logoDe} className="logoDe" alt="logoDe" />
            </div>
            <div style={{ display: "inline-block" }}>
                <ul className="ul-header">
                    <li className="li-item">
                        <p>Dashboard</p>

                    </li>
                    <li className="li-item">
                        <p>Project </p>

                    </li>
                    <li className="li-item">
                        <p>Verify</p>

                    </li>
                    <li className="li-item">
                        <p>Contact</p>

                    </li>
                </ul>
            </div> */}

            <div className="App container py-3">
                <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
                    <Navbar.Brand className="font-weight-bold text-muted">
                        <img src={logoDe} className="logoDe" alt="logoDe" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <div style={{ display: "inline-block" }}>
                        <ul className="ul-header">
                            <li className="li-item">
                                <p>Dashboard</p>

                            </li>
                            <li className="li-item">
                                <p>Project </p>

                            </li>
                            <li className="li-item">
                                <p>Verify</p>

                            </li>
                            <li className="li-item">
                                <p>Contact</p>

                            </li>
                        </ul>
                    </div>
                </Navbar>

            </div>
        </div>
    );
}

export default Header;