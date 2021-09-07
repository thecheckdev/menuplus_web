import React from 'react';

const Start = (props) => {
	const onStart = () => {
		props.getNextStep(1);
	}
	return (
		<div>
			<button type="button" onClick={onStart}>1분 맞춤메뉴 찾기</button><br/><br/>
			<button type="button">공유하기</button>
		</div>
	);
};

export default Start;