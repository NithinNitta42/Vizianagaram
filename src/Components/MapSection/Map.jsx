import React from "react";
import '../MapSection/Map.css';
const QuickLinks = () => {
  return (

      <div>
      <div className="map">
        <iframe
          title="Vizianagaram Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920683.4153009615!2d82.74684441970852!3d18.500390087017784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be55ac930511f%3A0xb79a630596d3cb68!2sVizianagaram%2C%20Andhra%20Pradesh!5e1!3m2!1sen!2sin!4v1730998875506!5m2!1sen!2sin"
          width="2000"
          height="300"
          style={{ border: 0 }}
          allowFullScreen="yes"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default QuickLinks;
