import { Button, TextField } from '@material-ui/core';
import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin: 20px auto 40px;
  max-width: 1100px;
`;

export const TitleItem = styled.h2`
  color: #29303b;
  text-align: center;
  line-height: 1 !important;
  font-weight: 700 !important;
  font-size: 22px;
  margin: 20px 0 3px;
`;

export const SubtitleItem = styled.h2`
  font-size: 15px;
  font-weight: 400;
  color: #29303b;
  text-align: center;
  margin: 0 0 15px;
  line-height: 25px;
`;

export const MainSection = styled.div`
  padding-left: 195px;
  position: relative;
`;

export const SideNav = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  background: #fff;
  position: absolute;
  width: 195px;
  box-shadow: 1px 1px #dedfe0 inset,0 -1px #dedfe0 inset;
  overflow: hidden;
  padding-bottom: 20px;
`;

export const ProfileWrapper = styled.div`
  background: #fff;
  position: relative;
  min-height: 600px;
  margin: 20px auto;
  border: 1px solid #dedfe0;
`;

export const FormContent = styled.div`
  box-shadow: 0 1px 0 0 #dedfe0,0 -1px 0 0 #dedfe0;
`;

export const FormItem = styled(props => <TextField {...props} />)`
  padding: 10px 142px;
`;

export const BottomFormContent = styled.div`
  width: 100%;
  margin: 10px 0 15px;
  text-align: center;
`;

export const ButtonItem = styled(props => <Button {...props} />)`
  && {
    color: #fff;
    background-color: #ec5252;
    font-weight: 700;
    border: 1px solid transparent;
    padding: 11px 12px;
    font-size: 15px;
    line-height: 1.35135;
    border-radius: 2px;
    &:hover {
      color: #fff;
      background-color: #ec5252;
    }
  }
`;
