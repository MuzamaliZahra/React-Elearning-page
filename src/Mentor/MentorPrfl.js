import "./MentorProfile.css";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import myImage from '../images/Vector 1.png';
import myImage1 from '../images/Vector 3.png';

const MentorPrfl = () => {
  
  return (
    <div className="signup-ment">
      <img className="signup-ment-item" alt="" src={myImage}/>
      
      <div className="next-level-e-learning-container">
        <p className="next-level">NEXT LEVEL </p>
        <p className="next-level">E-LEARNING</p>
     
      </div>
      <div className="heading">
      <h2 className="next-level">Mentor</h2>

      </div>
      <div className="information">
<u><p className="next-level"> Personal Information</p></u>
</div>
     
      <div className="profile-image-container text-center mt-4">
      <div className="profile-image-overlay">
        <img
          className="signup-ment-item"
          alt=""
          src="/vector1.png"
          style={{ width: "500px", height: "500px" }}
        />
        
      </div>

      {/* File Input Section */}
      <Form.Group className="mt-2">
        <Form.Label> <h6>Upload Your Profile Picture</h6></Form.Label>
        <div className="d-flex justify-content-center align-items-center">
          <Form.Control
            type="file"
            name="profileImage"
            
          />
        </div>
      </Form.Group>

      </div>
      <Form>
        <div className="signup-ment-child28"></div>
        <Form.Label className="first-name">First Name</Form.Label>
        <Form.Control className="signup-ment-child27" type="text" />

        <div className="signup-ment-child26"></div>
        <Form.Label className="lat-name">Last Name</Form.Label>
        <Form.Control className="signup-ment-child25" type="text" />

        <div className="signup-ment-child24"></div>
        <Form.Label className="email">Email</Form.Label>
        <Form.Control className="signup-ment-child23" type="email"/>

        <div className="signup-ment-child22"></div>
        <Form.Label className="phone-number">Phone Number</Form.Label>
        <Form.Control className="signup-ment-child21" type="tel"  />

        <div className="signup-ment-child20"></div>
        <Form.Label className="date-of-birth">Date of Birth</Form.Label>
        <Form.Control className="signup-ment-child19" type="date" />

        <div className="signup-ment-child18"></div>
        <Form.Label className="address">Address</Form.Label>
        <Form.Control className="signup-ment-child17" type="text" />

        <div className="signup-ment-child16"></div>
        <Form.Label className="company-name">Company Name</Form.Label>
        <Form.Control className="signup-ment-child15" type="text" />
        
        <div className="signup-ment-child14"></div>
        <Form.Label className="position">Position</Form.Label>
        <Form.Control className="signup-ment-child13" type="text"  />

        
        <div className="signup-ment-child12"></div>
        <Form.Label className="industry ">Industry </Form.Label>
        <Form.Control className="signup-ment-child11" type="text" />


        <div className="signup-ment-child10"></div>
        <Form.Label className="years-of-experience ">Years of experience </Form.Label>
        <Form.Control className="signup-ment-child9" type="number"  />


        <div className="signup-ment-child8"></div>
        <Form.Label className="skills ">Skills </Form.Label>
        <Form.Control className="signup-ment-child7" type="textarea"  />


        <div className="signup-ment-child6"></div>
        <Form.Label className="mentoring-approach ">Mentoring approach </Form.Label>
        <Form.Control className="signup-ment-child5" type="text"  />

 

        <div className="signup-ment-child4"></div>
     <Form.Label className="achievements-and-accomplishmen">Achievements</Form.Label>
        <Form.Control className="signup-ment-child3" type="text" />

        <div className="signup-ment-child2"></div>
   
        <Form.Label className="links-to-social">Links to Social Profiles</Form.Label>
        <Form.Control className="signup-ment-inner" type="text"  />


        <div className="center-button">
          <Button variant="dark">Submit form</Button>
        </div>

        <img className="signup-ment-child" alt="" src={myImage1} />
      </Form>
    </div>
  );
};

export default MentorPrfl;