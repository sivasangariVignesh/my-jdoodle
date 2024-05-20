import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter,
    Routes,
    Link,
    Route,
    Navigate,
} from "react-router-dom";


const SignUp = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAlready, setIsAlready] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['jDoodle-users']);
    let currentUsers = cookies['jDoodle-users'];
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        let isFound = false;
        if (currentUsers) {
            currentUsers.forEach(element => {
                if (element.username == username) isFound = true
            });

            if (isFound) {
                setIsAlready(true);
            }

            else {
                let newUsers = [...currentUsers, {
                    "username": username,
                    "password": password,
                    "score": 0
                }];
                setCookie('jDoodle-users', newUsers);
                setIsCompleted(true);
                navigate('/LoggedInPage', { state: { "username": username } });

            }
        }
        else {
            let newUsers = [...[], {
                "username": username,
                "password": password,
                "score": 0
            }];
            setCookie('jDoodle-users', newUsers);
            setIsCompleted(true);
            navigate('/LoggedInPage', { state: { "username": username } });

        }
    };
    return (
        <>
            {/* {isCompleted && <Navigate to="/LoggedInPage" replace={true} />
        } */}
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
                        <Col md="auto"> <input
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
                        <Col md="auto"><Button type="submit">Sign Up</Button></Col>

                        <Col xs lg="2">

                        </Col>
                    </Row>
                    <Row className='mb-3'><Col xs lg="2">

                    </Col></Row>
                    <Row className="justify-content-md-center">
                        <Col xs lg="2">

                        </Col>
                        <Col md="auto">  {isAlready ?
                            <p>Username Already Found Click to  <Link to={`/`}>Sign In</Link></p>
                            : ""}</Col>
                        <Col xs lg="2">

                        </Col>
                    </Row>
                    <Row className='mb-3'><Col xs lg="2">

                    </Col></Row>
                </Container>




            </form></>



    );
};

export default SignUp;