import React, { useReducer, createContext, useContext } from "react";


const InitialQuestion = [
	{
		name: "제로",
		score: 0,
		benefit: 0,
		step6: 0,
	},
	{
		name: "닭발",
		score: 0,
		benefit: 0,
		step6: 0,
	},
	{
		name: "파스타",
		score: 0,
		benefit: 0,
		step6: 0,
	},
	{
		name: "족발",
		score: 0,
		benefit: 0,
		step6: 0,
	},
	{
		name: "제육볶음",
		score: 0,
		benefit: 0,
		step6: 0,
	},
	{
		name: "찜닭",
		score: 0,
		benefit: 0,
		step6: 0,
	},
	{
		name: "순대국",
		score: 0,
		benefit: 0,
		step6: 0,
	},
	{
		name: "바비큐폭립",
		score: 0,
		benefit: 0,
		step6: 0,
	}
]

function QuestionReducer(state, action) {
	switch (action.type) {
	case "ADDSCORE":
	return action.resultList;
	default:
		throw new Error(`Unhandled action type: ${action.type}`);
	}
}

const QuestionStateContext = createContext();
const QuestionDispatchContext = createContext();

export function QuestionProvider({ children }) {
	const [state, dispatch] = useReducer(QuestionReducer, InitialQuestion);
	return (
	<QuestionStateContext.Provider value={state}>
		<QuestionDispatchContext.Provider value={dispatch}>
			{children}
		</QuestionDispatchContext.Provider>
	</QuestionStateContext.Provider>
	);
}

export function useQuestionState() {
  const context = useContext(QuestionStateContext);
  if (!context) {
    throw new Error("Cannot find QuestionProvider");
  }
  return context;
}

export function useQuestionDispatch() {
  const context = useContext(QuestionDispatchContext);
  if (!context) {
    throw new Error("Cannot find QuestionProvider");
  }
  return context;
}