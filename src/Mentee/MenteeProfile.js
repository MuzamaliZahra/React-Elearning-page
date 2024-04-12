import "./MenteeProfile.css";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import myImage2 from '../images/Vector 1.png';
import myImage3 from '../images/Vector 3.png';

const MentorPrfl = () => {
  
  return (
    <div className="sign-ment">
      <img className="sign-ment-item" alt="" src={myImage2}/>

      <div className="next-level-e-learning-container">
        <p className="next-level">NEXT LEVEL</p>
        <p className="next-level">E-LEARNING</p>
      </div>

 
      <div className="heading">
      <h2 className="next-level">Mentee</h2>

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
    <Form.Label><h6>Upload Your Profile Picture</h6></Form.Label>
        <div className="d-flex justify-content-center align-items-center">
          <Form.Control
            type="file"
            name="profileImage"
            
          />
        </div>
      </Form.Group>

      </div>
      <Form>
        <div className="sign-ment-child24"></div>
        <Form.Label className="first">First Name</Form.Label>
        <Form.Control className="sign-ment-child23" type="text" />

        <div className="sign-ment-child21"></div>
        <Form.Label className="last-name">Last Name</Form.Label>
        <Form.Control className="sign-ment-child21" type="text" />

        <div className="sign-ment-child20"></div>
        <Form.Label className="email-address">Email</Form.Label>
        <Form.Control className="sign-ment-child19" type="email"/>

        <div className="sign-ment-child18"></div>
        <Form.Label className="phone">Phone Number</Form.Label>
        <Form.Control className="sign-ment-child17" type="tel"  />

        <div className="sign-ment-child16"></div>
        <Form.Label className="dob">Date of Birth</Form.Label>
        <Form.Control className="sign-ment-child15" type="date" />

        <div className="sign-ment-child14"></div>
        <Form.Label className="address1">Address</Form.Label>
        <Form.Control className="sign-ment-child13" type="text" />

        <div className="sign-ment-child12"></div>
        <Form.Label className=" field-of-study"> Field Of Study</Form.Label>
        <Form.Control className="sign-ment-child11" type="text" />

        <div className="sign-ment-child10"></div>
        <Form.Label className="current-job-title ">Current Job Title </Form.Label>
        <Form.Control className="sign-ment-child9" type="text"  />

        <div className="sign-ment-child8"></div>
        <Form.Label className="company">Company Name</Form.Label>
        <Form.Control className="sign-ment-child7" type="text"  />
        
       
        <div className="sign-ment-child6"></div>
        <Form.Label className="skill ">Skills </Form.Label>
        <Form.Control className="sign-ment-child5" type="text" />

        
        <div className="sign-ment-child4"></div>
        <Form.Label className="interests ">Interests </Form.Label>
        <Form.Control className="sign-ment-child3" type="text"  />



        <div className="sign-ment-child2"></div>
   
        <Form.Label className="links">Links to Social Profiles</Form.Label>
        <Form.Control className="sign-ment-child1" type="text" />


        <div className="center-btn">
          <Button variant="dark">Submit form</Button>
        </div>

        <img className="sign-ment-child" alt="" src={myImage3} />
      </Form>
    </div>
  );
};

export default MentorPrfl;