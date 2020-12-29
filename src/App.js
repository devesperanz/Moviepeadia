import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NowShowing from './components/NowShowing';
import Upcoming from './components/UpComing';
import Content from './components/Content';
import Popular from './components/Popular';
import Nav from './components/Nav';
import TopRated from './components/TopRated';
import Detail from './components/Detail';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Route path='/' component={Content} />
        <Switch>
          <Route path='/' exact component={NowShowing} />
          <Route path='/upcoming' component={Upcoming} />
          <Route path='/popular' component={Popular} />
          <Route path='/toprated' component={TopRated} />
        </Switch>
        <Route path='/:id' component={Detail} />
      </Router>
    </div>
  );
}

export default App;
