import React, { useState } from 'react';
import CarouselAnimals from '../component/CarouselAnimals';

export default function Admin() {
  const [classeAdd, setClasseAdd] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

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

  return (
    <div className="div-geral">
      <h1 className="text-center">Administrador</h1>
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
      {/* <label htmlFor="image">
        <input type="file" id="image" />
      </label> */}
      <label>Foto:</label>
      <br />
      <div class="input-group mb-3">
        <input
          type="file"
          class="form-control"
          id="inputGroupFile02"
        />
        <label class="input-group-text" htmtlfor="inputGroupFile02">
          Upload
        </label>
      </div>
      <br />
      <br />
      <CarouselAnimals />
    </div>
  );
}
