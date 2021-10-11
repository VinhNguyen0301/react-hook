import React from 'react';
import './CreateNewDoc.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import plus from './plus.png';

function CreateNewDoc(props) {
    return (
        <div>
            <div className="headers">Create New Project</div>
            <div className="titles">Set up the name and document(s) needed for this project</div>
            <div className="textfield">
                <TextField className="textfield-size" label="PROJECT NAME" variant="outlined" />
            </div>

            <div className="doc-header">DOCUMENT</div>
            <div className="doc-title">Choose the document(s) to start project with.</div>
            <div className="btn-add">
                <img src={plus} className="plus" alt="plus" />
            </div>
            <div style={{ margin: '98px 0px 0px 80px' }}>
                <Button variant="outlined" className="btn-back">Back</Button>
                <Button variant="outlined" className="btn-continue" style={{ marginLeft: '16px' }}>Continue</Button>
            </div>

        </div>
    );
}

export default CreateNewDoc;