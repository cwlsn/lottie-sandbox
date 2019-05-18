import React, { useState, useRef, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import JSONTree from 'react-json-tree';
import LottieRenderer from './LottieRenderer';
import { MdPlayCircleFilled, MdPauseCircleFilled, MdFastForward } from 'react-icons/md';
import jsonTheme from './themes/json-theme';
import * as loadingLottie from './loading-lottie.json';
import {
  AnimationContainer,
  AppContainer,
  BottomFixedSidebarSection,
  FetchButton,
  Heading,
  PlayPauseButton,
  RowContainer,
  Sidebar,
  SidebarInner,
  SidebarLabel,
  SidebarSection,
  UrlInput,
} from './components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato|Exo:400,700&display=swap');

  body {
    font-family: ${p => p.theme.fonts.copy};
  }
`;

const emptyLottie = {
  layers: [],
};

function App() {
  const [loading, setLoading] = useState(true);
  const [animationData, setAnimationData] = useState(emptyLottie);
  const [urlInputValue, setUrlInputValue] = useState('https://assets8.lottiefiles.com/temporary_files/i5pVEt.json');
  const [isPaused, setPaused] = useState(false);
  const [speed, setSpeed] = useState(1);

  const urlRef = useRef();

  const maxSpeed = 3;
  const rampSpeed = speed => setSpeed(Math.min(Math.max(1, (speed + 0.5) % maxSpeed), maxSpeed));

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(urlInputValue);
      const json = await result.json();
      console.log('went and got it', json);
      setAnimationData(json);
      setLoading(false);
    };
    setLoading(true);
    fetchData();
  }, [urlInputValue]);

  return (
    <AppContainer>
      <GlobalStyle />
      <Sidebar>
        <SidebarInner>
          <Heading>Lottie Viewer</Heading>
          <SidebarSection>
            <SidebarLabel>Fetch from URL</SidebarLabel>
            <UrlInput placeholder={urlInputValue} ref={urlRef} />
            <FetchButton onClick={() => setUrlInputValue(urlRef.current.value)}>Fetch!</FetchButton>
          </SidebarSection>
          <SidebarSection>
            <SidebarLabel>Lottie Data</SidebarLabel>
            <JSONTree data={animationData} theme={jsonTheme} />
          </SidebarSection>
          <BottomFixedSidebarSection>
            <SidebarLabel>Controls</SidebarLabel>
            <RowContainer>
              <PlayPauseButton onClick={() => setPaused(!isPaused)}>
                {isPaused ? <MdPlayCircleFilled /> : <MdPauseCircleFilled />}
              </PlayPauseButton>
              <PlayPauseButton onClick={() => rampSpeed(speed)}>
                <MdFastForward /> <small>{speed.toFixed(1)}</small>
              </PlayPauseButton>
            </RowContainer>
          </BottomFixedSidebarSection>
        </SidebarInner>
      </Sidebar>
      <AnimationContainer>
        <LottieRenderer
          animationData={loading ? loadingLottie.default : animationData}
          isStopped={false}
          isPaused={isPaused}
          speed={speed}
        />
      </AnimationContainer>
    </AppContainer>
  );
}

export default App;
