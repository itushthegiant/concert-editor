import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Concerts from './containers/Concerts'
import NaviBar from "./components/NaviBar";
import AddConcert from "./containers/AddConcert";


function App() {
  return (
    <Router>
      <NaviBar />
      <Switch>
        <Route exact path ='/' component={Concerts} />
        <Route exact path ='/edit' component={AddConcert} />
      </Switch>
    </Router>
  );
}

export default App;
