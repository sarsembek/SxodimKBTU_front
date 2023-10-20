import React from "react";
import { Space } from "antd";
import AnimationPage from "./AnimationPage";
import { Button } from "antd";
import './PageNotFound.css';

export const PageNotFound = () => {
    return(
        <Space id='wrapper'>
            <div id='text-wrapper'>
                <h1>Oh No!<br/>Error 404</h1>
                <p>This page doesn't exist or was removed!<br/>We suggest you back to home</p>
                <Button 
                    id="btn"
                    type="primary" 
                    size='large'
                    style={{
                        background: "#38a3a5",
                        transition: "0.3s ease"
                    }}
                >
                    Back to Home
                </Button>
            </div>
            <AnimationPage/>
        </Space>
    );
};

