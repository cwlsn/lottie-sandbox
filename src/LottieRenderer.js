import React from 'react';
import Lottie from 'react-lottie';

function LottieRenderer({ animationData, isStopped, isPaused }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={400} width={400} isStopped={isStopped} isPaused={isPaused} />;
}

export default LottieRenderer;
