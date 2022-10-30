import { useState, useReducer, useEffect, useRef } from "react";
import Data from "../Words";
import flag from '../img/flag.png'
import correct from "../files/correct.mp3";
import wrong from "../files/wrong.mp3";



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
            var TEMP = TEMP.filter((el) => (el.progress.length !== el.sum));

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


function SpellTell() {

    const [inputCurrent, setInputCurrent] = useState("");
    const [inputState, setInputState] = useState(false); //if what user typed matches offered word
    const [response, setResponse] = useState({
        exists: false,
        word: [{ offered: "first", typed: "second" }],
    });
    const ind = useRef(0);
    const sayCounter = useRef(0); //used in useEffect to start sayIt function
    const [words, dispatch] = useReducer(reducer, Data);


    useEffect(
        () => {
            //check how many wording is left in the deck; if it's zero; sayIt function will get undefined for an argument
            //we can either check if words[ind.current].word is undefined, or we can check if length of words is ZERO beforehand
            sayIt((words.length != 0) ? words[ind.current].word : "Congratulations! You have finished all words for today!")
        }, [sayCounter.current] //[words[ind.current].word]
    )

    useEffect(
        () => {
            var browserData = window.localStorage.getItem('SPELLTELL_WORDS');
            browserData = JSON.parse(browserData);
            if (browserData !== null) dispatch({ type: "WATER", payload: { words: browserData } });
            console.log(words);
        }, []
    )

    useEffect(
        () => {
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
        sayCounter.current++;
        console.log(sayCounter.current);
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
        <div>

            <h2 onClick={() => {
                dispatch({
                    type: "WATER", payload: {
                        words: [
                            { id: 1, word: "Mona Lisa", pronunciation: "Leonardo Da Vinci's", progress: [0, 0] },
                            { id: 2, word: "Girl with a Pearl Earring", pronunciation: "Johannes Vermeer", progress: [0, 0] },
                            { id: 3, word: "The Starry Night", pronunciation: "Vincent van Gogh", progress: [0, 0] },
                            { id: 4, word: "The Last Supper", pronunciation: "Leonardo Da Vinci's", progress: [0, 0] },
                            { id: 5, word: "The Arnolfini Portrait", pronunciation: "Jan van Eyck", progress: [0, 0] },
                            { id: 7, word: "The Garden of Earthly Delights", pronunciation: "Hieronymus Bosch", progress: [0, 0] },
                            { id: 8, word: "The Young Ladies of Avignon", pronunciation: "Pablo Picasso", progress: [0, 0] },
                            { id: 9, word: "The Harvesters", pronunciation: "Pieter Bruegel the Elder", progress: [0, 0] },
                            { id: 10, word: "Composition with Red Blue and Yellow", pronunciation: "Piet Mondrian", progress: [0, 0] },
                            { id: 11, word: "Liberty Leading the People", pronunciation: "Eugène Delacroix", progress: [0, 0] },
                            { id: 12, word: "The Raft of the Medusa", pronunciation: "Théodore Géricault", progress: [0, 0] },
                            { id: 13, word: "Nighthawks", pronunciation: "Edward Hopper", progress: [0, 0] },
                            { id: 14, word: "The Birth of Venus", pronunciation: "Sandro Botticelli", progress: [0, 0] },
                            { id: 15, word: "Creation of Adam", pronunciation: "Michelangelo", progress: [0, 0] },
                        ]
                    }
                });
                ind.current=0;
                sayCounter.current++;
            }}>Works of Art:Paintings</h2>

            {(words.length == 0) ? <div className="flag"> <img className="img-resp" src={flag} /> <h2>Congrats! You've finished all words for today!</h2></div> : (
                <div id="spelltellBox" className="spelltellBox">

                    <div className="spelltellBox__header">
                        <h1>{words[ind.current].pronunciation}</h1>
                    </div>


                    <div className="spelltellBox__body">

                        <div className="spelltellBox__body__input">
                            <form onSubmit={handleSubmit}>
                                <input
                                    placeholder="zucci..."
                                    tabIndex={1}
                                    spellCheck="false"
                                    type="text"
                                    name="SpellTellInput"
                                    autoComplete="off"
                                    value={inputCurrent}
                                    onChange={(e) => setInputCurrent(e.target.value)}
                                    onKeyDown={(e) => repeatOnKeyDown(e)}
                                />
                            </form>
                        </div>
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
                        <div className="spelltellBox__body__button">

                            <button tabIndex="3" className="btn-outline-primary"
                                onClick={() => {
                                    sayIt(words[ind.current].word);
                                }}
                            >
                                Repeat
                            </button>
                            <button tabIndex="2" lue="Submit" onClick={(e)=>{handleSubmit(e)}} className="btn-primary">CHECK ►</button>

                        </div>
                    </div>

                </div>)}

        </div>
    );
}

export default SpellTell

