import "../CSS/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
  
    <div className="footer">
      <div className="footerPadding">
     <div className="footerLink">
      <div className="footerLinkDiv">
        <h4>For Carrier Guide</h4>
        <a href="#">
          <p>Mentees</p>
        </a>
        <a href="#">
          <p>Menters</p>
        </a>
        <a href="#">
          <p>Self  Level Chekup</p>
        </a>
        </div>
        <div className="footerLinkDiv">
        <h4>Resourses</h4>
        <a href="#">
          <p>Resouces Center</p>
        </a>
        <a href="#">
          <p>Testimonials</p>
        </a>
        <a href="#">
          <p>STV</p>
        </a>
        </div>
        <div className="footerLinkDiv">
        <h4>Partners</h4>
        <a href="#">
          <p>MBRYON Tech PVT Ltd</p>
        </a>
        </div>
        <div className="footerLinkDiv">
        <h4>Company</h4>
        <a href="#">
          <p>About</p>
        </a>
        <a href="#">
          <p>Press</p>
        </a>
        <a href="#">
          <p>Careers</p>
        </a>
        <a href="#">
          <p>Contact</p>
        </a>
        </div>
        <div className="footerLinkDiv">
        <h4>Comming Soon On</h4>
        <div className="socialMedia">
        
  
      <a href="https://facebook.com/yourFacebook" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://instagram.com/yourInstagram" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
        </div>
        </div>
        </div> 
      <hr></hr>
      <div className="footerBelow">
        <div className="footerCopyright">
          <p>
            @{new Date().getFullYear()} codeInn.All right reserved.
          </p>
        </div>
        <div className="footerBelowLink">
          <a href="#"><div><p>Terms & Conditions</p></div></a>
          <a href="#"><div><p>Privacy</p></div></a>
          <a href="#"><div><p>Security</p></div></a>
          <a href="#"><div><p>Cookie Declarations</p></div></a>
        </div>
      </div>
        </div>
    </div>
 
  );
};

export default Footer;
