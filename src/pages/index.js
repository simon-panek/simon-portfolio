import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/ppc-screen-shot.png';
import pic3 from '../assets/images/mod-s-screen-shot.png';
import pic4 from '../assets/images/gamesis-5000-screen-shot.png';
import pic5 from '../assets/images/simon-github-screen-shot.png';
import pic6 from '../assets/images/home-screen-shot.png';
import pic7 from '../assets/images/extractor-screen-shot.png';
import pic8 from '../assets/images/family-tree-cropped.jpg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Simon Panek
            </h2>
            <h3>
              Software developer
            </h3>
            <p>I am a full stack developer with a background in business. I have an MBA and have filled many technical roles including in startup companies and internationally. Checkout some of my projects!</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
            Here is a selection of my recent work.
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://github.com/parent-pickup-coordinator" className="image fit">
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3>Parent Pickup Coordinator</h3>
                </header>
              </article>
              <article className="item">
                <a href="https://github.com/Mod-s/module-docs-support" className="image fit">
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3>Module Docs Support</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://github.com/simon-panek/game-inventory-app" className="image fit">
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3>Gamesis 5000</h3>
                </header>
              </article>
              <article className="item">
                <a href="https://github.com/simon-panek" className="image fit">
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3>Most Recent GitHub Contribution</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="#portfolio" className="image fit">
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3>Home Renovation Project Management</h3>
                </header>
              </article>
              <article className="item">
                <a href="#portfolio" className="image fit">
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>Supercritical CO2 Extractor Product Development</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>

          <p>
            Life is an adventure, as it should be. Much of what has influenced the major decisions in my life stems from seeking new and novel experiences. Be it accepting an international assignment in a country that I had barley heard of (on a week's notice), joining startup companies involved in emerging industries, backpacking through Europe, skydiving, renovating homes, embracing fatherhood, or dropping everything to learn how to develop software, I am always in search of ways to learn more and experience more of what this life has to offer. I appreciate quality and believe that a project is not done until it is done well. I enjoy the outdoors and am always looking to explore more of it on foot, bike, skis, boat, motorcycle, or RV. Here's to the next adventure!
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
          If you have a project or position in mind that you think I would be a good fit for, please reach out.  I am always excited to learn about opportunities to collaborate. 
            
          </p>

          <form method="post" action="mailto:paneks19@gmail.com?subject=Portfolio%20Inquiry">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
