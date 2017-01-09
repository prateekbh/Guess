import { h, render } from 'preact';
import { Layout } from 'preact-mdl';
import AdminBase from '../component/AdminBase/AdminBase.jsx';

import '../css/adminapp.css';

render(
  <Layout>
    <AdminBase />
  </Layout>,
  document.getElementById('app')
);