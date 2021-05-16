import {BrowserRouter as Router, Route}from 'react-router-dom'
import Header from './components/Header';
import AddPoint from './components/AddPoint'

function App() {
  return (
    <div className="container">
    <Header />
    <Router>
    <div>
    <Route path="/novo" component={AddPoint}></Route>

    </div>
    </Router>
    </div>
  );
}

export default App;
