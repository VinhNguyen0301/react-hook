import React from "react";
import "./Home.css";
import Frame from './Frame.png';

export default function Home() {
    return (
        <div className="Home">
            <div className="lander">
                <img src={Frame} className="Frame" alt="Frame" />
                <h1>Login to Your Dedoco Account</h1>
                <p className="text-muted">Please login to your account before signing this document</p>
            </div>
        </div>
    );
}