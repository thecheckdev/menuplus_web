import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Index = () => {
	const [loading, setLoading] = useState(true);
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
	useEffect(()=>{
		setLoading(false);
		window.document.getElementsByTagName("html")[0].className = "rending";
	},[]);
	const goThecheck = () => {
		if(check === "MOBILE")window.location.href = "https://landing.thecheck.co.kr/v1/goto?referer=WEB&refererKey=W001";
		else window.location.href = "https://thecheck.co.kr/appdown/";
	}
	return (
		<section className={(loading ? " hide" : "")}>
			<HelmetProvider>
				<Helmet>
					<meta property="og:title" content="메뉴플러스"/>
					<meta property="og:image" content="https://event.thecheck.co.kr/img/menuplus/rending/img1.jpg?v=1"/>
					<meta property="og:description" content="돈쭐나고 싶은 사장님을 위해 딱 맞는 인생 메뉴를 찾아드립니다"/>
				</Helmet>
			</HelmetProvider>
			<h1 className="blind">돈쭐나고 싶은 사장님을 위해 온푸몰에서 딱 맞는 인생 메뉴를 찾아드립니다</h1>
			<article className="item1">
				<img src={"https://event.thecheck.co.kr/img/menuplus/rending/img1.jpg?v=1"} alt="돈쭐나고 싶으세요? 인생맛집 5분창업 #샵인샵 #업종변경 #창업 #사업확장 #배달전문 #신메뉴추가 메뉴플러스"/>
			</article>
			<article className="item2">
				<img src={"https://event.thecheck.co.kr/img/menuplus/rending/img2.jpg?v=1"} alt="자영업자 필수 플랫폼 더체크가 사업장을 맛집으로 만들어드리겠습니다"/>
			</article>
			<article className="item3">
				<img src={"https://event.thecheck.co.kr/img/menuplus/rending/img3.jpg?v=1"} alt="아래 하나라도 해당하면 지금 메뉴플러스를 만날 때! 신메뉴가 필요한 사장님, 업종 변경이 시급한 사장님, 배달음식 사업하는 사장님, 샵인샵 창업을 생각하는 사장님 메뉴플러스의 검증된 상품으로 사업장 매출 확! 올려보세요"/>
			</article>
			<article className="item4">
				<img src={"https://event.thecheck.co.kr/img/menuplus/rending/img4_1.jpg?v=1"} alt="메뉴플러스란? 불필요한 비용, 거품 ZERO 더체크가 만든 간편조리식품 식자재몰로 검증된 상품을 최저가에 제공합니다"/>
			</article>
			<article className="item5">
				<img src={"https://event.thecheck.co.kr/img/menuplus/rending/img5_1.jpg?v=1"} alt="메뉴플러스 이용 특전 - 회원 전용, 최저가 상품, 빠른 물류 배송, 배달 등록 자료 무료 제공, 매니저 컨설팅 무료"/>
			</article>
			<article className="item6">
				<img src={"https://event.thecheck.co.kr/img/menuplus/rending/img6.jpg?v=1"} alt="배달앱 매출 상위 1% 비밀 전격 공개, 업 종변경 복수 브랜드 최적화 메뉴, 경쟁력 있는 매출 상위 메뉴, 조리시간 줄이는 초간편 메뉴, 메뉴플러스에선 365일 외식업장 인기메뉴가 초특가!"/>
				<Link className="btn" to="menuplus/question">사장님을 위한 메뉴 추천 받기</Link>
			</article>
			<article className="item7">
				<img src={"https://event.thecheck.co.kr/img/menuplus/rending/img7.jpg?v=1"} alt="잘 나가는 메뉴 단 3개로월 1천만원 수익 달성 가능! 바싹불고기(3인분) 마진 248% , 오돌뼈 마진 178%, 찜닭(4인분) 마진 171%"/>
			</article>
			<article className="item8">
				<img src={"https://event.thecheck.co.kr/img/menuplus/rending/img8.jpg?v=1"} alt="돈쭐나고 싶으세요? 인생맛집 5분창업 #샵인샵 #업종변경 #창업 #사업확장 #배달전문 #신메뉴추가 메뉴플러스"/>
				<Link className="btn" to="menuplus/question">사장님을 위한 메뉴 추천 받기</Link>
			</article>
			<div className="btns fix">
				<button type="button" className="btn" onClick={goThecheck}>더체크 메뉴플러스 바로가기</button>
			</div>
		</section>
	);
};

export default Index;