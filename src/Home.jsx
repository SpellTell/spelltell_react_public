import { useState, useReducer, useEffect, useRef } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Data from "./Words";
import "./Style.css";
import correct from "./files/correct.mp3";
import wrong from "./files/wrong.mp3";
import SharedLayout from "./SharedLayout";
import Word from "./Word";
import About from "./About";




function reducer(words, action) {
    switch (action.type) {
      case "SHUFFLE":
        console.log("shuffling");
        var TEMP =
          words.map((el) => {
            return {
              id: el.id,
              pronunciation: el.pronunciation,
              word: el.word,
              progress: el.progress,
              sum: el.progress.reduce((a, b) => a + b, 0),
            };
          }
        )
        //remove word for which all N tries have been succesfull
        var TEMP = TEMP.filter((el)=>(el.progress.length !== el.sum));

        return TEMP.sort(function (a, b) {
            return a.sum - b.sum;
          })
      case "WATER":
          return action.payload.words
    }
  }

  function sayIt(word) {
    var utterance = new SpeechSynthesisUtterance(word);
    utterance.voice = speechSynthesis.getVoices()[parseInt(50)];
    // utterance.pitch = 1;
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
    // console.log
  }


function Home() {

    const [inputCurrent, setInputCurrent] = useState("");
    const [inputState, setInputState] = useState(false); //if what user typed matches offered word
    const [response, setResponse] = useState({
      exists: false,
      word: [{ offered: "first", typed: "second" }],
    });
    const ind = useRef(0);
    const [words, dispatch] = useReducer(reducer, Data);

    useEffect(
      ()=>{
        sayIt(words[ind.current].word);
      }, [ind.current]
    )

    useEffect(
      ()=>{
        var browserData = window.localStorage.getItem('SPELLTELL_WORDS');
        browserData= JSON.parse(browserData);
         if(browserData !== null) dispatch({ type: "WATER", payload:{words:browserData}});
         console.log(words);
      }, []
    )

    useEffect(
      ()=>{
        window.localStorage.setItem('SPELLTELL_WORDS', (JSON.stringify(words)))
        console.log("changed", words);
      }, [response]
    )

    function repeatOnKeyDown(e) {
      //when cursor is in Input form and CTRL is pressed down, pronounce the  word
      if (e.key === "Control") {
        sayIt(words[ind.current].word);
      }
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
          ind.current = 0;
          //if this is the last word in current setup, shuffle deck
          dispatch({ type: "SHUFFLE" });
        } else {
          ind.current = ind.current + 1;
        }
      }
      //console.log(ind.current);
      setInputCurrent("");
    }


    return (
  <div className="main">
       {(words.length==0)?<h2>Congrats! You've finished all words for today!</h2>:(
        <div className="SpellTell">
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

        </div>)}

      </div>
    );
}

export default Home

