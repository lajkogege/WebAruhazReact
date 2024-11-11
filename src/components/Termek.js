import React, { useState } from 'react';
import { KosarContext } from '../context/KosarContext';

function Termek(props) {
  const [db, setDb] = useState(0); // Állapotot használunk a db kezelésére

  function kosarbaTesz() {
    setDb(db + 1);  // Az db értékét növeljük
    console.log(db + " könyv van a kosárban");
    props.megjelenit(props.termekAdat, db + 1);  // A kosárba tétel frissítése
  }

  return (
    <div className="col-md-5"> {/* A Bootstrap rács használata */}
      <div className="card" style={{ width: "400px" }}>
        <img className="card-img-top img-fluid " src={props.termekAdat.image} alt={props.termekAdat.title} />
        <div className="card-body">
          <h4 className="card-title">{props.termekAdat.title}</h4>
          <p className="card-text">{props.termekAdat.description}</p>
          <p className="card-text"><strong>Price: ${props.termekAdat.price}</strong></p> {/* Ár hozzáadása */}
          <a href="#" className="btn btn-primary" onClick={()=>kosarbaTesz(db)}>Kosárba</a>
        </div>
      </div>
    </div>
  );
}

export default Termek;
