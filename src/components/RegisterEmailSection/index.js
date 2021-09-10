import React from 'react';

import { Phrase, Text, Input, InputGroup, SubmitButton, Divider } from './style';

function index() {
  return (
    <>
      <Phrase>
        Are you a parent without a nanny and looking to share?
      </Phrase>
      <Text>
        Leave us your name and email and we’ll update you as soon as a
        share becomes available in your area!
      </Text>
      <InputGroup>
        <Input type="text" placeholder="Your name" />
        <Input type="text" placeholder="Your e-mail" />
        <SubmitButton>Send</SubmitButton>
      </InputGroup>
      <Divider />
    </>
  );
}

export default index;
