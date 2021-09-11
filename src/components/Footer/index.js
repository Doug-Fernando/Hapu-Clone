import React from 'react';

import CalendarSVG from '../../images/Union.svg';
import LogoSVG from '../../images/logo2.svg';

import { Container, Phrase, SecondPhrase, CreateNannyShareButton,
  CreateNannyShareButtonText, CalendarIcon,
  BrowseLocalNannyShareLink,
  Logo } from './style';

function Index() {
  return (
    <Container>
      <Phrase>
        Become a nanny share
      </Phrase>
      <SecondPhrase>
        Takes less than 5 minutes to get started
      </SecondPhrase>
      <CreateNannyShareButton type="button">
        <CalendarIcon src={ CalendarSVG } alt="Calendar Icon" />
        <CreateNannyShareButtonText>
          Create Your Nanny Share
          <span>Takes less than 5 minutes</span>
        </CreateNannyShareButtonText>
        <CreateNannyShareButtonText />
      </CreateNannyShareButton>
      <BrowseLocalNannyShareLink href="/browse">
        Or browse local nanny-shares
      </BrowseLocalNannyShareLink>
      <Logo src={ LogoSVG } alt="Hapu logo" />
    </Container>
  );
}

export default Index;
