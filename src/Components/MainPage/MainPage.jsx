import React, { useState, useEffect } from "react";
import narrativeData from "../../narrativeUpdated.json";
import "./MainPage.scss";

import image from "../../assets/images/moose.svg"

export default function MainPage({setErrorModal,openModal}) {
  const [currentQuesIndex, setCurrentQuesIndex] = useState(0);
  const [currentQues, setCurrentQues] = useState("");
  const [ans, setAns] = useState("");
  const [guess, setGuess] = useState("");
  const [translation, setTranslation] = useState("");
  const [image, setImage] = useState("");
 

  // const [test, setTest] = useState(0);

  useEffect(() => {
    setCurrentQues(narrativeData.quiz.content[currentQuesIndex].question);
    setAns(narrativeData.quiz.content[currentQuesIndex].missing_word);
    setTranslation(narrativeData.quiz.content[currentQuesIndex].translation)
    setImage(narrativeData.quiz.content[currentQuesIndex].img)
    
  }, [currentQuesIndex]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (guess.toLowerCase() === ans.toLowerCase()) {
      setCurrentQuesIndex((prev) => prev + 1);
      setGuess("");
      setErrorModal(false)
    } else {
      setErrorModal(true);
    }
  };
 {/* <h1>Index: {currentQuesIndex}</h1> */}
  return (
    
      <div className="main" style={{opacity: openModal ? ".5" :"1"}}>
       
        <div className="main__section">
          <img className="main__image main__image--outlier" src={image}></img>
          <div className="main__narrative">
            <div className="main__question main__question--large">
              {currentQues}
            </div>
          
            <div className="main__translation main__translation--large">
              {translation}
            </div>
            

          </div>
          

          <form className="main__form" action="" onSubmit={formSubmitHandler}>
            <p className="main__form-title main__form-title--outlier">Fill in the blanks</p>
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
            />
            <button className="main__submit-button main__submit-button--outlier" type="submit">Submit</button>
          </form>
        </div>
      </div>
    
  );
}
