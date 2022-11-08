import { useState, useReducer, useEffect, useRef } from "react";
import Data from "../Words/Words";
import Common from "../Words/Common";
import W1000 from "../Words/W1000";
import W2000 from "../Words/W2000";
import W3000 from "../Words/W3000";
import W4000 from "../Words/W4000";
import States from "../Words/States";
import Cities from "../Words/Cities";
import WordsNames from "../Words/WordsNames";
import WordsWorksOfArt from "../Words/WordsWorksOfArt";
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
            TEMP = TEMP.filter((el) => (el.progress.length !== el.sum));

            return TEMP.sort(function (a, b) {
                return a.sum - b.sum;
            })
        case "WATER":
            return action.payload.words
        default:
            return words;
    }
}

function sayIt(word) {
    var utterance = new SpeechSynthesisUtterance(word);

    var voices = window.speechSynthesis.getVoices();
    utterance.voice = voices.filter(function(voice) { return voice.name == 'Google UK English Female'; })[0];


    console.log("Glasovi:",window.speechSynthesis.getVoices());
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
    const [words, dispatch] = useReducer(reducer, W1000);
    const [wrongList, setWrongList] = useState([]);


    useEffect(
        () => {
            //check how many wording is left in the deck; if it's zero; sayIt function will get undefined for an argument
            //we can either check if words[ind.current].word is undefined, or we can check if length of words is ZERO beforehand
            sayIt((words.length !== 0) ? words[ind.current].word : "Congratulations! You have finished all words in this deck!")
        }, [sayCounter.current] //[words[ind.current].word]
    )

    useEffect(
        () => {
            var browserData = window.localStorage.getItem('SPELLTELL_WORDS');
            var browserWrongList = window.localStorage.getItem('SPELLTELL_WRONGLIST');

            if (browserData !== null) browserData = JSON.parse(browserData);
            if (browserData !== null) dispatch({ type: "WATER", payload: { words: browserData } });
            if (browserWrongList !== null) setWrongList(JSON.parse(browserWrongList));
            console.log(JSON.parse(browserWrongList));
        }, []
    )

    useEffect(
        () => {
            window.localStorage.setItem('SPELLTELL_WORDS',JSON.stringify(words));
            window.localStorage.setItem('SPELLTELL_WRONGLIST', JSON.stringify(wrongList));
            //console.log("changed", words);
            console.log("response");
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
        //console.log(sayCounter.current);
        if (ind.current < words.length) {
            //console.log(ind.current);
            setResponse({
                exists: true,
                word: [
                    {
                        offered: words[ind.current].word.trim(),
                        typed: inputCurrent.trim(),
                    },
                ],
            });

            if (words[ind.current].word.trim() === inputCurrent.trim()) {
                setInputState(true);
                words[ind.current].progress.unshift(1);
                words[ind.current].progress.pop();
                new Audio(correct).play();
            } else {
                new Audio(wrong).play();
                words[ind.current].progress.unshift(-1);
                words[ind.current].progress.pop();
                setWrongList([...wrongList, words[ind.current]]);
                setInputState(false);

            }
            //if this is the last element of the array; rewind the Ind and start from the beggining of the array;
            if (ind.current === words.length - 1) {
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
        <>
            <div>
                <div className="ChooseDeck">

                    <h3 onClick={() => {
                        dispatch({
                            type: "WATER", payload: {
                                words: Common
                            }
                        });
                        ind.current = 0;
                        sayCounter.current++;
                    }}>Common Mistakes</h3>


                    <h3 onClick={() => {
                        dispatch({
                            type: "WATER", payload: {
                                words: W1000
                            }
                        });
                        ind.current = 0;
                        sayCounter.current++;
                    }}>Words 1000</h3>


                    <h3 onClick={() => {
                        dispatch({
                            type: "WATER", payload: {
                                words: W2000
                            }
                        });
                        ind.current = 0;
                        sayCounter.current++;
                    }}>Words 2000</h3>

                    <h3 onClick={() => {
                        dispatch({
                            type: "WATER", payload: {
                                words: W3000
                            }
                        });
                        ind.current = 0;
                        sayCounter.current++;
                    }}>Words 3000</h3>

                    <h3 onClick={() => {
                        dispatch({
                            type: "WATER", payload: {
                                words: W4000
                            }
                        });
                        ind.current = 0;
                        sayCounter.current++;
                    }}>Words 4000</h3>

                    <h3 onClick={() => {
                        dispatch({
                            type: "WATER", payload: {
                                words: WordsWorksOfArt
                            }
                        });
                        ind.current = 0;
                        sayCounter.current++;
                    }}>Works of Art</h3>

                    <h3 onClick={() => {
                        dispatch({
                            type: "WATER", payload: {
                                words: WordsNames
                            }
                        });
                        ind.current = 0;
                        sayCounter.current++;
                    }}>Top 400 Names in America</h3>


                    <h3 onClick={() => {
                        dispatch({
                            type: "WATER", payload: {
                                words: States
                            }
                        });
                        ind.current = 0;
                        sayCounter.current++;
                    }}>US States</h3>

                    <h3 onClick={() => {
                        dispatch({
                            type: "WATER", payload: {
                                words: Cities
                            }
                        });
                        ind.current = 0;
                        sayCounter.current++;
                    }}>US Cities</h3>

                    <h3 onClick={() => {
                        dispatch({
                            type: "WATER", payload: {
                                words: Data
                            }
                        });
                        ind.current = 0;
                        sayCounter.current++;
                    }}>Test Deck</h3>

                    <h3 onClick={() => {
                        dispatch({
                            type: "WATER", payload: {
                                words: wrongList
                            }
                        });
                        ind.current = 0;
                        sayCounter.current++;
                    }}>Wrong (<span style={{ fontWeight: "400", color: "purple" }}>{wrongList.length}</span>)</h3>


                </div>


                {(words.length === 0) ? <div className="flag"> <img className="img-resp" src={flag} /> <h2>Congrats! You've finished all words in this deck!!</h2></div> : (
                    <div id="spelltellBox" className="spelltellBox">

                        <div className="spelltellBox__header">
                            <h1>{words[ind.current].pronunciation}</h1>
                        </div>


                        <div className="spelltellBox__body">

                            <div className="spelltellBox__body__input">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        placeholder="type..."
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
                                <button tabIndex="2" lue="Submit" onClick={(e) => { handleSubmit(e) }} className="btn-primary">CHECK ►</button>

                            </div>
                        </div>

                    </div>)}

            </div>
            {(wrongList.length) ? (<>
                <div className="WrongWordsListHeadline"><h3>Words You need to practice:</h3></div>
                <div className="WrongWordsList">
                    {wrongList.map(elm => <span  >{elm.word}; </span>)}
                </div></>) : ""}
        </>

    );
}

export default SpellTell

