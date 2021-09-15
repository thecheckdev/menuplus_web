import React,{useRef} from "react";

const Start = (props) => {
	const url = useRef();
	const onStart = () => {
		props.getNextStep(1);
	}
	const share = (nm)=> {
		const shareUrl = "https://baro.lk/lc5Za";
		switch (nm) {
			case "kakao":
				try {
					window.Kakao.Link.sendDefault({
						objectType: 'feed',
						content: {
							title: "메뉴플러스사장님을 위한 맞춤메뉴를 찾아드려요",
							imageUrl: "https://event.thecheck.co.kr/img/img1.jpg",
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
				window.open("https://twitter.com/intent/tweet?url=" + shareUrl+"&text=메뉴플러스사장님을 위한 맞춤메뉴를 찾아드려요", "", "_blank, width=560, height=650, scrollbars=yes, resizable=no");
				return;
			case "naver":
				window.open("http://blog.naver.com/openapi/share?url="+shareUrl, "", "_blank, width=560, height=650, scrollbars=yes, resizable=no");
				return;
			case "url":
				const el = url.current
				el.select();
				window.document.execCommand("copy");
				alert("URL복사가 완료되었습니다");
				return;
			default:
				throw new Error(`Unhandled`);
		}
	}
	return (
		<section className="start">
			<h1><strong>메뉴플러스</strong>가<br/>사장님을 위한<br/><strong>맞춤메뉴</strong>를<br/>찾아드려요</h1>
			<div className="bx">
				<span className="logo"><img src={"https://event.thecheck.co.kr/img/menuplus/question/logo.png"} alt="더체크 메뉴플러스"/></span>
				<button type="button" className="btn" onClick={onStart}>1분 맞춤메뉴 찾기</button>
				<div className="btns_sns">
					<div className="tit">맞춤메뉴 찾기<strong>공유하기</strong></div>
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
						<input type="text" defaultValue="https://event.thecheck.co.kr/#/menuplus/question" ref={url} className="blind" />
						<img src={"https://event.thecheck.co.kr/img/menuplus/question/ico_url.png"} alt="url 공유하기"/>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Start;