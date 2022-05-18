import "./quiz-card.css";

export const QuizCard = ({ quizInfo }) => {
  return (
    <div className="quiz-card-container">
      <strong>{quizInfo.title}</strong>
      <p>Total score: {quizInfo.totalScore}</p>
      <div className="grow" />
      <button>Start</button>
    </div>
  );
};
