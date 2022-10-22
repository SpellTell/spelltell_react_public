import { useState, useReducer, useEffect, useRef } from "react";
import Data from "./Words";
import "./App.css";
import correct from "./files/correct.mp3";
import wrong from "./files/wrong.mp3";

function App() {
  const [inputCurrent, setInputCurrent] = useState("");
  const [inputState, setInputState] = useState(false); //if what user typed matches offered word
  const [response, setResponse] = useState({
    exists: false,
    word: [{ offered: "first", typed: "second" }],
  });
  const ind = useRef(0);
  const [words, setWords] = useState(Data);
  //const [words, dispatch] = useReducer(reducer, Data);

  function sayIt(word) {
    var utterance = new SpeechSynthesisUtterance(word);
    utterance.voice = speechSynthesis.getVoices()[parseInt(50)];
    // utterance.pitch = 1;
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
    // console.log
  }

  function shuffleDeck() {
    console.log("shuffling");
    setWords(
      words.map((el) => {
        return {
          id: el.id,
          pronunciation: el.pronunciation,
          progress: el.progress,
          sum: el.progress.reduce((a, b) => a + b, 0),
        };
      })
    );
    setWords(
      words.sort(function (a, b) {
        return a.sum - b.sum;
      })
    );
    console.log(words);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (ind.current < words.length) {
      console.log(ind.current);
      setResponse({
        exists: true,
        word: [
          {
            offered: words[ind.current].word.trim(),
            typed: inputCurrent.trim(),
          },
        ],
      });

      if (words[ind.current].word.trim() == inputCurrent.trim()) {
        setInputState(true);
        words[ind.current].progress.unshift(1);
        words[ind.current].progress.pop();
        new Audio(correct).play();
      } else {
        new Audio(wrong).play();
        words[ind.current].progress.unshift(-1);
        words[ind.current].progress.pop();
        setInputState(false);
      }
      //if this is the last element of the array; rewind the Ind and start from the beggining of the array;
      if (ind.current == words.length - 1) {
        shuffleDeck();
        ind.current = 0;
      } else {
        ind.current = ind.current + 1;
      }
    }

    //console.log(ind.current);
    sayIt(words[ind.current].word);
    setInputCurrent("");
  }

  function repeatOnKeyDown(e) {
    //when curor is in Input form and CTRL is pressed down, pronounce word
    if (e.key === "Control") {
      sayIt(words[ind.current].word);
    }
  }
  return (
    <div className="App">
      <h1>{words[ind.current].word}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="SpellTellInput"
          autoComplete="off"
          value={inputCurrent}
          onChange={(e) => setInputCurrent(e.target.value)}
          onKeyDown={(e) => repeatOnKeyDown(e)}
        />
      </form>

      {
        <h2>
          {response.exists &&
            (inputState ? (
              <>
                <span style={{ color: "teal" }}>
                  {response.word[0].offered}
                </span>{" "}
              </>
            ) : (
              <>
                <span
                  style={{ color: "#a31576", textDecoration: "line-through" }}
                >
                  {response.word[0].typed}
                </span>
                {" → "}
                <span style={{ color: "teal" }}>
                  {response.word[0].offered}
                </span>
              </>
            ))}
        </h2>
      }
      <button
        onClick={() => {
          sayIt(words[ind.current].word);
        }}
      >
        Repeat
      </button>
    </div>
  );
}

export default App;
