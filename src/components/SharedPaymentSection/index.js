import React from 'react';

import { Container, Phrase, Text, PhraseTwo } from './style';

function Index() {
  return (
    <Container>
      <Phrase>
        Shared payments made simple
      </Phrase>
      <Text>
        Sometimes it’s hard enough just sharing a restaurant bill.
        Try sharing that bill week in, week out and you might encounter
        more than a few snares. But not with Hapu. Simply set your rates
        and our automated payment system takes care of the rest.
        You need never talk money or who owes what
      </Text>
      <PhraseTwo href="#">
        Read how Bridget’s share (without Hapu) ended over $15
      </PhraseTwo>
    </Container>
  );
}

export default Index;
