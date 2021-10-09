import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <hr></hr>
            <ul className="trip-stats-list">
                <li>
                    <p>Privacy Policy <span>|</span> </p>

                </li>
                <li>
                    <p>Terms Of Use <span>|</span></p>

                </li>
                <li>
                    <p>Contact Us <span>|</span></p>

                </li>
                <li>
                    <p>Copyright © 2020 Dedoco, Inc. All rights revered</p>

                </li>
            </ul>

        </div>
    );
}

export default Footer;