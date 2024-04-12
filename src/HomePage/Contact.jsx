import React from 'react'
import Hero from './Hero'
import Footer from './Footer';
import Index from './Index'
import '../CSS/contact_style.css';
import Button from '../Popup/Button';
const Contact = () => {
  return (
 <>
 <div className="home1">
  <Index/>
 <div className="hero1">
    <Hero 
    cName="hero"
    heroImg="https://img.freepik.com/free-vector/blue-watercolor-abstract-background_23-2149147674.jpg?w=740&t=st=1700107697~exp=1700108297~hmac=45d55512a2976a3bd47a72dc0acd71c4e57fd90d2acab756e9d2228f84bc7f2d"
    title1="Contact Us"
   / >
      </div>
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
        <Footer/>
      
</div>
</>
   
  )
}

export default Contact