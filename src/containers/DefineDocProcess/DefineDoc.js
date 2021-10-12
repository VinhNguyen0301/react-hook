import React from 'react';
import './DefineDoc.css';
import group from './group178.png';

function DocumentItem(props) {
    return (
        <div className="doc-item">
            <div>
                <img src={group} className="group" alt="group" />
                <div className="doc-name-item" >{props.name}</div>
                <div>Require Signature</div>
                <div></div>
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
        </div>
    );
}

export default DefineDoc;