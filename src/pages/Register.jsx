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
    <div className="div-geral">
      <h1>Registrar</h1>
      <label htmlFor="name">
        Nome:
        <input
          className="form-control"
          type="text"
          id="name"
          onChange={handleChangeName}
        />
      </label>
      <br />
      <br />
      <label htmlFor="email">
        Email:
        <input
          className="form-control"
          type="email"
          id="email"
          onChange={handleChangeEmail}
        />
      </label>
      <br />
      <br />
      <label htmlFor="password">
        Senha:
        <input
          className="form-control"
          type="password"
          id="password"
          onChange={handleChangePassword}
        />
      </label>
      <br />
      <br />
      <label htmlFor="checkbox">
        Administrador
        <input
          class="form-check"
          type="checkbox"
          id="checkbox"
          onChange={handleChangeCheckbox}
        />
      </label>
      <br />
      <br />
      <button
        type="button"
        onClick={handleClick}
      >
        Cadastrar
      </button>
    </div>
  );
}
