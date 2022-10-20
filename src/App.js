import { useState, useReducer } from "react";
import Data from "./Words"
import "./App.css";

function reducer(words, action) {
  switch (action.type) {
    case "CHECK_INPUT":
      break;

    default:
      return words;
  }
}

function App() {
  const [inputCurrent, setInputCurrent] = useState();
  const [wordCurrent, setWordCurrent] = useState(false);
  const [ind, setInd] = useState(0);
  const [words, dispatch] = useReducer(reducer, Data);

  function handleSubmit(e) {
    e.preventDefault();

    if (ind < words.length-1) {
      console.log(ind);
      words[ind].word.trim()==inputCurrent.trim() ?setWordCurrent(true):setWordCurrent(false);

      console.log(words[ind].word.trim(),inputCurrent.trim());
      setInd(ind + 1);
      var utterance = new SpeechSynthesisUtterance(words[ind + 1].word);
      utterance.voice = speechSynthesis.getVoices()[parseInt(50)];
      // utterance.pitch = 1;
      utterance.rate = 0.8;
      // console.log(window.speechSynthesis.getVoices());
    } else {
      setInd(0);
      words[ind].word.trim()==inputCurrent.trim() ?setWordCurrent(true):setWordCurrent(false);
      utterance = new SpeechSynthesisUtterance(words[0].word);
      utterance.voice = speechSynthesis.getVoices()[parseInt(50)];
    }
    speechSynthesis.speak(utterance);

    setInputCurrent("");
  }
  return (
    <div className="App">
      <h1>{words[ind].word}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="SpellTellInput"
          autoComplete="off"
          value={inputCurrent}
          onChange={(e) => setInputCurrent(e.target.value)}
        />
      </form>
      {wordCurrent?<h1 style={{color:"teal"}}>true</h1>:<h1 style={{color:"pink"}}>false</h1>}
    </div>
  );
}

export default App;
