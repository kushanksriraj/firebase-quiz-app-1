import "./styles.css";
import { QuizCard } from "./components";

const quizList = [
  {
    id: "1",
    title: "Demo Quiz 1",
    totalScore: "40",
    status: 0 // 0 -> not completed, 1 completed
  },
  {
    id: "2",
    title: "Demo Quiz 2",
    totalScore: "50",
    status: 0
  },
  {
    id: "3",
    title: "Demo Quiz 3",
    totalScore: "60",
    status: 0
  }
];

export default function App() {
  return (
    <div className="App">
      <h3>Quizzes</h3>

      <div className="quiz-wrapper">
        {quizList.map((quiz) => (
          <QuizCard key={quiz.id} quizInfo={quiz} />
        ))}
      </div>
    </div>
  );
}
