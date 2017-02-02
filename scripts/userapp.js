import { h, render } from 'preact';
import { Layout } from 'preact-mdl';
import { Provider, connect } from 'preact-redux';
import {Router, Route, AsyncRoute} from 'preact-router';
import UserStore from './user-store';
import '../css/userapp.css';

import Header from '../component/Header/Header.jsx';
import Home from '../component/Home/Home.jsx';


function getPlayScreen() {
  return System.import('../component/Play/Play.jsx').then(module => module.default);
}

document.getElementById('app').innerHTML ='';
render(
  <Provider store={UserStore}>
    <Layout>
      <Header/>
      <Router>
        <Route path='/' component={Home}/>
        <AsyncRoute path='/play' component={getPlayScreen}/>
      </Router>
    </Layout>
  </Provider>,
  document.getElementById('app')
);