import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Concerts from './containers/Concerts'
import NaviBar from "./components/NaviBar";
import EditConcert from "./containers/EditConcert";



function App() {
  return (
    <Router>
      <NaviBar />
      <Switch>
        <Route exact path ='/concerts' component={Concerts} />
        <Route exact path ='/edit' component={EditConcert} />
      </Switch>
    </Router>
  );
}

export default App;
