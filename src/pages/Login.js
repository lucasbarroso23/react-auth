import React, { useContext } from 'react';
import { Context } from '../context/AuthContext';

export default function Login() {
  const { authenticated, handleLogin } = useContext(Context);

  console.debug('Login', authenticated);

  return <button type="button" onClick={handleLogin}>Entrar</button>;
}