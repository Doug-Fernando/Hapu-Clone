import React from 'react';

import bgImage from '../../images/Image.png';
import logo from '../../images/logo.svg';
import playIcon from '../../images/playIcon.svg';

import { Image, Gradient, Logo, LogoShape,
  BecomeNannyButton, ButtonText, MainPhrase, SecPhrase,
  PlayIconBg, PlayIcon, PlayText } from './style';

function Header() {
  return (
    <>
      <Gradient />
      <Image src={ bgImage } alt="background-image" />
      <LogoShape />
      <Logo src={ logo } alt="logo" />
      <BecomeNannyButton type="submit">
        <ButtonText> Become a nanny today</ButtonText>
      </BecomeNannyButton>
      <MainPhrase>
        Easily create or join a local nanny share with Hapu
      </MainPhrase>
      <SecPhrase>
        Hapu is Airbnb for nanny share. Share your home, nanny and costs and
        create new flexible, affordable solutions in childcare.
      </SecPhrase>
      <PlayIconBg />
      <PlayIcon src={ playIcon } alt="play icon" />
      <PlayText> See hapu in action (27 seconds) </PlayText>
    </>
  );
}

export default Header;
