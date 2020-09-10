import React from 'react';
import logo from './logo.svg';
import Landing from './components/Landing.js'
import About from './components/About.js'
import Resume from './components/Resume.js'
import Projects from './components/Projects.js'
import Typist from './components/Type.js'
import { Row, Col } from 'antd';
import './App.css';
import BreadMenu from './components/BreadMenu';
import ProjectGrid from './components/ProjectGrid'
import {HashRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{paddingLeft: 100, paddingRight: 100, paddingBottom:100, paddingTop: 50}}>
      {/* <BreadMenu />
                  <Row>
            <Col span={1}>     <Landing /> </Col>
      
          </Row> */}
      <HashRouter basename='/'>
      <div>
      <BreadMenu />
      <Switch>
        <Route path='/home' component={Landing}/>
        <Route path='/' component={Landing} exact/>
        <Route path='/about' component={About}/>
        <Route path='/projects' component={ProjectGrid}/>
        <Route path='/resume' component={Resume}/>

        {/* <Route path='/resume' component={Error}/>
        <Route path='/github' component={Error}/>
        <Route path='/linkedin' component={Error}/>
        <Route path='/about' component={About}/> */}

      </Switch>

      </div>
    </HashRouter>


 
    </div>
  );
}

export default App;
