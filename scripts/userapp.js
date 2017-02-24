import { h, render } from 'preact';
import { Layout, Snackbar } from 'preact-mdl';
import { Provider, connect } from 'preact-redux';
import {Router, Route, route} from 'preact-router';
import {ROUTE_CHANGE} from '../actions/route-actions';
import AsyncRoute from 'preact-async-route';
import * as wordActions from '../actions/word-actions';
import UserStore from './user-store';
import '../css/userapp.css';
import '../component/Splash/Splash.css';
import Header from '../component/Header/Header.jsx';
import Blocker from '../component/Blocker/Blocker.jsx'
import {sendUserToken} from '../actions/user-actions';

function getHomeScreen() {
  return System.import('../component/Home/Home.jsx').then(module => module.default);
}

function getPlayScreen() {
  return System.import('../component/Play/Play.jsx').then(module => module.default);
}

let parent = document.getElementById('app');
let root = parent.lastChild;
render(
  <Provider store={UserStore}>
    <Layout>
      {UserStore.getState().userReducer.name && <Header/>}
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
          <AsyncRoute path='/' component={getHomeScreen}/>
          <AsyncRoute path='/play' component={getPlayScreen}/>
      </Router>
      <Snackbar ref={snackbar => {window.snackbar = snackbar}}/>
      <Blocker />
    </Layout>
  </Provider>,
  parent,
  root
);


window.addEventListener("messaging available",()=>{
  if (window.messaging && !window.messagingEnabled) {
    window.messagingEnabled = true;
    messaging.onTokenRefresh(function() {
      messaging.getToken()
        .then(function(token) {
					if (token) {
						sendUserToken({token});
					}
				}).catch(function(err) {
					window.snackbar && window.snackbar.base.MaterialSnackbar.showSnackbar({
						message: 'Some error occoured while re-registering you for Daily Hints.'
					});
				});
    });
    messaging.onMessage(function(payload) {
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