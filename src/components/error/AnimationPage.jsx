import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from './404.json'
class AnimationPage extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            renderer: 'svg'
        }
        return (
            <div>
               <Lottie
                options={defaultOptions}
                height={600}
                width={600}
               />
            </div>
        )
    };  
}
export default AnimationPage;