import React, { useState } from 'react';
import CarouselAnimals from '../component/CarouselAnimals';
import api from '../services/api';

export default function Admin() {
  const [classeAdd, setClasseAdd] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeName = (event) => {
    const { value } = event.target;
    setName(value);
  }

  const handleChange = (event) => {
    const { value } = event.target;
    setClasseAdd(value);
  }

  const handleChangeDescription = (event) => {
    const { value } = event.target;
    setDescription(value);
  }

  const handleChangeFile = (event) => {
    const fileUploaded = event.target.files[0];
    setFile(fileUploaded);
    setFileName(`http://localhost:3001/images/${fileUploaded.name}`);
  }

  const handleClick = () => {
    const formData = new FormData();
    formData.append('file', file);
    api.fetchFile(formData);
    api.fetchNewAnimal(name, classeAdd, description, fileName);
    setIsVisible(true);
  }

  return (
    <div className="div-geral">
      <h1 className="text-center">Administrador</h1>
      <div>
        <h2>Adicionar animal</h2>
        <label htmlFor="nome">
          Nome:
        <input
            className="form-control"
            type="text"
            id="nome"
            onChange={(event) => handleChangeName(event)}
          />
        </label>
        <br />
        <br />
        <label htmlFor="classe">
          Classe:
        <select
            name="class"
            id="classe"
            onChange={(event) => handleChange(event)}
            className="form-select"
          >
            <option value=""></option>
            <option value="Peixe">Peixe</option>
            <option value="Anfíbio">Anfíbio</option>
            <option value="Réptil">Réptil</option>
            <option value="Ave">Ave</option>
            <option value="Mamífero">Mamífero</option>
          </select>
        </label>
        <br />
        <br />
        <label htmlFor="description">
          Descrição:
        <input
            className="form-control"
            type="text"
            id="description"
            onChange={(event) => handleChangeDescription(event)}
          />
        </label>
        <br />
        <br />
        <label htmlFor="image">
          Foto:
        <input
            type="file"
            id="image"
            class="form-control"
            onChange={(event) => handleChangeFile(event)}
          />
        </label>
        <br />
        <br />
        <button
          type="button"
          onClick={handleClick}
          className="btn btn-secondary"
        >
          Enviar dados
      </button>
        <br />
        <br />
        {isVisible && <p>Dados enviados com sucesso!</p>}
      </div>
      <br />
      <br />
      <CarouselAnimals />
    </div>
  );
}
