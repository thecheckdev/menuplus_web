import {Route, Switch, useHistory} from "react-router-dom";
import Index from "views/menuplus/Index";
import Question from "views/menuplus/Question";
import Result from "views/menuplus/Result";
import { QuestionProvider } from "components/menuplus/QuestionContext";

function App() {
	const history = useHistory();
	return (
		<QuestionProvider>
			<Switch> 
				<Route path="/menuplus" component={Index} exact={true}/>
				<Route path="/menuplus/question" component={Question} />
				<Route path="/menuplus/result/:index" component={Result} />
				<Route path="/*" render={()=> history.push("/menuplus")} />
			</Switch>
		</QuestionProvider>
	);
}

export default App;
