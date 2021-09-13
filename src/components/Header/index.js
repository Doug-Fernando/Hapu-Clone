import React from 'react';

import logo from '../../images/logo.svg';
import playIcon from '../../images/playIcon.svg';

import HeaderNavBar from '../HeaderNavBar';
import { Container, Image, Gradient, Logo, LogoShape,
  MainPhrase, SecPhrase, SideImage,
  PlayIconBg, PlayIcon, PlayText } from './style';

function Index() {
  return (
    <Container>
      <Gradient />
      <Image />
      <LogoShape />
      <Logo src={ logo } alt="logo" />
      <HeaderNavBar />
      <SideImage />
      <MainPhrase>
        Easily create or join a local nanny share with Hapu
      </MainPhrase>
      <SecPhrase>
        Hapu is Airbnb for nanny share. Share your home, nanny and costs and
        create new flexible, affordable solutions in childcare.
      </SecPhrase>
      <PlayIconBg type="button">
        <PlayIcon src={ playIcon } alt="play icon" />
      </PlayIconBg>
      <PlayText href="#"> See hapu in action (27 seconds) </PlayText>
    </Container>
  );
}

export default Index;
