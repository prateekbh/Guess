import { h, render } from 'preact';
import { Layout, Snackbar } from 'preact-mdl';
import { Provider, connect } from 'preact-redux';
import {Router, Route, route} from 'preact-router';
import {ROUTE_CHANGE} from '../actions/route-actions';
import AsyncRoute from 'preact-async-route';
import * as wordActions from '../actions/word-actions';
import UserStore from './user-store';
import '../css/userapp.css';
import Header from '../component/Header/Header.jsx';
import Home from '../component/Home/Home.jsx';
import Blocker from '../component/Blocker/Blocker.jsx'
function getPlayScreen() {
  return System.import('../component/Play/Play.jsx').then(module => module.default);
}

document.getElementById('app').innerHTML ='';
window.addEventListener("messaging available",()=>{
  if (window.messaging && !window.messagingEnabled) {
    window.messagingEnabled = true;
    messaging.onMessage(function(payload) {
      console.log(UserStore);
      UserStore.dispatch({
        type: wordActions.NOTIFICATION_HINT,
      });
      window.snackbar && window.snackbar.base.MaterialSnackbar.showSnackbar({
        message: 'Your daily hint has been applied!'
      });
    });
  }
});
window.addEventListener('offline', () => {
  window.snackbar && window.snackbar.base.MaterialSnackbar.showSnackbar({message: 'You are offline!'});
});
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
      <Snackbar ref={snackbar => {window.snackbar = snackbar}}/>
      <Blocker />
    </Layout>
  </Provider>,
  document.getElementById('app')
);