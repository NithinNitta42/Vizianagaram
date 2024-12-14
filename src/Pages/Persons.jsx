import React from 'react';
import FamousPersons from '../Components/FamousPersons';
import '../Styles/Notable.css';
const Persons = () => {
  return (
    <div className="main-container">
    <main className="main-content">
      <h2 className="section-heading">Famous Persons</h2>
      <section className="main-section">
      <FamousPersons />
      </section>
      </main>
  </div>
  )
}

export default Persons;
