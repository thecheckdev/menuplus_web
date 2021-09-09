import {Route, Switch, useHistory} from "react-router-dom";
import Index from "views/menuplus/Index";
import Question from "views/menuplus/Question";
import { QuestionProvider } from "components/menuplus/QuestionContext";

function App() {
	const history = useHistory();
	return (
		<QuestionProvider>
			<Switch> 
				<Route path="/menuplus" component={Index} exact={true}/>
				<Route path="/menuplus/question" component={Question}/>
				<Route path="/*" render={()=> history.push("/menuplus")} />
			</Switch>
		</QuestionProvider>
	);
}

export default App;
