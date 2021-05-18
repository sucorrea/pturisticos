import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AddPoint from "./components/AddPoint";
import FindPoint from "./components/FindPoint";
import ShowPoint from "./components/ShowPoint";
import ViewPoint from "./components/ViewPoint";

const App = () => {
  return (
    <div className="container">
    <Header />
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={FindPoint}></Route>
          <Route path="/pontos" component={FindPoint}></Route>
          <Route path="/novo" component={AddPoint}></Route>
          <Route path="/exibir-ponto/:id" component={ViewPoint}></Route>
          <Route path="/mostrar-ponto/:nome" component={ShowPoint}></Route>
        </Switch>
      </div>
    </Router>
  </div>
  )
}

export default App

