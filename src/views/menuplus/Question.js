import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import Start from "components/menuplus/Start";
import QuestionStep from "components/menuplus/StepContent";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import {useQuestionState} from "components/menuplus/QuestionContext";

const initialQuestion ={
	step1:{
		q : "외식업장을 <strong>운영중</strong>인가요?",
		a : [
				["Y", ""],
				["N", ""],
		],
	},
	step2:{
		q : "<strong>어떤 업종</strong>을 운영하는<br/>사업자인가요?",
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
		q : "자신의 <strong>요리 실력</strong>을<br/>평가하자면?",
		a : [
			["라면도 어려운 왕초보", "1,3"],
			["아주 간단한 요리는 OK", "6,7"],
			["레시피만 있다면 웬만한 음식은 가능!", "2"],
			["타고난 요리사의 기질", "4,5"],
		],
	},
	step4:{
		q : "내가 <strong>맞춤메뉴</strong>를<br/>찾는 이유는?",
		a : [
			["샵인샵처럼 여러 메뉴를<br/>판매하기 위해", "1,2"],
			["한 메뉴에 집중한<br/>전문 외식업장을 만들기 위해", "3,5"],
			["현재 운영 중인 외식업장에<br/>신메뉴를 추가하기 위해", "4,7"],
			["초보자도 간편하게 창업할 수 있다는<br/>말에 일단 솔깃!", "6"],
		],
	},
	step5:{
		q : "<strong>마진</strong>은 어느 정도<br/>생각하고 있나요?",
		a : [
			["무료봉사! 0% 도전!", "0"],
			["1 ~ 30%", "1,3"],
			["31% ~ 60%", "4,5,6"],
			["61% ~ 90%", "2,7"],
		],
	},
	step6:{
		q : "판매하고 싶은 메뉴의<br/><strong>소비자 가격대</strong>는?",
		a : [
			["1만원 미만", "6"],
			["2만원 미만", "1,2,3,4"],
			["3만원 미만", "7"],
			["3만원 이상", "5"],
		],
	},
	step7:{
		q : "<strong>메뉴 선택</strong>에서 가장 중요하다고<br/>생각하는 점은?",
		a : [
			["쉬운조리", "6"],
			["맛", "1,3,5"],
			["다른메뉴와 조화", "4,7"],
			["마진율", "2"],
		],
	},
	step8:{
		q : "대한민국 최고의<br/><strong>맛집 사장</strong>을<br/>만들어 줄<br/>당신의 <strong>맞춤메뉴</strong>는?",
		a : [],
	},
};


const Question = () => {
	const resultList = useQuestionState();
	const [step, setStep] = useState(0);
	const [resultIndex, setResultIndex] = useState(-1);
	const [loading, setLoading] = useState(true);
	const [answer, setAnswer] = useState([]);
	const history = useHistory();


	if(step === 0){
		resultList.map(item => {
			if(item.score > 0 || item.benefit > 0 || item.step6 > 0) window.location.reload();
		});
	}
	useEffect(()=>{
		window.document.getElementsByTagName("html")[0].classList.add("question");
		window.document.getElementsByTagName("html")[0].classList.remove("question_result");
		window.document.getElementsByTagName("html")[0].classList.remove("rending");
	});
	useEffect(()=>{
		setLoading(false);
	},[]);
	
	const getNextStep = (data) => {
		setStep(data);
		if(data === 8) {
			try {
				let maxObj = {
					score : resultList[0].score,
					benefit:resultList[0].benefit,
					index : 0,
				};
				let arr = resultList.map((item, i) => {
					if (maxObj.score < item.score){
						maxObj = {
							score : item.score,
							benefit : item.benefit,
							index : i,
						};
					}
					return item;
				});
				let checkMax = [];
				let checkStep6 = false;
				arr.map((item, i) => {
					if( item.score === maxObj.score ){
						if(item.step6 > 0) checkStep6 = true;
						checkMax.push({
							score : item.score,
							benefit : item.benefit,
							step6 : item.step6,
							index:i,
						})
					}
				});
				if (checkMax.length === 1) {
					setResultIndex(maxObj.index);
					return;
				}
				if(checkStep6) {
					const temp = [];
					checkMax.map(item => {
						if(item.step6 > 0) temp.push(item);
					});
					checkMax = temp;
				}
				let checkMax1 = [];
				maxObj = checkMax[0];
				checkMax.map(item => {
					if (maxObj.benefit < item.benefit){
						maxObj = item;
						checkMax1.push(item);
					}
				});
				const result = checkMax1.length === 0 ? maxObj.index : checkMax1[0].index;
				setResultIndex(result);
			} catch (error) {
				console.log(error);
				alert("오류가 발생했습니다. 다시 시도해주세요.");
				history.push("/menuplus/question");
			}
			return;
		}else if(data === 9){
			history.push("/menuplus/result/"+resultIndex);
		}
	}
	const getPrevStep = (data) =>{
		if(data === 2 && answer[data-1] === -2){
			setStep(1);
			setAnswer([]);
			return;
		}
		setAnswer(answer.filter((item, i) => i !== (answer.length-1)));
		setStep(data);
	}
	const getAnswer = (data) =>{
		if(data === -2) setAnswer(answer.concat(-1).concat(data));
		else setAnswer(answer.concat(data));
	}
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<meta property="og:title" content="메뉴플러스"/>
					<meta property="og:image" content="https://event.thecheck.co.kr/img/menuplus/rending/img1.jpg"/>
					<meta property="og:description" content="돈쭐나고 싶은 사장님을 위해 딱 맞는 인생 메뉴를 찾아드립니다"/>
				</Helmet>
			</HelmetProvider>
			{
				!loading ? (
					step === 0 ? <Start getNextStep={getNextStep}/> : step < 9 ? <QuestionStep getNextStep={getNextStep} getAnswer={getAnswer} step={step} answer={answer} getPrevStep={getPrevStep} data={initialQuestion["step"+step]}/>:""
				) : ""
			}
		</>
	);
};

export default Question; 