import { h, render } from 'preact';
import { Layout } from 'preact-mdl';
import { Provider, connect } from 'preact-redux';
import {Router, Route, route} from 'preact-router';
import {ROUTE_CHANGE} from '../actions/route-actions';
import AsyncRoute from 'preact-router/async';
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
      <Router onChange={(e)=>{
          if (!e.previous && e.url!=='/') {
            route('/', true);
          } else {
            UserStore.dispatch({
              type: ROUTE_CHANGE,
              route: e.url,
            });
          }
        }}>
          <Route path='/' component={Home}/>
          <AsyncRoute path='/play' component={getPlayScreen}/>
      </Router>
    </Layout>
  </Provider>,
  document.getElementById('app')
);