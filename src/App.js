import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>📖 Glossary Vault 📚</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="hello"/>
      </main>
      <footer className="App-footer">
        <small>Coded by Denise Tobias and is <a href="https://github.com/dtobias05/dictionary-app.git" target="_blank" rel="noreferrer" >open-sourced on Github</a> and <a href="https://statuesque-cannoli-5f095b.netlify.app/" target="_blank" rel="noreferrer" >hosted on Netlify</a></small>
      </footer>
      </div>
    </div>
  );
}

export default App;
