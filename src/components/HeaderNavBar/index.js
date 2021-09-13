import React from 'react';

import { BecomeNannyButton, ButtonText, NavBar,
  NavBarLinks, SignInButton } from './style';

function Index() {
  return (
    <>
      <NavBar>
        <NavBarLinks href="#">Create Your Nanny Share </NavBarLinks>
        <NavBarLinks href="#">Browse Shares</NavBarLinks>
        <NavBarLinks href="#">Our Story</NavBarLinks>
      </NavBar>
      <BecomeNannyButton type="button">
        <ButtonText> Become a nanny today</ButtonText>
      </BecomeNannyButton>
      <SignInButton href="#">Sign In</SignInButton>
    </>
  );
}

export default Index;
