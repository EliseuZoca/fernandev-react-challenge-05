import { useState } from 'react';

/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id


DICA:
imagem => sprites.front_default
experiência => base_experience

EXTRA: se puder ordene por nome.
*/
import axios from "axios";
import { useEffect } from "react";

function App() {
    
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then(response => console.log)
  }, []); 
  return (
    <>
      <h3>desafio fernandev</h3>
      <h1>consumir api pokémon</h1>
    </>
  );
}

export default App;
