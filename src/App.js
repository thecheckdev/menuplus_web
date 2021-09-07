import {Route, Switch, useHistory} from "react-router-dom";
import Index from "views/Index";
import Question from "views/Question";
import { Link } from "react-router-dom";
import { QuestionProvider } from "QuestionContext";

function App() {
	const history = useHistory();
	return (
		<QuestionProvider>
			{/* <Link to="/">랜딩페이지</Link> <br/> */}
			{/* <Link to="/question">Question</Link> */}
			<Switch>
				<Route path="/" component={Index} exact={true}/>
				<Route path="/question" component={Question} exact={true}/>
				<Route path="/*" render={()=> history.push("/")} />
			</Switch>
		</QuestionProvider>
	);
}

export default App;
