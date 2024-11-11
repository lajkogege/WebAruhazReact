import React from 'react';
import Termek from './Termek';

function Vasaroter(props) {
  function megjelenit(adat, db) {
    console.log("A gyerekem üzeni:", adat, db, "db termék van a kosárban");
    props.megjelenit(adat, db); // Hívjuk a szülő komponenst
  }

  return (
    <div className="row VasaroTer">
      {props.lista.map((termek, index) => (
        <Termek
          key={index}
          termekAdat={termek}
          megjelenit={megjelenit}
        />
      ))}
    </div>
  );
}

export default Vasaroter;
