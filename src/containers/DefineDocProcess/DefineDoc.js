import React from 'react';
import './DefineDoc.css';
import group from './group178.png';
import trash from './trash-2.png';
import Button from '@mui/material/Button';

function DocumentItem(props) {
    return (
        <div className="doc-item">
            <div className="document doc-item-1">
                <div className="doc-name-item" ><img src={group} className="group" alt="group" /> {props.name}</div>
                <div className="doc-name-item-require">Require Signature</div>
                <div style={{ margin: '12px 0px 0px 72px' }}>
                    <label className="switch">
                        <input type="checkbox"></input>
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
            <div className="document doc-item-2">
                <div className="doc-item-2-label">
                    <div className="doc-item-2-btn">ADD PROCESS <span style={{ marginLeft: '37px' }}><img src={trash} className="trash" alt="trash" width="24px" height="24px" /></span></div>
                </div>

            </div>
        </div>
    )
}

function DefineDoc(props) {
    return (
        <div style={{ margin: '40px 0px 0px 120px' }}>
            <div className="define-process-header">Define Document Process</div>
            <div className="define-process-title">
                Configure the signature placement(s) and sequence of document(s) involved in this project.
            </div>
            <DocumentItem name="Document A.pdf" />
            <DocumentItem name="Document B.pdf" />
            <div style={{ margin: '20px 270px 0px', float: 'right' }}>
                <Button variant="outlined" className="btn-back">Back</Button>
                <Button variant="outlined" className="btn-continue" style={{ marginLeft: '16px' }}>Continue</Button>
            </div>
        </div>
    );
}

export default DefineDoc;