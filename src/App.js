import React, { useState, useRef, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import LottieRenderer from './LottieRenderer';
import * as loadingLottie from './loading-lottie.json';
import {
  AppContainer,
  Sidebar,
  Heading,
  SidebarLabel,
  SidebarSection,
  UrlInput,
  FetchButton,
  DataInput,
  ControlButton,
  AnimationContainer,
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
  const [animationData, setAnimationData] = useState(JSON.stringify(emptyLottie));
  const [urlInputValue, setUrlInputValue] = useState('https://assets3.lottiefiles.com/packages/lf20_xP7wEd.json');
  const [isStopped, setStopped] = useState(false);
  const [isPaused, setPaused] = useState(false);

  const textareaRef = useRef();
  const urlRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(urlInputValue);
      const json = await result.json();
      console.log('went and got it', json);
      setAnimationData(JSON.stringify(json));
      setLoading(false);
    };
    setLoading(true);
    fetchData();
  }, [urlInputValue]);

  return (
    <AppContainer>
      <GlobalStyle />
      <Sidebar>
        <Heading>Lottie Viewer</Heading>
        <SidebarSection>
          <SidebarLabel>Fetch from URL</SidebarLabel>
          <UrlInput placeholder={urlInputValue} ref={urlRef} />
          <FetchButton onClick={() => setUrlInputValue(urlRef.current.value)}>Fetch!</FetchButton>
        </SidebarSection>
        <SidebarSection>
          <SidebarLabel>Lottie Data</SidebarLabel>
          <DataInput ref={textareaRef} onClick={() => textareaRef.current.select()} value={animationData} disabled />
        </SidebarSection>
        <SidebarSection>
          <SidebarLabel>Controls</SidebarLabel>
          <ControlButton onClick={() => setStopped(!isStopped)}>{isStopped ? 'Start' : 'Stop'}</ControlButton>
          <ControlButton onClick={() => setPaused(!isPaused)} disabled={isStopped}>
            {isPaused ? 'Play' : 'Pause'}
          </ControlButton>
        </SidebarSection>{' '}
      </Sidebar>
      <AnimationContainer>
        <LottieRenderer
          animationData={loading ? loadingLottie.default : JSON.parse(animationData)}
          isStopped={isStopped}
          isPaused={isPaused}
        />
      </AnimationContainer>
    </AppContainer>
  );
}

export default App;
