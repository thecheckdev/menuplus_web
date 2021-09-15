import React, { useReducer, createContext, useContext } from "react";


const InitialQuestion = [
	{
		name: "닭발",
		score: 0,
		benefit: 0,
		step6: 0,
		menu:{
			name:"로제 무뼈 닭발",
			desc: "검증된 메뉴 & 5분 조리로 <br/>높은 수익 가져갈 사장님을 모십니다!",
			price:"7,500원",
			time:"2분 30초",
			start: 1,
			orderPrice:"17,000원",
			margin:"209%",
			revenue:"4,940,000원"
		}
	},
	{
		name: "닭발",
		score: 0,
		benefit: 0,
		step6: 0,
		menu:{
			name:"로제 무뼈 닭발",
			desc: "한번도 안 먹어본 사람은 있지만, 한번만 먹은 사람은 없는 마성의 음식, 닭발! 한식, 분식, 야식의 강자 닭발은 쉬운 조리와 꾸준한 마니아 층으로 샵인샵 창업에 더할 나위 없는 메뉴입니다. 최근 유행하는 '로제'맛 닭발로 단기간 높은 매출을 이뤄보세요!",
			tags: "<em>한식</em><em>분식</em><em>야식</em>",
			price:"7,500원",
			time:"2분 30초",
			start: 1,
			orderPrice:"17,000원",
			margin:"127%",
			revenue:"4,940,000원"
		}
	},
	{
		name: "파스타",
		score: 0,
		benefit: 0,
		step6: 0,
		menu:{
			name:"감바스 파스타",
			desc: "조리가 간편한 파스타는 샵인샵 또는 사이드 메뉴 추가 시 높은 효율을 자랑합니다. 파스타 전문점 또는 양식 외식업장을 운영 중이라면 감바스 파스타, 투움바 파스타, 명란크림 파스타 등 요즘 유행하는 메뉴를 추가해보세요. 출시와 동시에 높은 인기와 매출 급상승을 확인하실 수 있을 거에요. ",
			tags: "<em>양식</em>",
			price:"3950원",
			time:"5분",
			start: 1,
			orderPrice:"15,000원",
			margin:"280%",
			revenue:"5,746,000원",
		}
	},
	{
		name: "족발",
		score: 0,
		benefit: 0,
		step6: 0,
		menu:{
			name:"불 꼬리족",
			desc: "배달 앱에 '족발, 보쌈'이라는 카테고리가 있다는 건 그만큼 찾는 사람이 많다는 것을 뜻합니다. 다만, 주변에 족발가게가 포화 상태라면 유니크한 꼬리족발 메뉴를 추천합니다. 비닐장갑을 끼고 먹는 재미 덕에 간식, 야식, 술안주 늘 인기가 많은 고매출 보장메뉴이거든요.",
			tags: "<em>한식</em><em>야식</em><em>족발</em><em>보쌈</em>",
			price:"6,900원",
			time:"2분 30초",
			start: 1,
			orderPrice:"15,000원",
			margin:"117%",
			revenue:"4,212,000원"
		}
	},
	{
		name: "제육볶음",
		score: 0,
		benefit: 0,
		step6: 0,
		menu:{
			name:"흑돼지 주물럭 (고추장, 간장)",
			desc: "한식당에 빠지지 않는 단골! 제육볶음은 한국 사람이라면 누구나 사랑하는 메뉴가 아닐까요? 밥 반찬은 물론, 누군가를 초대하거나 대접하고 싶을 때에도 빠지지 않는 메뉴이니까요. 특히 제주도 명물인 흑돼지 제육볶음이라면 언제나 맛은 보장! 높은 매출 또한 기대해도 좋겠습니다. ",
			tags: "<em>한식</em><em>야식</em>",
			price:"7,700원",
			time:"5분",
			start: 2,
			orderPrice:"20,000원",
			margin:"160%",
			revenue:"6,396,000원"
		}
	},
	{
		name: "찜닭",
		score: 0,
		benefit: 0,
		step6: 0,
		menu:{
			name:"찜닭 (매운맛, 순한맛, 일반)",
			desc: "어려운 음식처럼 보이지만, 밀키트로 요리하기에 제격인 메뉴가 바로 찜닭입니다. 간단한 재료를 첨가하면 시중 프랜차이즈에 버금가는 맛과 비주얼을 구현할 수 있어요. 언제든 메뉴 변경이 가능한 다양한 맛으로 고객 취향을 만족시킬 수 있는 것도 장점입니다.",
			tags: "<em>한식</em><em>야식</em><em>찜,탕</em>",
			price:"12,900원",
			time:"12분",
			start: 2,
			orderPrice:"35,000원",
			margin:"171%",
			revenue:"11,492,000원"
		}
	},
	{
		name: "순대국",
		score: 0,
		benefit: 0,
		step6: 0,
		menu:{
			name:"(특) 토종순대국",
			desc: "잃어버린 입맛을 찾아주는 순대국은 계절에 상관없이 오랫동안 많은 사람의 사랑을 받은 음식이죠. 한식 카테고리 중 빠질 수 없는 인기 메뉴로서 요리에 익숙하지 않은 사람이라도 푹 끓이기만 하면 손쉽게 전국의 유명 순대국 가게 못지않은 맛을 낼 수 있는 것이 특징입니다. ",
			tags: "<em>한식</em><em>야식</em><em>찜,탕</em>",
			price:"3,200원",
			time:"5분",
			start: 1,
			orderPrice:"8,000원",
			margin:"150%",
			revenue:"2,496,000원"
		}
	},
	{
		name: "바비큐폭립",
		score: 0,
		benefit: 0,
		step6: 0,
		menu:{
			name:"햇필드베이비폭립",
			desc: "배달업장, 외식업장 어디에서나 선보이는 음식도 좋지만, 차별화된 메뉴를 통해 매출 상승을 노려보는 것도 좋은 방법입니다. 남녀노소 누구나 좋아하는 폭립을 신메뉴로 추가해보세요. 전자레인지로 간편하게 조리도 가능하지만 오븐을 이용한다면 패밀리 레스토랑에 버금가는 고급 바비큐 폭립 완성!",
			tags: "<em>양식</em><em>야식</em>",
			price:"9,900원",
			time:"5분",
			start: 1,
			orderPrice:"29,000원",
			margin:"193%",
			revenue:"9,932,000원"
		}
	}
]

function QuestionReducer(state, action) {
	switch (action.type) {
	case "SETSCORE":
	return action.resultList;
	default:
		throw new Error(`Unhandled action type: ${action.type}`);
	}
}

const QuestionStateContext = createContext();
const QuestionDispatchContext = createContext();

export function QuestionProvider({ children }) {
	const [state, dispatch] = useReducer(QuestionReducer, InitialQuestion);
	return (
	<QuestionStateContext.Provider value={state}>
		<QuestionDispatchContext.Provider value={dispatch}>
			{children}
		</QuestionDispatchContext.Provider>
	</QuestionStateContext.Provider>
	);
}

export function useQuestionState() {
  const context = useContext(QuestionStateContext);
  if (!context) {
    throw new Error("Cannot find QuestionProvider");
  }
  return context;
}

export function useQuestionDispatch() {
  const context = useContext(QuestionDispatchContext);
  if (!context) {
    throw new Error("Cannot find QuestionProvider");
  }
  return context;
}