import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleChangeEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleClick = async () => {
    const response = await api.fetchLogin(email, password);
    localStorage.setItem('user', JSON.stringify({ ...response }));
    if (response.role === 'client') {
      history.push('/animals');
    } else if (response.role === 'admin') {
      history.push('/admin');
    }
  };

  return (
    <div className="text-center login">
      <h1>Login</h1>
      <label htmlFor="email">
        Email
        <input
          className="form-control"
          placeholder="Email"
          type="email"
          id="email"
          onChange={ handleChangeEmail }
        />
      </label>
      <br/>
      <br/>
      <label htmlFor="password">
        Senha
        <input
          placeholder="Senha"
          className="form-control"
          type="password"
          id="password"
          onChange={ handleChangePassword }
        />
      </label>
      <br/>
      <br/>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={ handleClick }
      >
        Entrar
      </button>
      <br/>
      <Link
        to="/register"
      >
        Ainda não tenho conta!
      </Link>
    </div>
  );
}
