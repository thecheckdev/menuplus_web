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
			["라면도 어려운 왕초보", "r1,r3"],
			["아주 간단한 요리는 OK", "r6,r7"],
			["레시피만 있다면 웬만한 음식은 가능!", "r2"],
			["타고난 요리사의 기질", "r4,r5"],
		],
	},
	step4:{
		q : "내가 맞춤 메뉴를 찾는 이유는 ____ 때문이다!",
		a : [
			["샵인샵처럼 여러 메뉴를 판매하기 위해", "r1,r2"],
			["한 메뉴에 집중한 전문 외식업장을 만들기 위해", "r3,r5"],
			["현재 운영 중인 외식업장에 신메뉴를 추가하기 위해", "r4,r7"],
			["초보자도 간편하게 창업할 수 있다는 말에 일단 솔깃!", "r6"],
		],
	},
	step5:{
		q : "마진율은 어느 정도가 적당하다고 생각하나요?",
		a : [
			["무료봉사! 0% 도전!", "r0"],
			["1 ~ 30%", "r1,r3"],
			["31% ~ 60%", "r4,r5,r6"],
			["61% ~ 90%", "r2,r7"],
		],
	},
	step6:{
		q : "판매하고 싶은 메뉴의 적정 판매 가격대는?",
		a : [
			["1만원 미만", "r6"],
			["2만원 미만", "r1,r2,r3,r4"],
			["3만원 미만", "r7"],
			["3만원 이상", "r5"],
		],
	},
	step7:{
		q : "메뉴 선택에서 가장 중요하다고 생각하는 점은?",
		a : [
			["쉬운조리", "r6"],
			["맛", "r1,r3,r5"],
			["다른메뉴와 조화", "r4,r7"],
			["마진율", "r2"],
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
		</>
	);
};

export default Question;