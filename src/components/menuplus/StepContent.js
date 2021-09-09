import React from 'react';
import {useQuestionState, useQuestionDispatch} from "components/menuplus/QuestionContext";

const QestionStep = (props) => {
	const title = props.data.q;
	const answerList = props.data.a;
	const list = useQuestionState();
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
		const temp = e.target.getAttribute("data-result")
		const arr = temp.split(",");
		const resultList = list.map((item,i) => {
			arr.map((index) => {
				if (i == index) {
					if (props.step == 5 && index == 0) {
						item.score = 100;
						return;
					}
					item.score += 1;
					if(props.step == 6) item.step6++;
					item.benefit += props.step;
				}
				
			})
			return item;
		});
		dispatch({
			type:"ADDSCORE", 
			resultList: resultList,
		});
		props.getNextStep(props.step+1); 
	}
	return (
		<article className="step">
			<h1>{title}</h1>
			{
				answerList.map((item,i) => <button type="button" key={i} data-index={i} data-result={item[1]} onClick={goNextStep} >{item[0] +"-"+ item[1]}</button>)
			}

		</article>
	);
};

export default QestionStep;