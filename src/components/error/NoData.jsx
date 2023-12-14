import React from "react";
import AnimationPage from "./AnimationPage";
import animation from "./NoData.json";

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
};

const NoData = () => {
    return (
        <div style={divStyle}>
            <h1>No data to display</h1>
            <AnimationPage animationData={animation} width={300} height={300}/>
        </div>
    )
};

export default NoData;