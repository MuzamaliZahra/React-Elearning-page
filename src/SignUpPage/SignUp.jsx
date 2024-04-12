import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import './SignUp.css';
import myImage from '../SignUpPage/draw.webp';

function SignUp() {
  const navigate = useNavigate();

  return (
    <Container fluid className="white_BG">
      <Row>
        <Col>
          <section className="form_BG">
            <section className="white_form">
              <section className="sign-up_heading">SIGN UP</section>

              <Form>
                <Form.Group>
                  <Form.Label className="full-name">
                    <FontAwesomeIcon icon={faUser} /> &nbsp; Full Name
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter Full Name" className="full-name_input_box" />
                </Form.Group>

                <Form.Group>
                  <Form.Label className="Email">
                    <FontAwesomeIcon icon={faEnvelope} /> &nbsp;Email
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter Email" className="email_input_box" />
                </Form.Group>

                <Form.Group >
                  <Form.Label className="user-name">
                    <FontAwesomeIcon icon={faUser} /> &nbsp;User Name
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter User Name" className="user-name_input_box" />
                </Form.Group>

                <Form.Group  >
                  <Form.Label className="password">
                    <FontAwesomeIcon icon={faLock} /> &nbsp; Password
                  </Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" className="password_input_box" />
                </Form.Group>

                <Form.Group>
                  <Form.Label className="confirm-password">
                    <FontAwesomeIcon icon={faLock} /> &nbsp;Confirm Password
                  </Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" className="confirm-password_input_box" />
                </Form.Group>

                <section className="already-have-an1">
                  Already have an account? <a href="">Login</a>
                </section>

                <section className="signup_btn-wrapper">
                  <Button className="signup_btn" variant="primary" type="login" onClick={() => navigate('/mentorPrfl')}>
                    SignUp As Mentee
                  </Button>
                </section>

                <section className="signup_btn-wrapper_mentor">
                  <Button className="signup_btn_mentor" variant="primary" type="login" onClick={() => navigate('/MenteeProfile')}>
                    SignUp As Mentor
                  </Button>
                </section>

                <section className="already-have-an1">
                  Already have an account? <a className='link' href='' >Login </a>
                </section>
              </Form>
            </section>

            <section className="next-level-e-learning-container1">
              NEXT LEVEL <br/>
              E-LEARNING
            </section>

            <section className="improve-your-self-container">
              Improve your <br/>
              self with <br/>
              NEXT LEVEL 
            </section>

            <img className="draw-1-icon1" alt="" src={myImage} />
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
