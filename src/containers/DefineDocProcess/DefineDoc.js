import React from 'react';
import './DefineDoc.css';
import group from '../../assets/group178.png';
import trash from '../../assets/trash-2.png';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { LinkContainer } from "react-router-bootstrap";
import cancel from '../CreateDocument/x.png';
import help from '../DefineDocProcess/help-circle.png';
import Modal from '@mui/material/Modal';
import Footer from '../Footer/Footer';
import AddProcess from './AddProcess/AddProcess';
import Header from '../Header simple/header';
import NavProcess from '../NavProcess/NavProcess';
import fakeData from '../../assets/fake-data.png';
import rec from '../../assets/Rectangle.png'

function DocumentRecipient(props) {
    return (
        <div className="document-recipient-box">
            <img src={fakeData} className="fake" alt="fake" />
        </div>
    )
}

function DocumentItem(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                    <div className="doc-item-2-btn" onClick={handleOpen}>ADD PROCESS <span style={{ marginLeft: '37px' }}><img src={trash} className="trash" alt="trash" width="24px" height="24px" /></span></div>
                </div>
            </div>

            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="box-ui">
                    <div style={{ display: 'flex' }}>
                        <div className="box-ui1" >
                            <div className="add-process-title">1. Add Process</div>
                            <div className="process-doc-name">
                                <div className="process-doc-name-d">Document A.pdf</div>
                            </div>
                            <div className="choose-sharing">Choose sharing option</div>
                            <div className="choose-checkbox" >
                                <div className="switch-btn-share">Dedoco Secure Share</div>
                                <div className="switch-btn-cloud" style={{ marginLeft: '20px' }}>Manual</div>
                            </div>
                            <div className="doc-reci-container">
                                <div className="doc-reci">
                                    Document Recipient(s)
                            </div>
                                <div className="add-sign-order">
                                    <span><img src={rec} className="rec" alt="rec" style={{ marginRight: '12px' }} /></span>
                                    Add Signing order
                            </div>
                            </div>

                            <DocumentRecipient />
                            <div className="add-recipient-btn">+ Add Recipient</div>
                            <div style={{
                                width: '680px',
                                height: '96px',
                                marginTop: '79px',
                                borderTop: '1px solid #828282'
                            }}>
                                <div style={{ float: 'right', margin: '24px 56px 24px 0px' }}>
                                    <Button variant="outlined" className="btn-back">Back</Button>
                                    <LinkContainer to="/confirmation" style={{ marginLeft: '16px' }}>
                                        <Button variant="outlined" className="btn-continue" >Continue</Button>
                                    </LinkContainer>
                                </div>
                            </div>
                        </div>
                        <div className="box-ui2" >
                            <div className="help">Help<img src={help} className="help" alt="help" style={{ width: '20px', height: '20px' }}></img><span style={{ marginLeft: '0px' }} onClick={handleClose}><img src={cancel} className="cancel" alt="cancel" style={{ width: '32px', height: '32px' }}></img></span></div>

                        </div>
                    </div>

                </Box>
            </Modal>

        </div>
    )
}

function DefineDoc(props) {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', width: '1440px' }}>
                <div style={{ width: '240px' }}>
                    <NavProcess />
                </div>
                <div style={{ width: '1200px', height: '820px' }}>
                    <div style={{ margin: '40px 0px 0px 120px' }}>
                        <div className="define-process-header">Define Document Process</div>
                        <div className="define-process-title">
                            Configure the signature placement(s) and sequence of document(s) involved in this project.
            </div>
                        <DocumentItem name="Document A.pdf" />
                        <DocumentItem name="Document B.pdf" />
                        <div style={{ margin: '20px 360px 0px', float: 'right' }}>
                            <Button variant="outlined" className="btn-back">Back</Button>
                            <Button variant="outlined" className="btn-continue" style={{ marginLeft: '16px' }}>Continue</Button>
                        </div>
                    </div>
                    <div style={{ marginTop: '225px' }}>
                        <Footer />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DefineDoc;