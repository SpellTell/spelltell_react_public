import { useState, useReducer } from "react";
import Data from "./Words";
import "./App.css";
import correct from "./files/correct.mp3";
import wrong from "./files/wrong.mp3";

function App() {
  const [inputCurrent, setInputCurrent] = useState("");
  const [wordCurrent, setWordCurrent] = useState(false);
  const [response, setResponse] = useState({
    exists: false,
    word: [{ offered: "first", typed: "second" }],
  });
  const [ind, setInd] = useState(0);
  const [words, setWrods] = useState(Data);
  //const [words, dispatch] = useReducer(reducer, Data);

  function sayit(word) {
    var utterance = new SpeechSynthesisUtterance(word);
    utterance.voice = speechSynthesis.getVoices()[parseInt(50)];
    // utterance.pitch = 1;
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
    // console.log(window.speechSynthesis.getVoices());
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (ind < words.length - 1) {
      console.log(ind);
      setResponse([words[ind].word.trim(), inputCurrent.trim()]);

      if (words[ind].word.trim() == inputCurrent.trim()) {
        setWordCurrent(true);
        new Audio(correct).play();
      } else {
        new Audio(wrong).play();
        setWordCurrent(false);
      }

      console.log(words[ind].word.trim(), inputCurrent.trim());
      setInd(ind + 1);

      sayit(words[ind + 1].word);
    } else {
      setInd(0);
      setResponse([words[ind].word.trim(), inputCurrent.trim()]);
      if (words[ind].word.trim() == inputCurrent.trim()) {
        setWordCurrent(true);
        new Audio(correct).play();
      } else {
        new Audio(wrong).play();
        setWordCurrent(false);
      }

      sayit(words[0].word);
    }

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
      {wordCurrent ? (
        <h1 style={{ color: "teal" }}>true</h1>
      ) : (
        <h1 style={{ color: "pink" }}>false</h1>
      )}
      {
        <h2>
          {response.exists
            ? response.word.offered + " --- " + response.word.typed
            : ""}
        </h2>
      }
    </div>
  );
}

export default App;
