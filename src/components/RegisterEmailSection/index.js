import React, { useState } from 'react';

import newsLetterIntegration from '../../service/api';

import { Container, Phrase, Text, Input, InputGroup, SubmitButton,
  LoadAnimation } from './style';

const HTTP_SUCCESS_CODE = 200;

const Index = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameInput, setNameInput] = useState(false);
  const [emailInput, setEmailInput] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = {
    name: ({ target }) => setName(target.value),
    email: ({ target }) => setEmail(target.value),
  };

  const regexEmail = (userEmail) => {
    // Ref for regex => https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return !!regex.test(userEmail);
  };

  const requestApi = async () => {
    if (!name) return setNameInput(true);
    if (!email || !regexEmail(email)) return setEmailInput(true);

    setLoading(true);
    const result = await newsLetterIntegration({ name, email });
    setLoading(false);
    console.log(result);
    if (result.error) {
      alert('Sorry! Try again later.');
      return;
    }
    if (result.status === HTTP_SUCCESS_CODE) {
      setName('');
      setEmail('');
      alert('Cadastrado com sucesso!');
    }
  };

  return (
    <Container>
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
          inputField={ nameInput }
          onBlur={ () => setNameInput(false) }
        />
        <Input
          onChange={ handleChange.email }
          value={ email }
          type="text"
          placeholder="Your e-mail"
          inputField={ emailInput }
          onBlur={ () => setEmailInput(false) }
        />
        { !loading
          ? (
            <SubmitButton type="submit" onClick={ requestApi }>
              Send
            </SubmitButton>)
          : <LoadAnimation />}
      </InputGroup>
    </Container>
  );
};

export default Index;
