import { useState, useReducer } from "react";
import Data from "./Words";
import "./App.css";
import correct from "./files/correct.mp3";
import wrong from "./files/wrong.mp3";

function App() {
  const [inputCurrent, setInputCurrent] = useState("");
  const [inputState, setInputState] = useState(false);
  const [response, setResponse] = useState({
    exists: false,
    word: [{ offered: "first", typed: "second" }],
  });
  const [ind, setInd] = useState(0);
  const [words, setWrods] = useState(Data);
  //const [words, dispatch] = useReducer(reducer, Data);

  function sayIt(word) {
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
      setResponse({
        exists: true,
        word: [{ offered: words[ind].word.trim(), typed: inputCurrent.trim() }],
      });

      if (words[ind].word.trim() == inputCurrent.trim()) {
        setInputState(true);
        new Audio(correct).play();
      } else {
        new Audio(wrong).play();
        setInputState(false);
      }
      //console.log(words[ind].word.trim(), inputCurrent.trim());
      setInd(ind + 1);
      sayIt(words[ind + 1].word);
    } else {
      setInd(0);
      setResponse({
        exists: true,
        word: [{ offered: words[ind].word.trim(), typed: inputCurrent.trim() }],
      });

      if (words[ind].word.trim() == inputCurrent.trim()) {
        setInputState(true);
        new Audio(correct).play();
      } else {
        new Audio(wrong).play();
        setInputState(false);
      }

      sayIt(words[0].word);
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

      {
        <h2>
          {response.exists &&
            (inputState ? (
              <>
                <span style={{ color: "teal" }}>{response.word[0].offered}</span>{" "}

              </>
            ) : (
              <>
                <span
                  style={{ color: "#a31576", textDecoration: "line-through" }}
                >
                  {response.word[0].typed}
                </span>{" → "}
                <span style={{ color: "teal" }}>{response.word[0].offered}</span>
              </>
            ))}
        </h2>
      }
      <button onClick={()=>{sayIt(words[ind].word)}}>Repeat</button>
    </div>
  );
}

export default App;
