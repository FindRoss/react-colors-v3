import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header/Index';
import Home from './components/Home/Home';
import Palette from './components/Palette/Palette';

import Container from '@material-ui/core/Container';

function App() {

  return (
    <Router>
      <Header />
      <Container maxWidth="md">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/palette/:id" component={Palette} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
