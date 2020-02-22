import React from 'react';
import Header from '../components/common/Header';
import Footer   from '../components/common/Footer';

import Layout from '../components/common/layout';

const NotFoundPage = () => (
  <Layout>
      <Header />
      <section className='wrapper'>
        <div className='inner four-zero-four'>
          <h1>NOT FOUND</h1>
          <p>Looks like you're a little lost, click <a href="/">here</a> to get back to the home page</p>
        </div>

      </section>



  </Layout>
);

export default NotFoundPage;
