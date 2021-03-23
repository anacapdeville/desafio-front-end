import React, { useState } from 'react';
import { useHistory } from 'react-router';
import api from '../services/api';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [check, setCheck] = useState(false);
  const history = useHistory();

  const handleChangeName = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleChangeEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleChangeCheckbox = (event) => {
    const { checked } = event.target;
    if (checked) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  const handleClick = async () => {
    const response = await api.fetchRegister(name, email, password, check);

    localStorage.setItem('user', JSON.stringify(response));

    if (check) {
      history.push('/admin');
    } else {
      history.push('/animals');
    }
  };

  return (
    <div>
      <h1>Registrar</h1>
      <label htmlFor="name">
        Nome
        <input
          type="text"
          id="name"
          onChange={handleChangeName}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          onChange={handleChangeEmail}
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          id="password"
          onChange={handleChangePassword}
        />
      </label>
      <label htmlFor="checkbox">
        Administrador
        <input
          type="checkbox"
          id="checkbox"
          onChange={handleChangeCheckbox}
        />
      </label>
      <button
        type="button"
        onClick={handleClick}
      >
        Cadastrar
      </button>
    </div>
  );
}
