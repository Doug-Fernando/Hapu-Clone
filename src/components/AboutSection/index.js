import React from 'react';

import planImage from '../../images/ImageSection1.svg';
import { AboutImage, AboutPhrase, AboutText, GetStartedLink, Divider } from './style';

function Index() {
  return (
    <>
      <AboutImage src={ planImage } alt="Plan image" />
      <AboutPhrase>
        Share your home, nanny and costs
      </AboutPhrase>
      <AboutText>
        You have a fantastic home, a fantastic nanny and wouldn’t cutting your
        costs in half be, well, fantastic?! If only it was easy to connect with
        other parents to share your costs? Well now it is, with Hapu.
        {' '}
        <span>Hapu means tribe</span>
        {' '}
        and it’s our foundational 3 tribal principles that empowers you to
        create and manage your own tribe. A tribe that together has the power to
        create new affordable solutions in childcare that work for you and your community.
      </AboutText>
      <GetStartedLink href="/register">
        Ready to get started?
      </GetStartedLink>
      <Divider />
    </>
  );
}

export default Index;
