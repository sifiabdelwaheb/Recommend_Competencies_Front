import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";
import quiz from "./questions";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
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
        <div>
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
            pour le test {"   "} <span> </span>
            <div style={{ fontWeight: "bold", paddingLeft: "5px" }}>
              {" "}
              {topicname}
            </div>
          </div>
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
            . Nous vous recommandons de vous suivre la formation en ligne afin
            d'améliorer vos connaissances et vos compétences Clickez sur le
            button :
          </div>
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
        </div>
      )}
    </div>
  );
}

export default MainQuiz;
