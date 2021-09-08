import React, {useState} from "react";
import Start from "components/Start";
import QuestionStep from "components/StepContent";
import {useQuestionState, useQuestionDispatch} from "QuestionContext";

const initialQuestion ={
	step1:{
		q : "요식업 사업장을 운영 중인가요?",
		a : [
				["Y", ""],
				["N", ""],
		],
	},
	step2:{
		q : "어떤 업종을 운영 중인가요?",
		a : [
			["숙박", ""],
			["당구장/PC/노래방", ""],
			["헬스/피트니스", ""],
			["편의점/마트/소매", ""],
			["헤어/네일/미용", ""],
			["기타", ""],
			["예비사업자", ""],
		],
	},
	step3:{
		q : "자신의 요리 실력을 평가하자면?",
		a : [
			["라면도 어려운 왕초보", "1,3"],
			["아주 간단한 요리는 OK", "6,7"],
			["레시피만 있다면 웬만한 음식은 가능!", "2"],
			["타고난 요리사의 기질", "4,5"],
		],
	},
	step4:{
		q : "내가 맞춤 메뉴를 찾는 이유는 ____ 때문이다!",
		a : [
			["샵인샵처럼 여러 메뉴를 판매하기 위해", "1,2"],
			["한 메뉴에 집중한 전문 외식업장을 만들기 위해", "3,5"],
			["현재 운영 중인 외식업장에 신메뉴를 추가하기 위해", "4,7"],
			["초보자도 간편하게 창업할 수 있다는 말에 일단 솔깃!", "6"],
		],
	},
	step5:{
		q : "마진율은 어느 정도가 적당하다고 생각하나요?",
		a : [
			["무료봉사! 0% 도전!", "0"],
			["1 ~ 30%", "1,3"],
			["31% ~ 60%", "4,5,6"],
			["61% ~ 90%", "2,7"],
		],
	},
	step6:{
		q : "판매하고 싶은 메뉴의 적정 판매 가격대는?",
		a : [
			["1만원 미만", "6"],
			["2만원 미만", "1,2,3,4"],
			["3만원 미만", "7"],
			["3만원 이상", "5"],
		],
	},
	step7:{
		q : "메뉴 선택에서 가장 중요하다고 생각하는 점은?",
		a : [
			["쉬운조리", "6"],
			["맛", "1,3,5"],
			["다른메뉴와 조화", "4,7"],
			["마진율", "2"],
		],
	},
};

const Question = () => {

	const resultList = useQuestionState();
	// const dispatch = useQuestionDispatch();
	const [step, setStep] = useState(0);
	console.log(resultList);
	const getNextStep = (data) => {
		setStep(data);
	}
	return (
		<>
			<h1>step : {step}</h1>
			{step > 0 ? <QuestionStep getNextStep={getNextStep} step={step} data={initialQuestion["step"+step]} /> : <Start getNextStep={getNextStep}/>}
			<br/><br/><br/>
			==========-<br/>
			{JSON.stringify(resultList["r1"])}<br/>
			{JSON.stringify(resultList["r2"])}<br/>
			{JSON.stringify(resultList["r3"])}<br/>
			{JSON.stringify(resultList["r4"])}<br/>
			{JSON.stringify(resultList["r5"])}<br/>
			{JSON.stringify(resultList["r6"])}<br/>
			{JSON.stringify(resultList["r7"])}<br/>
		</>
	);
};

export default Question;