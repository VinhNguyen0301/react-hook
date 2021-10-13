import React from 'react';
import './NavProcess.css';
import vector from './Vector.png';
import check from './check-circle.png';

function DocumentStepComponent(props) {
    return (
        <div style={{
            background: props.color,
            border: '200px',
            height: '46px',
            margin: '4px 16px 0px 24px',
            alignItems: 'center',
            display: 'flex',

        }}>
            <div className="add-doc-step" style={{ color: props.fontColor }}>{props.name} {props.name === '1. Add Document(s)' ? <span style={{ marginLeft: '5px' }}><img src={check} className="check" alt="check" /></span> : null}
                {props.name === '2. Add Process' ? <span style={{ marginLeft: '38px' }}><img src={check} className="check" alt="check" /></span> : null}
            </div>
        </div>
    )
}
function NavProcess(props) {
    return (
        <div className="nav-process">
            <div className="return-btn">
                <span><img src={vector} className="vector" alt="vector" /></span> Return to Dashboard
            </div>
            <div className="dedoco-sign-title">
                Dedoco Sign Agree...
            </div>
            <div style={{ marginTop: '24px' }}>
                <DocumentStepComponent name="1. Add Document(s)" check="true" color='#D8EBF6' fontColor='#0D41BF' />
                <DocumentStepComponent name="2. Add Process" check="true" color='#D8EBF6' fontColor='#0D41BF' />
                <DocumentStepComponent name="3. Confirmation" color='#3565E3' fontColor='#FFFFFF' />
            </div>

        </div>
    );
}

export default NavProcess;