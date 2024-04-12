import React from 'react';
import { useSpring, animated } from 'react-spring';
import Index from './Index';
import Hero from './Hero';
import Footer from './Footer';
import MailList from './MailList';
import './index_style.css';
import img1 from './rectangle-1.svg';
import img2 from './images-1@2x.png';
import img3 from './check4-1@2x.png';
import Button from '../Popup/Button';
const Home = () => {


  return (
   
     

     <div className="home2">

<section className='nav1'>
        <Index />
        </section>
        <section className='nav2'>
       <div className="hero1">
      
        <Hero
        
          heroImg="https://img.freepik.com/free-vector/blue-watercolor-abstract-background_23-2149147674.jpg?w=740&t=st=1700107697~exp=1700108297~hmac=45d55512a2976a3bd47a72dc0acd71c4e57fd90d2acab756e9d2228f84bc7f2d"
          title1="DEVELOP YOUR SKILLS WITHOUT DILIGENCE"
          text2="Choose Your Favorite Platform Here"
          buttonText="Get start"
          url="/sign"
        />
      
      </div>
      </section>
      <section className='nav3'>
      <div className="nd-box">
        <div className="why-we-are-container">
          <p className="why-we">{`WHY WE `}</p>
          <p className="why-we">{`ARE BETTER `}</p>
          <p className="why-we">THAN OTHERS</p>
          <p className="blank-line4">
            <span className="blank-line15">
           
            </span>
          </p>
          
          <p className="your-journey-your">
            <span className="blank-line15">
              <span>impactful, it's your pathway to success</span>
            </span>
          </p>
        </div>
        <div className="nd-box-child"  />
        <img className="images-1-icon" alt="" src={img2}/>
        <div className="convenient-study-shedule-container">
          <p className="your-journey-your">Convenient Study Shedule</p>
      
        </div>
        <img className="check4-1-icon" alt="" src={img3} />
        <div className="modern-internet-platform-container">
          <p className="your-journey-your">Modern Internet Platform</p>
        
        </div>
        
        <img className="check4-2-icon" alt="" src={img3} />
        <div className="modern-internet-platform-container1">
          <p className="your-journey-your">Using Ai Technology</p>
        
        </div>
        
      </div>
      </section>

      <div className="button1">
        <Button/>
      </div>
  <section className='nav4'>
      <div className="home-child"/>
    <div className="sign-up-and">
      Sign up and we'll send the best deals to you
    </div>
    <div className="save-time-save">Save Time Save Money</div>
    
    <button><div className="subscribe">SUBSCRIBE</div></button>
    
    </section>
    <section className='nav5'>
     <div className="footer1">
        <Footer />
        </div>
        </section>
        </div>
      
    
  );
};

export default Home;
