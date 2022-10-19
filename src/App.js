import { useState, useReducer } from 'react';
import './App.css';



function App() {
  const [wordCurent, setWordCurrent] = useState();


  function handleSubmit(e) {
    e.preventDefault();

    setWordCurrent("");

  }
  return (
    <div className='App'>
        <form onSubmit={handleSubmit}>
          <input type="text" name="SpellTellInput"  autoComplete="off"
          value={wordCurent} onChange={(e)=>(setWordCurrent(e.target.value))} />
        </form>
        <h2>{wordCurent}</h2>
    </div>
  );
}

export default App;
