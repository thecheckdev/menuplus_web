import React from 'react';
// import {useQuestionState, useQuestionDispatch} from "QuestionContext";

const QestionStep = (props) => {
	const title = props.data.q;
	const answerList = props.data.a;
	// const dispatch = useQuestionDispatch();
	const goNextStep = (i) => {
		console.log("pgoNextSteprops");
		console.log(props.data);
		if(props.step === 1){
			const temp = (i === 0 ? 3 : 2);
			props.getNextStep(temp);
		}
	// 	dispatch({
	// 		type:"NEXTSTEP", 
	// 		id:"r4",
	// 	});
	}
	return (
		<div>
			<h1>{title}</h1>
			{
				answerList.map((item,i) => <button type="button" key={i} onClick={goNextStep()} >{item[0]}</button>)
			}

		</div>
	);
};

export default QestionStep;