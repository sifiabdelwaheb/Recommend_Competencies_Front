const quiz = [
  {
    title: "react",
    questions: {
      quizTitle: "React Quiz Component Demo",
      nrOfQuestions: "3",
      questions: [
        {
          question: "ReactJS is developed by _____?",
          questionType: "text",
          answerSelectionType: "single",
          answers: ["Google Engineers", "Facebook Engineers"],
          correctAnswer: "2",
          messageForCorrectAnswer: "Correct answer. Good job.",
          messageForIncorrectAnswer: "Incorrect answer. Please try again.",
          explanation:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          point: "20",
        },
        {
          question: "ReactJS is an MVC based framework?",
          questionType: "text",
          answerSelectionType: "single",
          answers: ["True", "False"],
          correctAnswer: "2",
          messageForCorrectAnswer: "Correct answer. Good job.",
          messageForIncorrectAnswer: "Incorrect answer. Please try again.",
          explanation:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          point: "10",
        },
        {
          question: "Which of the following concepts is/are key to ReactJS?",
          questionType: "text",
          answerSelectionType: "single",
          answers: [
            "Component-oriented design",
            "Event delegation model",
            "Both of the above",
          ],
          correctAnswer: "3",
          messageForCorrectAnswer: "Correct answer. Good job.",
          messageForIncorrectAnswer: "Incorrect answer. Please try again.",
          explanation:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          point: "30",
        },
      ],
    },
  },
];

export default quiz;
