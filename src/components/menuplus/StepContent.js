import React, {useState} from 'react';
import {useQuestionState, useQuestionDispatch} from "components/menuplus/QuestionContext";

const QestionStep = (props) => {
	const [loading, setLoading] = useState(false);
	const title = props.data.q;
	const answerList = props.data.a;
	const list = useQuestionState();
	const dispatch = useQuestionDispatch();
	const goNextStep = (e) => {
		if(props.step === 1) {
			props.getAnswer(e.target.getAttribute("data-index") === "0" ? -2 : -1);
			props.getNextStep(e.target.getAttribute("data-index") === "0" ? 3 : 2);
			return;
		}else if(props.step === 2){
			props.getAnswer(-1);
			props.getNextStep(3); 
			return;
		}else if(props.step === 8) {
			setLoading(true);
			setTimeout(function() {
				props.getNextStep(props.step+1); 
			  }, 2500);
			return;
		}
		const temp = e.target.getAttribute("data-result");
		props.getAnswer(temp);
		const arr = temp.split(",");
		const resultList = list.map((item,i) => {
			arr.map((index) => {
				index = index *1 ;
				if (i === index) {
					if (props.step === 5 && index === 0) {
						item.score = 100;
						return;
					}
					item.score++;
					if(props.step === 6) item.step6++;
					item.benefit += props.step;
				}
				
			})
			return item;
		});
		dispatch({
			type:"SETSCORE", 
			resultList: resultList,
		});
		props.getNextStep(props.step+1); 
	}
	const getPrevStep = (e) =>{
		const step = props.step-1;
		const temp = props.answer[step-1];
		if(step > 2){
			const arr = temp.split(",");
			const resultList = list.map((item, i) => {
				arr.map((index) => {
					index = index * 1;
					if (i === index) {
						if(step === 5 && index === 0){
							item.score = 0;
							return;
						}
						item.score--;
						item.benefit -= step;
						if(step === 6) item.step6--;
					}
				})	
				return item;
			});
			dispatch({
				type:"SETSCORE", 
				resultList: resultList,
			});
		}
		props.getPrevStep(step); 
	}
	return (
		<section className={"step "+ (props.step === 8 ? "com":"")}>
			<div className={"loading "+(!loading ? "hide" : "")}><span>사장님을 위한 맞춤메뉴를 찾고 있어요</span></div>
			<div className="top">
				<h1 className="blind">메뉴플러스 테스트</h1>
				<div className="info">
					<button className="btn_home" onClick={getPrevStep}> &lt; 뒤로</button>
					<span>{props.step === 8 ? 7 : props.step} / 7</span>
				</div>
				<div className="bx_bar">
					<span className={"bar fill"+props.step}></span>
				</div>
			</div>
			<div className="cont">
				{}
				<h2 dangerouslySetInnerHTML ={{ __html: title}}></h2>
				{
					props.step < 8 && answerList.map((item,i) => <button type="button" className="btn bg_white" key={i} data-index={i} data-result={item[1]} onClick={goNextStep} dangerouslySetInnerHTML ={{ __html: item[0]}}></button>)
				}
			</div>
			{
				props.step === 8 && <button type="button" onClick={goNextStep} className="btn">결과보기</button>
			}
		</section>
	);
};

export default QestionStep;