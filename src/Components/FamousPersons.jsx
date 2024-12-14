import React from 'react';
import narayana from "../assets/Adibhatla Narayana Dasu.jpg";
import dasari from "../assets/Dasari Yatiraja Sampath Kumar.jpg";
import Dwaram from "../assets/Dwaram Venkataswamy Naidu.jpg";
import gurajada from "../assets/gurajada.jpg";
import kodi from "../assets/Kodi Rammurthy Naidu.jpeg";
import rayudu from "../assets/rayudu.jpg";
import saluri from "../assets/Saluri Rajeswara Rao.jpg";
import susheela from "../assets/susheela.jpg";
import Bahadur from "../assets/Veerabhadra Raju Bahadur.jpg";
import raju from "../assets/Vijaya Ananda Gajapathi Raju.jpg";
import '../Styles/persons.css';

const FamousPersons = () => {
  const samplePersons = [
    { id: 1, name: "SRI GURAJADA APPARAO", dob: "21-08-1862", birthplace: "RajamRayavaram", achievements: "Telugu poet, playwright, and social reformer", photo:gurajada, wikiLink: "https://en.wikipedia.org/wiki/Gurajada_Apparao" },
    { id: 2, name: "SRI DWARAM VENKATASWAMI NAIDU", dob: "08-11-1893", birthplace: "Bangalore", achievements: "He was conferred with the Padma Shri", photo:Dwaram , wikiLink: "https://en.wikipedia.org/wiki/Dwaram_Venkataswamy_Naidu" },
    { id: 3, name: "Kodi Rama Murthy Naidu", dob: "03-11-1883", birthplace: "Veeraghattam", achievements: "Indian Hercules and  Kaliyuga Bhima", photo: kodi, wikiLink: "https://en.wikipedia.org/wiki/Kodi_Rammurthy_Naidu" },
    { id: 4, name: "Dr.Dasari Yatiraja Sampath Kumar", dob: "20-11-1927", birthplace: "Vizianagaram", achievements: "Indian classical and folk dancer and choreographer & Andhra Jalari(Fisherman of Andhra Pradesh)", photo: dasari, wikiLink: "https://en.wikipedia.org/wiki/Sampath_Kumar_D.Y." },
    { id: 5, name: "SRI ADHIBATLA NARAYANA DAS", dob: "31-08-1864", birthplace: "Ajjada", achievements:"Harikatha Pitamaha (Father of Harikatha) in Telugu literaturet", photo:narayana , wikiLink: "https://en.wikipedia.org/wiki/Adibhatla_Narayana_Dasu" },
    { id: 6, name: "SMT. P.SUSHEELA", dob: "13-11-1935", birthplace: "Vizianagaram", achievements:"She got Padma Bhushan Award in 2008 by the Govt. of India", photo:susheela , wikiLink: "https://en.wikipedia.org/wiki/P._Susheela" },
    { id: 7, name: "SRI VIJAY ANAND GAJAPATHI RAJU", dob: "28-12-1905", birthplace: "Vizianagaram", achievements:"The Maharajkumar of Vizianagaram & a former captain of the Indian Cricket team", photo:raju , wikiLink: "https://en.wikipedia.org/wiki/Maharajkumar_of_Vizianagram" },
    { id: 8, name: "Tandra Paparayudu", dob: "18th-century", birthplace: "Bobbili", achievements:"Army General of Bobbili", photo:rayudu , wikiLink: "https://en.wikipedia.org/wiki/Tandra_Paparayudu" },
    { id: 9, name: "Saluri Rajeswara Rao", dob: "11-10-1922", birthplace: "Sivaramapuram", achievements:"legendary Indian music composer, singer, and instrumentalist in Telugu and Tamil cinema", photo:saluri , wikiLink: "https://en.wikipedia.org/wiki/S._Rajeswara_Rao" },
    { id: 10, name: "Veerabhadra Raju Bahadur", dob: "06-09-1877", birthplace: "Kurupam", achievements:"Indian aristocrat, politician, and hereditary zamindar of Kurupam from 1891", photo:Bahadur , wikiLink: "https://en.wikipedia.org/wiki/Veerabhadra_Raju_Bahadur" },
  ];

  return (
    <div className="grid"> 
      {samplePersons.map((person) => (
        <div key={person.id} className="card">
          <img src={person.photo} alt={person.name} className="person-photo" />
          <h3 className="person-name">{person.name}</h3>
          <p className="mb-1">DOB: {person.dob}</p>
          <p className="mb-1">Birthplace: {person.birthplace}</p>
          <p className="mb-1">Achievements: {person.achievements}</p>
          <a href={person.wikiLink} target="_blank" rel="noopener noreferrer" className="know-more">
            Know More
          </a>
        </div>
      ))}
    </div>
  );
};

export default FamousPersons;
