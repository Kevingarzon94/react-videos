import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

//ReactDOM.render('Que voy a renderizar', 'Donde lo hare')
//console.log("Hola mundo")

const app = document.getElementById('app')

render(<Media title="¿Que Es El Bitcoin?" images="./images/covers/bitcoin.jpg" author="Kevin Garzon"/>, app);