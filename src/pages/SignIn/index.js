import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { signInRequest } from '~/store/modules/auth/actions';

import schema from '~/validation/SignIn';

import Logo from '~/components/Logo';

// import { Container } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    console.tron.log(email);
    console.tron.log(password);
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Logo />

      <Form schema={schema} onSubmit={handleSubmit}>
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
