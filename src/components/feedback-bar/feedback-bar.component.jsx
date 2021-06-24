import React from 'react';
import { BarCloseIcon, BarContainer, BarContent, BarParagraph, BarWrapper } from './feedback-bar.styles';


const FeedbackBar = props => {
  const { message, success } = props;
  return (
    <BarWrapper>
      <BarContainer success={success}>
        <BarCloseIcon />
        <BarContent>
          <BarParagraph>
            {message}
          </BarParagraph>
        </BarContent>
      </BarContainer>
    </BarWrapper>
  )
}

export default FeedbackBar;
