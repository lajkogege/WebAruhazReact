import { useContext, useState } from "react";
import Kosar from "./components/Kosar";
import { ApiContext } from "./context/ApiContext";
import Vasaroter from "./components/Vasaroter";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const { termekLista } = useContext(ApiContext);
  const [kosaram, setKosaram] = useState([]);
  const [termekDb, setTermekDb] = useState(0);
  const [termekOsszAr, setTermekOsszAr] = useState(0);

  function megjelenit(adat, db) {
    setKosaram([...kosaram, adat]); // Új terméket adunk hozzá a kosárhoz
    setTermekOsszAr(termekOsszAr + adat.price); // Frissítjük az összárat
    setTermekDb(termekDb + 1); // Frissítjük a db-t
  }

  return (
    <div className="container-fluid">
      <header className="App-header">
        <h1>FakeStore webáruház</h1>
      </header>
      <main className="row">
        <article className="col-lg-8">
          <h4>Vásárlótér</h4>
          <Vasaroter 
            lista={termekLista} 
            megjelenit={megjelenit}
          />
        </article>
        <aside className="col-lg-4">
          <h4>Kosár</h4>
          <p>A kosárban {termekDb} db termék van.</p>
          <p>A kosárban lévő termékek összértéke: {termekOsszAr}</p>
          <table>
            <thead>
              <tr>
                <th>Cím</th>
                <th>Leírás</th>
                <th>Ár</th>
              </tr>
            </thead>
            <tbody>
              {kosaram.map((elem, index) => (
                <Kosar kosaram={elem} key={index} />
              ))}
            </tbody>
          </table>
        </aside>
      </main>
    </div>
  );
}

export default App;
