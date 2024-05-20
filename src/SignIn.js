import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const SignIn = ({ onLogin }) => {
  const [password, setPassword] = useState('');

  const [username, setUsername] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Container className='mt-5 pt-5'>
          <Row className="justify-content-md-center mt-5">
            <Col xs lg="2">

            </Col>
            <Col md="auto"> Welcome to JDoodle Platform !!</Col>
            <Col xs lg="2">

            </Col>
          </Row>
          <Row className='mb-3'><Col xs lg="2">

          </Col></Row>
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              Username
            </Col>
            <Col md="auto"><input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} /></Col>
            <Col xs lg="2">

            </Col>
          </Row>
          <Row className='mb-3'><Col xs lg="2">

          </Col></Row>

          <Row className="justify-content-md-center">
            <Col xs lg="2">
              Password
            </Col>
            <Col md="auto"><input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} /></Col>
            <Col xs lg="2">

            </Col>
          </Row>
          <Row className='mb-3'><Col xs lg="2">

          </Col></Row>
          <Row className="justify-content-md-center">
            <Col xs lg="2">

            </Col>
            <Col md="auto"><Button type="submit">Sign In</Button></Col>
            <Col xs lg="2">

            </Col>
          </Row>
          <Row className='mb-3'><Col xs lg="2">

          </Col></Row>
          <Row className="justify-content-md-center">
            <Col xs lg="2">

            </Col>
            <Col md="auto">Click here to <Link to="/SignUp">Sign Up</Link></Col>
            <Col xs lg="2">

            </Col>
          </Row>
          <Row className='mb-3'><Col xs lg="2">

          </Col></Row>
        </Container>




      </form>
    </>



  );
};

export default SignIn;