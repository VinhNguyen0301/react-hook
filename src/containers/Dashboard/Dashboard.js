import React from "react";
import "./Dashboard.css";
import Button from '@mui/material/Button';
import cover from './cover.png';

// function Box(props) {
//     return (
//         <div style={{ backgroundColor: props.color }}></div>
//     )
// }

export default function Dashboard() {
    return (
        <div>
            <div className="Dashboard">
                <div className="flex-container">
                    <div className="item item1">
                        <p className="username-item" >Hi, Ernie</p>
                        <p style={{ margin: "10px 0px 0px 35px" }}>Let's begin a new document, shall we?</p>
                        <Button variant="contained" style={{ margin: "35px" }}>Create a Document</Button>
                        <Button variant="outlined" className="btn-item">Use Template</Button>
                    </div>
                    <div className="item item2">
                        <img src={cover} className="cover" alt="cover" />
                    </div>
                </div>
            </div>
            {/* <Box color="green"></Box>
            <Box color="blue"></Box> */}
        </div>


    );
}