import { useContext } from "react";
import Kosar from "./components/Kosar";
import { ApiContext } from "./context/ApiContext";
import Vasaroter from "./components/Vasaroter";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { KosarContext } from "./context/KosarContext";

function App() {
  const { termekLista } = useContext(ApiContext);
  const {kosarLista}=useContext(KosarContext);

  return (
    <div className="container-fluid">
      <header className="App-header">
        <h1>FakeStore webáruház</h1>
      </header>
      <main className="row">
      <article className="col-lg-8">
          <h4>Vásárlótér</h4>
          <Vasaroter lista={termekLista} /> 
        </article>
        <aside className="col-lg-4">
          <h4>Kosár</h4>
          <Kosar kosarLista={kosarLista} />
        </aside>
      
      </main>
    </div>
  );
}

export default App;
