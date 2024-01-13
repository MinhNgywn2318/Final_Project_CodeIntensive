import React from 'react'
import Header from '../component/Header';
import Footer from '../component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../about_us.css';
const Aboutus = () => {
  return (
    <>
      <Header />
      <section className="formpage__aboutus pt-4">
        <div className="row mt-3 content1">
          <div className="col-md-5">
            <img id="img-content-1" src="../images/aboutus4.jpg" alt="aboutus4" />
          </div>
          <div className="col-md-7">
            <h2>The early days of Envato Chocolate!</h2>
            <p><i>Since our humble beginnings the En
              vato Chocolate has grown into an industry leader of gourmet
              fudge and truffles.</i></p>
            <p><i>As demand has grown over the years Chocolate Moonshine has begun to leverage new manufacturing
              technology, but has still
              held true to small-batch traditions.</i></p>
            <p><i>Logic says that handcrafting fudge in small batches for the entire world is inefficient. That's
              why logic doesn't make
              the world's finest fudge.</i></p>
          </div>
        </div>
        <div className="row pt-4 mt-5 content2">
          <div className="col-md-12">
            <h2 className="text-center">Chocolate making process....</h2>
            <div className="row mt-2">
              <div className="col-md-6">
                <img src="../images/aboutus5.webp" alt />
              </div>
              <div className="col-md-6">
                <img src="../images/aboutus6.webp" alt />
              </div>
            </div>
          </div>
          <div className="row mt-4 pt-5 content3">
            <div className="col-md-7">
              <h2>Good Manufacturing Processes</h2>
              <p><i>Envato Chocolate has initiated and adheres to what is known in the industry as "Good
                Manufacturing Processes."
                GMPs promote consistency, safety, and quality for our confections around the world.</i></p>
              <p><i>By initiating this program it gives our customers from retail to the wholesale market the
                confidence that each bite will
                be as good as the last.</i></p>
            </div>
            <div className="col-md-5">
              <img src="../images/aboutus7.webp" alt id="img-content-3" />
            </div>
          </div>
          <div className="row pt-4 mt-5 content4 text-center">
            <div className="col-md-12">
              <h2 className="text-center">Review of customers</h2>
              <div className="row mt-2">
                <div className="col-md-6">
                  <p><i>“Awesome chocolate! I have eaten many different kinds of chocolate during my lifetime,
                    and never have I ever tasted such heavenly chocolate. My first piece was a dark
                    chocolate truffle —
                    simply to die for — I am looking forward to the next piece with great
                    anticipation!”</i>
                    <br />— KATHY V., MADISON LAKE, MN
                  </p>
                </div>
                <div className="col-md-6">
                  <p><i>“Honestly, the most outstanding chocolate I have ever experienced and I am a true
                    chocoholic. I love the way the other
                    flavors of the candy; the caramel, mint, nuts and fruit stand back and let the
                    chocolate take the
                    spotlight. Just right. My idea of perfection.”</i>
                    <br />— MYRNA R., ENCINITAS, CA
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-4 mt-4 content6">
            <h2 className="text-center">Our Address</h2>
            <p className="text-center"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8581690910314!2d106.68427047383351!3d10.822164158350898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174deb3ef536f31%3A0x8b7bb8b7c956157b!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBUUC5IQ00!5e0!3m2!1svi!2s!4v1700839109693!5m2!1svi!2s" width={1200} height={380} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" frameBorder={0} />
            </p>
          </div></div></section>
      <Footer />
    </>
  )
}

export default Aboutus;