import React from 'react';

import Layout   from '../components/common/layout';
import Header from '../components/common/Header';
import Footer   from '../components/common/Footer';

import Icons from '../components/landing/icons';
import Hero from '../components/landing/hero';
import Contact from '../components/landing/contact';
import About from '../components/landing/about';

const IndexPage = () =>
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper landing">
        <Hero/>
        <Icons/>
        <Contact/>
        <About/>
      </section>
    </div>


    <Footer />
  </Layout>

export default IndexPage;
