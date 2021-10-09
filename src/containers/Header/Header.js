import React from 'react';
import './Header.css';
import logoDe from './logoDe.png';

function Header(props) {
    return (
        <div className="header">
            <div style={{ display: "inline-block" }}>
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
            </div>

        </div>
    );
}

export default Header;