import React, { useState, useEffect } from 'react';
import "./Dashboard.css";
import Button from '@mui/material/Button';
import cover from './cover.png';
import bag from './image/bag.png';
import clock from './image/clock.png';
import expired from './image/expired.png';
import complete from './image/complete.png';
import fileText from './image/file-text.png';
import draft from './image/draft.png';
import pending from './image/pending.png';
import completed from './image/completed.png';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { LinkContainer } from "react-router-bootstrap";

function Box(props) {
    return (
        <div className="box-item" style={{ backgroundColor: props.color }}>
            <div className="flex-container">
                <div className="item item1">
                    {props.iconName == "bag" ? <img style={{ margin: '26px 0px 31px 24px' }} alt="not found" src={bag} /> : null}
                    {props.iconName == "clock" ? <img style={{ margin: '26px 0px 31px 24px' }} alt="not found" src={clock} /> : null}
                    {props.iconName == "expired" ? <img style={{ margin: '26px 0px 31px 24px' }} alt="not found" src={expired} /> : null}
                    {props.iconName == "complete" ? <img style={{ margin: '26px 0px 31px 24px' }} alt="not found" src={complete} /> : null}
                </div>
                <div className="item item2">
                    <div className="item-document" >{props.name}</div>
                    <div className="item-document2">0 Document(S)</div>
                </div>
            </div>
        </div>
    )
}

export default function Dashboard() {
    return (
        <div>
            <Header />

            <div className="Dashboard">
                <div className="flex-container">
                    <div className="item item1">
                        <p className="username-item" >Hi, Ernie</p>
                        <p style={{ margin: "10px 0px 0px 35px" }}>Let's begin a new document, shall we?</p>
                        <LinkContainer to="/create-new-project" style={{ margin: "30px" }}>
                            <Button variant="contained" >Create a Document</Button>
                        </LinkContainer>
                        <Button variant="outlined" className="btn-item">Use Template</Button>
                    </div>
                    <div className="item item2">
                        <img src={cover} className="cover" alt="cover" width="586px" height="322px" />
                    </div>
                </div>
            </div>
            <div style={{ width: '1152px', display: 'flex' }} className="main-box">
                <Box color="#D8EBF6" name="ALL DOCUMENTS" iconName="bag"></Box>
                <Box color="#FFF2CC" name="PENDING" iconName="clock"></Box>
                <Box color="#F0C7BA" name="EXPIRED" iconName="expired"></Box>
                <Box color="#DAEAEA" name="COMPLETE" iconName="complete"></Box>
            </div>
            <div className="flex-container2">
                <div className="flex-box flex-box-1">
                    <div className="title" >Assigned to Me (2)</div>
                    <div className="detail-title">Document(s) that required  your attention.</div>
                    <table className="data-table">
                        <tbody>
                            <tr>
                                <th className="th-tag">Name</th>
                                <th className="th-tag">Action</th>
                            </tr>
                            <tr>
                                <td ><span><img src={fileText} className="fileText" alt="fileText" /> </span>Document 1</td>
                                <td>
                                    <Button variant="contained" >Sign Document</Button>
                                </td>
                            </tr>
                            <hr />
                            <tr>
                                <td><span><img src={fileText} className="fileText" alt="fileText" /></span>Document 2</td>
                                <td>
                                    <Button variant="contained" >Sign Document</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="view-all-btn">View All</div>
                </div>
                <div className="flex-box flex-box-2">
                    <div className="title" >Recent</div>
                    <div className="detail-title">Review your recent Document(s)</div>
                    <table className="data-table">
                        <tbody>
                            <tr>
                                <th className="th-tag">Name</th>
                                <th className="th-tag">Last Modified</th>
                                <th className="th-tag">Status</th>
                            </tr>
                            <tr>
                                <td ><span><img src={fileText} className="fileText" alt="fileText" /> </span>LOE_September_2020</td>
                                <td > Just now</td>
                                <td > <img src={draft} className="draft" alt="draft" /></td>
                                <td>
                                    <Button variant="contained" >View Document</Button>
                                </td>
                            </tr>
                            <hr />
                            <tr>
                                <td><span><img src={fileText} className="fileText" alt="fileText" /></span>General Report</td>
                                <td > 1 hour ago</td>
                                <td > <img src={pending} className="pending" alt="pending" /></td>
                                <td>
                                    <Button variant="contained" >View Document</Button>
                                </td>
                            </tr>
                            <hr />
                            <tr>
                                <td><span><img src={fileText} className="fileText" alt="fileText" /></span>Year end Report</td>
                                <td > 22 July 2020</td>
                                <td > <img src={completed} className="completed" alt="completed" /></td>
                                <td>
                                    <Button variant="contained" >View Document</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="view-all-btn2">View All</div>
                </div>
            </div>


            <Footer />
        </div>


    );
}