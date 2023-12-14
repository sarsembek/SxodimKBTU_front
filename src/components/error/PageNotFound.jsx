import React from "react";
import { Space } from "antd";
import AnimationPage from "./AnimationPage";
import { Button } from "antd";
import { Link } from "react-router-dom";
import './PageNotFound.css';
import animation from './404.json';

export const PageNotFound = () => {
    return(
        <Space id='container'>
            <div id='text-wrapper'>
                <h1>Oh No!<br/>Error 404</h1>
                <p>This page doesn't exist or was removed!<br/>We suggest you back to home</p>
                <Link to="/event">
                    <Button 
                        id="btn"
                        type="primary" 
                        size='large'
                        style={{
                            background: "#758bfd",
                            transition: "0.3s ease"
                        }}
                    >
                        Back to Home
                    </Button>
                </Link>
            </div>
            <AnimationPage animationData={animation}/>
        </Space>
    );
};

