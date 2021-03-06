import React from "react";
import "./Home.css";
import Frame from '../../assets/Frame.png';
import Login from "../Login/Login";
import Header from "../Header simple/header";

export default function Home() {
    return (
        <div>
            <Header />
            <div className="Home">
                <div className="lander">
                    <img src={Frame} className="Frame" alt="Frame" />
                    <h1>Login to Your Dedoco Account</h1>
                    <p className="text-muted">Please login to your account before signing this document</p>
                    <Login />
                </div>
            </div>
        </div>

    );
}