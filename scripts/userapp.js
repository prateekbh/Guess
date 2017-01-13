import { h, render } from 'preact';
import { Layout } from 'preact-mdl';
import { Provider, connect } from 'preact-redux';
import {Router} from 'preact-router';
import UserStore from './user-store';
import '../css/userapp.css';

import Header from '../component/Header/Header.jsx';
import Home from '../component/Home/Home.jsx';
import Play from '../component/Play/Play.jsx';

render(
  <Provider store={UserStore}>
    <Layout>
      <Header/>
      <Router>
        <Home path="/" />
        <Play path="/play" />
      </Router>
    </Layout>
  </Provider>,
  document.getElementById('app')
);