import React from 'react';

import featPersonImage from '../../images/ProfileImage.svg';

import { Container, FeatPersonImg,
  FeatPersonText, FeatPersonSchedule } from './style';

function Index() {
  return (
    <Container>
      <FeatPersonImg src={ featPersonImage } alt="Feat person image" />
      <FeatPersonText>
        Sarah’s day care available now in North Sydney
      </FeatPersonText>
      <FeatPersonSchedule>
        Wednesday, Thursday, Friday - 7:30 - 5:30
      </FeatPersonSchedule>
    </Container>
  );
}

export default Index;
