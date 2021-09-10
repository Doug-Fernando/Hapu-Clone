import React, { useState } from 'react';

import { Phrase, Text, Input, InputGroup, SubmitButton, Divider } from './style';

const Index = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = {
    name: ({ target }) => setName(target.value),
    email: ({ target }) => setEmail(target.value),
  };
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
        <Input
          onChange={ handleChange.name }
          value={ name }
          type="text"
          placeholder="Your name"
        />
        <Input
          onChange={ handleChange.email }
          value={ email }
          type="text"
          placeholder="Your e-mail"
        />
        <SubmitButton>Send</SubmitButton>
      </InputGroup>
      <Divider />
    </>
  );
};

export default Index;
