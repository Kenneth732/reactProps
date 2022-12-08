import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import data from './data';
import AnimalCard from '../AnimalCard/AnimalCard';
import Header from '../Header/Header';

const showAdditional = (additional)=>{
  const alertInformation = Object.entries(additional)
  .map(information => `${information[0]}: ${information[1]}`)
  .join('\n');
  alert(alertInformation)
};
function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Header />
      {data.map(animal=>(
        <AnimalCard additional={animal.additional} key={animal.name} name={animal.name}
        developer={animal.developer} scientificName={animal.scientificName}
        size={animal.size} showAdditional={showAdditional} />
      ))}
    </div>
  );
}

export default App;
