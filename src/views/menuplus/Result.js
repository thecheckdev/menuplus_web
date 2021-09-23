import React, {useEffect, useRef, useState} from 'react';
// import {useHistory} from "react-router-dom";
import {useQuestionState} from "components/menuplus/QuestionContext";
import { Helmet } from 'react-helmet-async';
import {Link} from "react-router-dom";

const Result = ({ match }) => {
	let resultIndex = match.params.index * 1;
	const [loading, setLoading] = useState(true);
	// const history = useHistory();
	// const shareUrl = ["https://baro.lk/LGggR","https://baro.lk/zaKPH","https://baro.lk/o1IRG","https://baro.lk/WdbYT","https://baro.lk/2YG9z","https://baro.lk/m0jHu","https://baro.lk/Z8FxF","https://baro.lk/kKAnA"];
	const shareUrl = "https://baro.lk/lc5Za";

	if(isNaN(resultIndex) || resultIndex > 7  || resultIndex < 0){
		resultIndex = 1;
		// alert("오류가 발생했습니다. 다시 시도해주세요.");
		// history.push("/menuplus/question");
		// window.location.reload();
	}
	const url = useRef();
	const resultList = useQuestionState();
	const tit = resultList[resultIndex].name;
	const menu = resultList[resultIndex].menu;
	useEffect(()=>{
		window.document.getElementsByTagName("html")[0].className = "question_result";
		setLoading(false);
	},[]);

	const pcDevice = "win16|win32|win64|mac|macintel";
	let check = ""; 
	if ( navigator.platform ) {
		check = (pcDevice.indexOf(navigator.platform.toLowerCase()) < 0 ) ? "MOBILE" : "PC";
		if ( pcDevice.indexOf(navigator.platform.toLowerCase()) < 0 ) {
			check = "MOBILE";
		} else {
			check = "PC";
		}
	}
	const share = (nm)=> {
		switch (nm) {
			case "kakao":
				try {
					window.Kakao.Link.sendDefault({
						objectType: 'feed',
						content: {
							title: "메뉴플러스사장님을 위한 맞춤메뉴를 찾아드려요",
							imageUrl: "https://event.thecheck.co.kr/img/menuplus/rending/img1.jpg",
							link: {
								mobileWebUrl: "https://event.thecheck.co.kr/#/menuplus/question",
								webUrl: "https://event.thecheck.co.kr/#/menuplus/question",
							},
						},
					});
				} catch (error) {
					console.log(error);
					alert("오류가 발생하였습니다. 다시 시도 부탁드립니다.");
				}
				return;
			case "face":
				window.open("http://www.facebook.com/sharer.php?u="+shareUrl, "", "_blank, width=560, height=650, scrollbars=yes, resizable=no");
				return;
			case "twitter":
				window.open("https://twitter.com/intent/tweet?url=" + shareUrl +"&text=메뉴플러스사장님을 위한 맞춤메뉴를 찾아드려요", "", "_blank, width=560, height=650, scrollbars=yes, resizable=no");
				return;
			case "naver":
				window.open("http://blog.naver.com/openapi/share?url="+shareUrl, "", "_blank, width=560, height=650, scrollbars=yes, resizable=no");
				return;
			case "url":
				// this.$refs.copyUrl.blur();
				const el = url.current
				el.select();
				window.document.execCommand("copy");
				alert("URL복사가 완료되었습니다");
				return;
			default:
				throw new Error(`Unhandled`);
		}
	}
	const goThecheck = () => {
		if(check === "MOBILE")window.location.href = "https://landing.thecheck.co.kr/v1/goto?referer=WEB&refererKey=W001";
		else window.location.href = "https://thecheck.co.kr/appdown/";
	}
	return (
		<section className={(resultIndex === 0 ? "zero ":"") + (loading ? " hide" : "")}>
			<Helmet>
				<title>1분 맞춤메뉴 테스트 결과 - 더체크 메뉴플러스</title>
				<meta name="description" content="더체크 메뉴플러스" data-react-helmet="true"/> 
				<meta property="og:title" content="1분 맞춤메뉴 테스트 결과" data-react-helmet="true"/>
				<meta property="og:image" content="https://event.thecheck.co.kr/img/menuplus/rending/img1.jpg" data-react-helmet="true"/>
				<meta property="og:description" content="더체크 메뉴플러스" data-react-helmet="true"/>
			</Helmet>
			<article className="best">
				<div className="inner">
					<div className="unit">
						{
							resultIndex === 0 ? <h1><strong>마진율 0%</strong>를 선택한 사장님<br/>이제 욕심내서 장사하셔야죠!</h1> :
							<h1><strong>메뉴플러스</strong>가 찾은<br/>사장님의 <strong>맞춤메뉴</strong>는</h1>
						}
						<img src={"https://event.thecheck.co.kr/img/menuplus/question/result"+(resultIndex === 0 ? (resultIndex): resultIndex)+".jpg"} alt={tit+"이미지"}/>
						{
							resultIndex === 0 ? 
								<>
									<h2><strong>메뉴플러스</strong>입점 메뉴</h2> 
									<div className="zero_point"><em>평균 마진</em><strong>{menu.margin}</strong></div>
									<p className="desc"><strong dangerouslySetInnerHTML={{ __html: menu.desc}}></strong></p> 
								</> : <>
									<h2>1위 {tit}</h2>
									<h3><strong>"{tit}"</strong> 메뉴분석</h3>
									<p className="desc"><span dangerouslySetInnerHTML={{ __html: menu.desc}}></span><strong>이 메뉴 하나로 아래 카테고리 모두 입점 가능!</strong></p>
									<div className="tags" dangerouslySetInnerHTML={{ __html: menu.tags}}></div>
								</>
						}
					</div>
					<div className="unit">
						<h1><strong>{tit}</strong>로 준비하는<br/><strong>인생 맛집 창업</strong></h1>
						<div className="menu_info">
							<img src={"https://event.thecheck.co.kr/img/menuplus/question/result"+(resultIndex === 0 ? (resultIndex+1 ): resultIndex)+"_1.jpg"} alt={tit+"이미지"}/>
							<h3><span>메뉴플러스</span>{menu.name}</h3>
							<ul>
								<li>
									<span className="name">메뉴플러스 판매가</span>
									<span>{menu.price}</span>
								</li>
								<li>
									<span className="name">조리시간</span>
									<span>{menu.time}</span>
								</li>
								<li>
									<span className="name">조리 난이도</span>
									<span className={"star s"+menu.start}>
										<em>별</em>
										<em>별</em>
										<em>별</em>
										<em>별</em>
										<em>별</em>
									</span>
								</li>
								<li>
									<span className="name">적정판매가</span>
									<span>{menu.orderPrice}</span>
								</li>
								<li>
									<span className="name">최대 마진</span>
									<span>{menu.margin}</span>
								</li>
								<li>
									<span className="name">예상수익</span>
									<span>{menu.revenue}</span>
								</li>
							</ul>
							<span className="noti">(일 20건 & 26일 판매 기준, 배달비 및 기타 부대비용 제외,<br/>예상수익은 메뉴 원가대비 수익)</span>
						</div>
					</div>
				</div>
			</article>
			<article className="bx_info">
				<div className="unit">
					<h1>창업·메뉴추가·업종변경·샵인샵</h1>
					<p>
						자영업자 필수앱 <strong>더체크</strong>의<br/>
						간편조리식품 & 식자재몰<br/>
						<strong className="point">메뉴플러스</strong>에서 다 준비해드립니다
					</p>
				</div>
				<div className="unit bg">
					<img src={"https://event.thecheck.co.kr/img/menuplus/question/result_com.jpg"} alt="메뉴플러스 이용 특전 - 회원 전용 최저가 상품, 빠른 물류 배송, 맛보기 상품 구비"/>
				</div>
				<div className="unit">
					<p>
						지금 더체크 회원가입하고<br/><strong>메뉴플러스</strong>에서 사업자 전용<br/><strong>최저가 상품</strong>을 만나보세요!
					</p>
					<h3>공유하기</h3>
					<div className="btns_sns">
						<button type="button" onClick={() => share("kakao")}>
							<img src={"https://event.thecheck.co.kr/img/menuplus/question/ico_kakao.png"} alt="카카오 공유하기"/>
						</button>
						<button type="button" onClick={() => share("face")}>
							<img src={"https://event.thecheck.co.kr/img/menuplus/question/ico_face.png"} alt="페이스북 공유하기"/>
						</button>
						<button type="button" onClick={() => share("twitter")}>
							<img src={"https://event.thecheck.co.kr/img/menuplus/question/ico_tw.png"} alt="트위터 공유하기"/>
						</button>
						<button type="button" onClick={() => share("naver")}>
							<img src={"https://event.thecheck.co.kr/img/menuplus/question/ico_naver.png"} alt="네이버 공유하기"/>
						</button>
						<button type="button" onClick={() => share("url")}>
							<input type="text" defaultValue={shareUrl} ref={url} className="blind" />
							<img src={"https://event.thecheck.co.kr/img/menuplus/question/ico_url.png"} alt="url 공유하기"/>
						</button>
					</div>
					{/* <button type="button" onClick={goThecheck} className="btn">앱 설치하기</button> */}
					<button type="button" onClick={goThecheck} className="btn">앱 설치하기</button>
					<Link className="btn line" to="/menuplus/question">다른 메뉴 추천 받기</Link>
				</div>
			</article>
		</section>
	);
};

export default Result;