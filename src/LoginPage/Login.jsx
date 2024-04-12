import React from 'react';
import { Container, Row, Col, Button, Form, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FormGroup, FormCheck } from 'react-bootstrap';
import './Login.css';
import myImage from '../LoginPage/draw.webp';

function SignUp() {
  const navigate = useNavigate();

  return (
    <Container fluid className="desktop-background">
      <Row>
        <Col>
          <section className="desktop-form">
            <section className="form-white">
              <div className="Next-level-e-learning_Heading">NEXT LEVEL <br /> E-LEARNING</div>
              <div className="Login_heading">Login</div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="Email_login"> <FontAwesomeIcon icon={faEnvelope} /> &nbsp; Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" className="Email_input_box" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="Password"> <FontAwesomeIcon icon={faLock} />&nbsp; Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" className="Password_input_box" />
                </Form.Group>

                <div className="forget-pass-word">Forget Pass Word?<a className="log_link" href=""> Click here</a></div>
                
                <div className="remember-me">Remember Me   </div>
                <div className="check-box" />

                <div className="login_btn-wrapper">
                  <Button className="login_btn" variant="primary" type="login" onClick={() => navigate('/')}>
                    Login
                  </Button>
                </div>

              </Form>
            </section>
            
            <section className="Improve-your-self-container">
             
                 Improve your <br/>
                 self with <br/>
                 NEXT LEVEL
            </section>
            <img className="Icon1" alt="" src={myImage} />
          </section>

        </Col>
      </Row>
    </Container>
    
  );
}

export default SignUp;
