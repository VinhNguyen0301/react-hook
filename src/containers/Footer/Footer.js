import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <hr></hr>
            <ul className="trip-stats-list">
                <li >
                    <p className="font-footer" style={{ marginLeft: '617px' }}>Privacy Policy<span className="margin-span">|</span> </p>

                </li>
                <li>
                    <p className="font-footer">Terms Of Use <span className="margin-span">|</span></p>

                </li>
                <li>
                    <p className="font-footer">Contact Us <span className="margin-span">|</span></p>

                </li>
                <li>
                    <p className="font-footer">Copyright © 2020 Dedoco, Inc. All rights revered</p>

                </li>
            </ul>

        </div>
    );
}

export default Footer;