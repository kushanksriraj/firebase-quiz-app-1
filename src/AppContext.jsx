import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    quizList: [
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
    ],
    userInfo: {
      name: "",
      email: "",
      attemptedQuizList: [] // { quizId: '', status: '', score: ''}
    }
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const data = useContext(AppContext);
  return data;
};
