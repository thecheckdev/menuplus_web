import React from 'react';
import {useQuestionState, useQuestionDispatch} from "QuestionContext";

const QestionStep = (props) => {
	const title = props.data.q;
	const answerList = props.data.a;
	const dispatch = useQuestionDispatch();
	const goNextStep = (e) => {
		if(props.step === 1) {
			console.log(e.target.getAttribute("data-index"));
			const temp = (e.target.getAttribute("data-index") === "0" ? 3 : 2);
			console.log(temp);
			props.getNextStep(temp);
			return;
		}else if(props.step === 2){
			props.getNextStep(3); 
			return;
		}
		dispatch({
			type:"ADDSCORE", 
			result: e.target.getAttribute("data-result"),
		});
		
	}
	return (
		<div>
			<h1>{title}</h1>
			{
				answerList.map((item,i) => <button type="button" key={i} data-index={i} data-result={item[1]} onClick={goNextStep} >{item[0]}</button>)
			}

		</div>
	);
};

export default QestionStep;