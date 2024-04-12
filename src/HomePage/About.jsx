import React from 'react';
import Index from './Index';
import Hero from './Hero';
import Footer from './Footer';
import '../CSS/contact_style.css';
import Button from '../Popup/Button';

const About = () => {
  return (
    <section className="home1">
      <Index />
      <div className="hero1">
        <Hero
          title1="About"
          text2="Web We offer the following carrier interfaces to carriers using the Transporeon Platform"
        />
      </div>

      <div>

 
        <form className="form" >
          <label className="label">Name</label>
          <input  className="input"type="text" name="user-Name"/>
          <label className="label">Email</label>
          <input type="email" className="input" name="user-email"/>
          <label className="label">Message</label>
          <textarea className="textarea" name="message"/><br></br>
          <input className="input-submit" type="submit" value="send"/>
          </form>
        <br/>
        <div className="button1">
        <Button/>
      </div>

      </div>
      <Footer />
    </section>
  );
};

export default About;
