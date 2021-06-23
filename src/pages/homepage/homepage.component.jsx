import React from 'react';
import { useSelector } from 'react-redux';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => {
  const userName = useSelector(state => state.user.currentUser.displayName)
  return (
    <HomePageContainer>
      <div>Welcome {userName}</div>
    </HomePageContainer>
  )
};

export default HomePage;
