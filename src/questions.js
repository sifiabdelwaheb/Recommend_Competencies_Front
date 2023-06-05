const quiz = [
  {
    topic: " python",

    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question:
          "Which function is used to serialize an object into a JSON string in Javascript?",
        choices: ["stringify()", "parse()", "convert()", "None of the above"],
        type: "test",
        correctAnswer: "stringify()",
      },
      {
        question:
          "Which of the following keywords is used to define a variable in Javascript?",
        choices: ["var", "let", "var and let", "None of the above"],
        type: "abs",
        correctAnswer: "var and let",
      },
      {
        question:
          "Which of the following methods can be used to display data in some form using Javascript?",
        choices: [
          "document.write()",
          "console.log()",
          "window.alert",
          "All of the above",
        ],
        type: "mma",
        correctAnswer: "All of the above",
      },
      {
        question: "How can a datatype be declared to be a constant type?",
        choices: ["const", "var", "let", "constant"],
        type: "yexy",
        correctAnswer: "const",
      },
    ],
  },
];

export default quiz;
