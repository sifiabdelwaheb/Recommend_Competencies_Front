import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import quiz from "./questions";
import "./quiz.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Quiz from "./Quiz";
const Test = () => {
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
      <Quiz data={quiz} />
    </div>
  );
};

export default Quiz;
