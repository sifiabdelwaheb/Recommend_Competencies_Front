import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";
import quiz from "./questions";
import { useDispatch, useSelector } from "react-redux";

function MainQuiz() {
  const redux = useSelector((state) => state);
  const topicname = redux.test.tests.skills;
  const questionsWithTopic = quiz.filter((topic) => topic.topic === topicname);
  return (
    <div>
      {" "}
      {questionsWithTopic.length > 0 ? (
        <Quiz data={questionsWithTopic} />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#f5f5f5",
            paddingTop: "4%",
            fontSize: "22px",
          }}
        >
          Désolé . Nous sommes actuellement en train de préparer les questions
          pour le test sur le sujet de{" "} {'   '} <span> </span> 
          <div style={{ fontWeight: "bold" ,paddingLeft:"5px"}}> {topicname}</div>.
        </div>
      )}
    </div>
  );
}

export default MainQuiz;
