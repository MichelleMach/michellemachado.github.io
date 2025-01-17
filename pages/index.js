import dynamic from "next/dynamic";
import TypingAnimation from "../src/components/TypingAnimation";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import ParticlesBackground from "../src/components/ParticlesBackground";
import Services from "../src/components/Services";
import Layout from "../src/layout/Layout";
import Image from 'next/image';
import Blog from "../src/components/Blog";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch('MichelleMachado.pdf').then(response => {
    response.blob().then(blob => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = 'MichelleMachado.pdf';
      alink.click();
    })
  })
}

const IndexParticles = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div id="particles-box" className="particles" />
          <ParticlesBackground />
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h1 className="font-alt">Michelle Machado</h1>
                  <p className="lead">
                    I'm <TypingAnimation />
                  </p>
                  <p className="desc">
                  I am a developer and designer, focused on aesthetics and functionality. Creating digital experiences one line of code at a time.
                  </p>
                  <div className="btn-bar">
                    <button className="px-btn px-btn-theme" onClick={onButtonClick}>
                      Donwload CV
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <Image src="/static/img/my-crime.jpg" title="banner-image" alt="banner-image" width={400} height={400} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
    </Layout>
  );
};
export default IndexParticles;
