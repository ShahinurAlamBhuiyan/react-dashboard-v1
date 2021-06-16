import './App.css';
import SideMenu from './components/SideMenu/SideMenu';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Content from './components/MenuItem/Contents/Content';
import Dashboard from './components/MenuItem/Dashboard/Dashboard';
import Courses from './components/MenuItem/Contents/Courses/Courses';
import Videos from './components/MenuItem/Contents/Videos/Videos';
import Design from './components/MenuItem/Design/Design';
import { useState } from 'react';

function App() {
  const [inactive, setInactive] = useState(false);
  return (
    <Router>
      <SideMenu onCollapse={(inactive) =>{
        setInactive(inactive);
      }} />
      <div className={`container ${inactive ? 'inactive' : ""} `}>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/content">
            <Content />
          </Route>
          <Route path="/content/courses">
            <Courses />
          </Route>
          <Route path="/content/videos">
            <Videos />
          </Route>
          <Route path="/design">
            <Design />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
