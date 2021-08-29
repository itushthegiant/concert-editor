import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Concerts from './containers/Concerts'
import NaviBar from "./components/NaviBar";



function App() {
  return (
    <Router>
      <NaviBar />
      <Switch>
        <Route exact path ='/concerts' component={Concerts} />
      </Switch>
    </Router>
  );
}

export default App;
