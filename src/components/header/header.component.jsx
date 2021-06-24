import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import FeedbackBar from '../feedback-bar/feedback-bar.component';

import { HeaderContainer, OptionsContainer, OptionLink } from './header.styles';


const Header = () => {

  const dispatch = useDispatch();
  const [showFeedback, setShowFeedback] = useState(false);
  const {user, feedback} = useSelector(createStructuredSelector({
    user: selectCurrentUser,
    feedback: state => state.feedback
  }));
  useEffect(() => {
    setShowFeedback(feedback.message ? true : false);
    if(feedback.timeout && feedback.timeout !== 0) {
      setTimeout(() => {
        setShowFeedback(false)
      }, feedback.timeout)
    }
  }, [feedback])

  return (
    <HeaderContainer>
      {showFeedback && <FeedbackBar message={feedback.message} success={feedback.success} /> }
      <OptionsContainer>
        {
          user ?
          <>
            <OptionLink as='div' onClick={() => dispatch(signOutStart())}>SIGN OUT</OptionLink>
            <OptionLink to='/profile'> PROFILE </OptionLink>
          </>
          :
          <OptionLink to='/signin'> SIGN IN </OptionLink>
        }
      </OptionsContainer>
    </HeaderContainer>
  );
}

export default Header;
