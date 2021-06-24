import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { updateUserStart } from '../../redux/user/user.actions';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { ProfileContainer, MainSection, SideNav, ProfileWrapper, TitleItem, SubtitleItem, FormContent, FormItem, BottomFormContent, ButtonItem } from './profile.styles';


const Profile = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(createStructuredSelector({
    user: selectCurrentUser,
  }));

  const [ displayName, setDisplayName] = useState(user.displayName);
  const [ name, setName] = useState(user.name);
 
  function onSubmit() {
    dispatch(updateUserStart({...user, name, displayName}))
  };

  return (
    <ProfileContainer>
      <MainSection>
        <SideNav>

        </SideNav>
        <ProfileWrapper>
          <TitleItem> Public profile </TitleItem>
          <SubtitleItem> Add information about yourself </SubtitleItem>
          <form>
            <FormContent>
              <FormItem
                autoFocus
                margin="dense"
                id="displayName"
                label="Display name"
                fullWidth
                value={displayName}
                onChange={e => setDisplayName(e.target.value)}
                required={true}
                placeholder="Display name"
              />
              <FormItem
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                fullWidth
                value={name}
                onChange={e => setName(e.target.value)}
                required={true}
                placeholder="Name"
              />
              
              
            </FormContent>
            <div>
              <BottomFormContent>
                <ButtonItem onClick={onSubmit}>
                  <span>Save</span>
                </ButtonItem>
              </BottomFormContent>
            </div>
          </form>
        </ProfileWrapper>
      </MainSection>
    </ProfileContainer>
  )
}

export default Profile;