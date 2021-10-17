import React from 'react';
import './Confirmation.css';
import Header from '../Header simple/header';
import NavProcess from '../NavProcess/NavProcess';

function Confirmation(props) {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', width: '1440px' }}>
                <div style={{ width: '240px' }}>
                    <NavProcess />
                </div>
                <div style={{ width: '1200px', height: '820px' }}>
                    <h1>Confirmation</h1>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;