import { h, render } from 'preact';
import { Layout } from 'preact-mdl';
import { Provider, connect } from 'preact-redux';
import UserStore from './user-store';
import Home from '../component/Home/Home.jsx';
import '../css/userapp.css';

render(
  <Provider store={UserStore}>
    <Layout>
      <Home />
    </Layout>
  </Provider>,
  document.getElementById('app')
);