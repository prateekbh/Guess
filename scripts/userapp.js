import { h, render } from 'preact';
import { Layout } from 'preact-mdl';
import { Provider, connect } from 'preact-redux';
import {Router, Route} from 'preact-router';
import UserStore from './user-store';
import '../css/userapp.css';

import Header from '../component/Header/Header.jsx';
import Home from '../component/Home/Home.jsx';
import Play from '../component/Play/Play.jsx';

document.getElementById('app').innerHTML ='';
render(
  <Provider store={UserStore}>
    <Layout>
      <Header/>
      <Router>
        <Route path='/' component={Home}/>
        <Route path='/play' component={Play}/>
      </Router>
    </Layout>
  </Provider>,
  document.getElementById('app')
);