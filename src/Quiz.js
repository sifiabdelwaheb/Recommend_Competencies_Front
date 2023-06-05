import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./quiz.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const Quiz = ({ data }) => {
  const redux = useSelector((state) => state);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [activatedQuestions, setActivatedQuestions] = useState([]);
  const [allresult, setallresult] = useState([]);

  //const topicname = "react";

  //const questionsWithTopic = data.filter((topic) => topic.topic === topicname);

  const { questions } = data[0];

  console.log("questions", questions[activeQuestion]);

  const { question, choices, correctAnswer } = questions[activeQuestion];
  let score = 0;
  let correctAnswers = 0;
  let wrongAnswers = 0;

  activatedQuestions.forEach((choice) => {
    if (choice.result) {
      score += 10;
      correctAnswers++;
    } else {
      wrongAnswers++;
    }
  });
  console.log("scoere", score);

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    const ActivatedQuestions = (prev) => {
      const updatedActivatedQuestions = prev ? [...prev] : [];
      const activatedObject = questions[activeQuestion];
      activatedObject["result"] = selectedAnswer;
      //updatedActivatedQuestions.push(activatedObject);
      const filteredQuestions = updatedActivatedQuestions.filter(
        (question) => question.type !== activatedObject.type
      );
      filteredQuestions.push(activatedObject);

      console.log("filteredQuestions*****", filteredQuestions);
      return filteredQuestions;
    };

    setActivatedQuestions(ActivatedQuestions(activatedQuestions));

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onClickPreview = () => {
    setActiveQuestion((prev) => prev - 1);
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);
  console.log("setActivatedQuestions", activatedQuestions);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#f5f5f5",
        paddingBottom: "20%",
      }}
    >
      <div className="quiz-container">
        {!showResult ? (
          <div>
            <div>
              <span className="active-question-no">
                {addLeadingZero(activeQuestion + 1)}
              </span>
              <span className="total-question">
                /{addLeadingZero(questions.length)}
              </span>
            </div>
            <h2>{question}</h2>
            <ul>
              {choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={
                    selectedAnswerIndex === index ? "selected-answer" : null
                  }
                >
                  {answer}
                </li>
              ))}
            </ul>
            <div
              className="flex"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {" "}
              {activeQuestion > 0 ? (
                <div className="flex-left">
                  <button onClick={onClickPreview}>Preview</button>
                </div>
              ) : (
                <div></div>
              )}
              <div className="flex-right">
                <button
                  onClick={onClickNext}
                  disabled={selectedAnswerIndex === null}
                >
                  {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="result" style={{ minWidth: "600px" }}>
            <h3>Result</h3>
            <p>
              Total Question: <span>{questions.length}</span>
            </p>
            <p>
              Total Score:<span> {score}</span>
            </p>
            <p>
              Correct Answers:<span> {correctAnswers}</span>
            </p>
            <p>
              Wrong Answers:<span> {wrongAnswers}</span>
            </p>

            {correctAnswers >= 2 ? (
              <div>
                <div style={{ marginTop: "5%" }}>
                  Bon travail ! Vous avez réussi le test en ligne. Revenez à la
                  page de formation et explorez les autres tests disponibles
                  <div style={{ marginTop: "5%" }}>
                    <Link to={"/"}>
                      <Button
                        style={{
                          borderRadius: "22px",
                          maxHeight: "60px",
                          marginTop: "-10px",
                        }}
                        variant="contained"
                      >
                        Retour
                        <ArrowBackIosIcon
                          sx={{
                            color: "#fff",
                            fontSize: 25,
                            marginLeft: "20px",
                          }}
                        />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ marginTop: "5%" }}>
                Nous sommes désolés de vous informer que vous n'avez pas obtenu
                la note de passage au test en ligne. Nous vous recommandons de
                vous suivre la formation en ligne afin d'améliorer vos
                connaissances et vos compétences Clickez sur le button :
                <Link to={"/"}>
                  <Button
                    style={{
                      borderRadius: "22px",
                      maxHeight: "50px",
                    }}
                    variant="contained"
                  >
                    formation
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
