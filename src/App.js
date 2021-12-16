import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

import Contact from './components/Contact/Contact';
import Navigation from './components/shared/Navigation/Navigation';
import About from './components/Home/About/About';
import Blogs from './components/Home/Blogs/Blogs';
import Footer from './components/shared/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
        <Route exact path="/home">
            <Home></Home>
          </Route>
        <Route exact path="/projects">
            <Projects></Projects>
          </Route>
        <Route exact path="/about">
            <About></About>
          </Route>
        <Route exact path="/contact">
            <Contact></Contact>
          </Route>
        <Route exact path="/blogs">
            <Blogs></Blogs>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
