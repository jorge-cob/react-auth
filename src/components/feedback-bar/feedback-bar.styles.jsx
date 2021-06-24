import styled from 'styled-components';

export const BarWrapper = styled.div`
  left: 0;
  top: 0;
  position: fixed !important;
  z-index: 10001 !important;
  height: 52px;
  width: 100%;
  cursor: pointer;
`;

export const BarContainer = styled.div`
  font-size: 15px;
  background-color: ${props => props.success ? '#46c28e' : '#ec5252'};
  color: #fff;
`; 

export const BarCloseIcon = styled.span`
  position: absolute;
  bottom: 16px;
  right: 10px;
`;

export const BarContent = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 10px;
`;


export const BarParagraph = styled.p`
  margin: 0;
`;
