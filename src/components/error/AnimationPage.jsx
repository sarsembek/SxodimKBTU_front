import React, { useState } from 'react';
import Lottie from 'react-lottie';

const AnimationPage = (props) => {
  const [animationData, setAnimationData] = useState(props.animationData);
  const [width, height] = [props.width, props.height];

  return (
    <div>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData,
          renderer: 'svg',
        }}
        height={width}
        width={height}
      />
    </div>
  );
};
  
export default AnimationPage;