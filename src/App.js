import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>📖 Glossary Vault</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="hello"/>
      </main>
      <footer className="App-footer">
        <small>Coded by Denise Tobias</small>
      </footer>
      </div>
    </div>
  );
}

export default App;
