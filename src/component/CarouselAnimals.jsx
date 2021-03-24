import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Carousel } from 'react-bootstrap';

export default function CarouselAnimals() {
  const [classe, setClasse] = useState('');
  const [animals, setAnimals] = useState([]);

  const fetchAllAnimals = async () => {
    const allAnimals = await api.fetchAnimals();
    const animalSelected = allAnimals.filter((animal) => animal.class === classe)
    setAnimals(animalSelected)
  }

  useEffect(() => {
    fetchAllAnimals();
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setClasse(value);
  }

  return (
    <div>
      <h1 className="text-center">Animais vertebrados</h1>
      <label htmlFor="class" className="label-classe">
        Escolha uma classe:
        <br />
        <br />
        <select
          name="class"
          id="class"
          className="form-select"
          onChange={(event) => handleChange(event)}
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
      {classe && <h2 className="text-center">{classe}</h2>}
      <br />
      <div className="text-center">
        <Carousel>
          {animals.length !== 0 && animals.map((animal) => (
            <Carousel.Item key={animal.id} className="item">
              <img
                className="carousel-image"
                src={animal.image}
                alt={animal.name}
              />
              <Carousel.Caption>
                <h3 className="shadow">{animal.name}</h3>
                <p className="shadow">{animal.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
