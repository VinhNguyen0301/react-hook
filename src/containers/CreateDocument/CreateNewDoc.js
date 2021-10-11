import * as React from 'react';
import './CreateNewDoc.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import plus from './plus.png';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 656,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};

function CreateNewDoc(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className="headers">Create New Project</div>
            <div className="titles">Set up the name and document(s) needed for this project</div>
            <div className="textfield">
                <TextField className="textfield-size" label="PROJECT NAME" variant="outlined" />
            </div>

            <div className="doc-header">DOCUMENT</div>
            <div className="doc-title">Choose the document(s) to start project with.</div>
            <div className="btn-add" onClick={handleOpen}>
                <img src={plus} className="plus" alt="plus" />
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="box-style">
                    <div style={{ margin: '24px 80px 0px 80px' }}>
                        <div className="modal-headers" >Add Document(s) to Project</div>
                        <div className="modal-titles">We will create digital fingerprint(hash) of the document to register it to the blockchain.At any point, your document will never be uploaded to Dedoco servers.</div>
                        <div className="switch-btn">
                            <div className="switch-btn-desktop">From Desktop</div>
                            <div className="switch-btn-cloud">From Cloud</div>
                        </div>
                    </div>

                </Box>
            </Modal>
            <div style={{ margin: '98px 0px 0px 80px' }}>
                <Button variant="outlined" className="btn-back">Back</Button>
                <Button variant="outlined" className="btn-continue" style={{ marginLeft: '16px' }}>Continue</Button>
            </div>

        </div>
    );
}

export default CreateNewDoc;