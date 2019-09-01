import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />

      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Coloque seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Coloque sua password"
        />

        <button type="submit">Login</button>
        <Link to="/">Não possuo cadastro</Link>
      </Form>
    </>
  );
}
