import styled from 'styled-components';
import { gridValue } from './themes/helpers';

export const AppContainer = styled.div`
  background: ${p => p.theme.colors.base};
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
`;

export const Sidebar = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${p => p.theme.sidebar.width};
  background: ${p => p.theme.sidebar.background};
  border-right: 1px solid ${p => p.theme.sidebar.border};
  display: flex;
  flex-flow: column;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const SidebarInner = styled.div`
  position: absolute;
  top: 0;
  right: -15px;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
`;

export const Heading = styled.h1`
  font-family: ${p => p.theme.fonts.heading};
  font-size: 24px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${p => p.theme.colors.brand};
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: ${p => gridValue(2, p.theme.grid)};
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  letter-spacing: 2px;
`;

export const AnimationContainer = styled.section`
  position: absolute;
  top: 0;
  left: ${p => p.theme.sidebar.width};
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SidebarSection = styled.div`
  padding: ${gridValue(2)};
  box-sizing: border-box;

  & > ul {
    font-family: ${p => p.theme.fonts.copy};
    background: rgba(0, 0, 0, 0.2) !important;
    border-radius: ${p => p.theme.borderRadius};
    padding: ${gridValue(1)} !important;
    box-shadow: inset 1px 2px 3px rgba(0, 0, 0, 0.2);
  }
`;

export const BottomFixedSidebarSection = styled(SidebarSection)`
  position: fixed;
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.4);
  width: ${p => p.theme.sidebar.width};
  background: #1b202e;
  bottom: 0;
`;

export const SidebarLabel = styled.h3`
  font-weight: bold;
  font-family: ${p => p.theme.fonts.heading};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${p => p.theme.colors.mediumGrey};
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  font-size: 16px;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-flow: row;
`;

export const ControlButton = styled.button`
  border-radius: ${p => p.theme.borderRadius};
  border: none;
  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.3);
  font-family: ${p => p.theme.fonts.copy};
  background: ${p => `linear-gradient(to bottom, ${p.theme.colors.brandLight} 0%, ${p.theme.colors.brand} 100%)`};
  border-bottom: 4px solid #2b8bc6;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.2);
  color: #fff;
  padding: ${gridValue(1)} ${gridValue(2)};
  font-size: 14px;
  font-weight: bold;
  margin: ${gridValue(1)} ${gridValue(1)} 0 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  font-size: 16px;
  font-variant-numeric: tabular-nums;
`;

export const PlayPauseButton = styled(ControlButton)`
  padding: ${gridValue(1)};
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > small {
    font-size: 24px;
    margin: 0 ${gridValue(1)};
  }
`;

export const UrlInput = styled.input`
  font-family: ${p => p.theme.fonts.copy};
  padding: ${gridValue(1)};
  border-radius: ${p => p.theme.borderRadius};
  border: none;
  margin-top: ${gridValue(1)};
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 1px 2px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:active,
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px ${p => p.theme.colors.brand};
  }
`;

export const FetchButton = styled(ControlButton)`
  margin: ${gridValue(1)} 0 0 0;
`;

export const Loading = styled.div``;
