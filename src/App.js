import "./styles.css";
import { QuizCard } from "./components";
import { useAppContext } from "./AppContext";

export default function App() {
  const {
    state: { quizList }
  } = useAppContext();

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
