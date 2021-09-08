import React from 'react';
import {useQuestionState, useQuestionDispatch} from "QuestionContext";

const QestionStep = (props) => {
	const title = props.data.q;
	const answerList = props.data.a;
	const dispatch = useQuestionDispatch();
	const goNextStep = (e) => {
		if(props.step === 1) {
			const temp = (e.target.getAttribute("data-index") === "0" ? 3 : 2);
			props.getNextStep(temp);
			return;
		}else if(props.step === 2){
			props.getNextStep(3); 
			return;
		}
		const temp = e.target.getAttribute("data-result");
		const resultArr = temp.split(",");
		resultArr.map(item => {
			dispatch({
				type:"ADDSCORE", 
				id: item,
			});
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