import React, { useReducer, createContext, useContext } from "react";


const InitialQuestion = {
	r0:{
		name: "제로",
		score: 0,
		benefit:0,
	},
	r1:{
		name: "닭발",
		score: 0,
		benefit:0,
	},
	r2:{
		name: "함박스테이크",
		score: 0,
		benefit:0,
	},
	r3:{
		name: "족발",
		score: 0,
		benefit:0,
	},
	r4:{
		name: "제육볶음",
		score: 0,
		benefit:0,
	},
	r5:{
		name: "찜닭",
		score: 0,
		benefit:0,
	},
	r6:{
		name: "뼈해장국",
		score: 0,
		benefit:0,
	},
	r7: {
		name: "돈가스",
		score: 0,
		benefit: 0,
	}
}

function QuestionReducer(state, action) {
	switch (action.type) {
	case "ADDSCORE":
		console.log(action);
		const resultArr = action.result.split(",");
		console.log(resultArr);
		resultArr.map(item =>{
			console.log(item+"-----item----");
			console.log(" = "+state[item].score);
			state[item].score++;
			console.log("===============");
		});
		console.log("state");
		// const id = action.id;
		return {
			...state
		};
	default:
		throw new Error(`Unhandled action type: ${action.type}`);
	}
}

const QuestionStateContext = createContext();
const QuestionDispatchContext = createContext();

export function QuestionProvider({ children }) {
	const [state, dispatch] = useReducer(QuestionReducer, InitialQuestion);
	// console.log("nextStep0 : "+ nextStep);
	// console.log("nextStep : "+ nextStep);
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
  console.log("--useQuestionDispatch--");
  console.log(context);
  if (!context) {
    throw new Error("Cannot find QuestionProvider");
  }
  return context;
}