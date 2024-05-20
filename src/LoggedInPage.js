import { render } from '@testing-library/react';
import React, { useEffect, useState, useContext, createContext } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from "react-router-dom"
import ProblemPage from "./ProblemPage";
import Progressbar from "./Progressbar";
import { useCookies } from 'react-cookie';
import ProblemSelectedContext from "./ProblemSelectedContext"
import ProblemData from './ProblemData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';


let keyArray = Object.keys(ProblemData);
let keysLength = keyArray.length
let selectedKeys = [];
let i = 0;
let arr = [];
while (i < 5) {
    let item = keyArray[Math.floor(Math.random() * keysLength)];
    if (selectedKeys.indexOf(item) == -1) {
        selectedKeys[i] = item;
        arr.push(ProblemData[item]);
        i++;
    }
}


function LoggedInPage({ username }) {
    const [cookies, setCookie, removeCookie] = useCookies(['jDoodle-users']);
    let currentUsers = cookies['jDoodle-users'];


    const location = useLocation();//props.location.state;
    const problemId = location?.state?.id;
    const stateUserName = location?.state?.username;
    if (stateUserName) username = stateUserName;
    const [jsonObj, SetJsonobj] = useState(arr || []);
    const [completed, setCompleted] = useState();
    const [lastScore, SetLastScore] = useState(0);
    const [percentageCompleted, setpercentageCompleted] = useState(0);
    useEffect(() => {
        if (problemId && jsonObj) {
            let updatedJsonobj =
                jsonObj.map((item) => {
                    if (item.id == problemId)
                        item["status"] = true;
                    return item;
                });
            SetJsonobj(updatedJsonobj)
        }
    }, [problemId])
    useEffect(() => {
        if (jsonObj) {
            let problemsCompleted = 0;
            let updatedJsonobj =
                jsonObj.map((item) => {
                    if (item["status"])
                        problemsCompleted++;
                    return item;
                });
            let currentPercentage = (problemsCompleted / 5) * 100;
            setpercentageCompleted(currentPercentage);

        }
    });
    useEffect(() => {
        if (currentUsers) {
            let updatedUserList = currentUsers.forEach(element => {
                if (element.username == username && element.score) {
                    SetLastScore(element.score);
                }
                return element;

            });
        }
    }, [])
    const submitResult = () => {
        if (currentUsers) {
            let updatedUserList = currentUsers.map(element => {
                if (element.username == username) {
                    element.score = percentageCompleted;
                }
                return element;

            });
            setCookie('jDoodle-users', updatedUserList);

        }
    };

    // const problemReducer = function (state = 0, action) {
    //     jsonObj[state] ["status"] = true;
    //         return state;

    //   };
    //   const store = configureStore({
    //     reducer: problemReducer, 
    //   });
    //   const updateProblemList = (id) => {
    //     return {

    //         // Describes the action to be taken
    //         type: 'UPDATE_PROBLEM',
    //         id
    //     };
    // };
    useEffect(() => {

    }, [])



    //   const handleClick = (valu) => { 
    //     <Link to={`/ProblemPage/${valu}`}>sample</Link>
    //   };



    function renderpage() {


        return (
            <>
                <Container>

                    <Row className="justify-content-md-end">
                        <Col xs lg="2">
                            <Link to="/LoginForm" state={true}>
                                Sign Out
                            </Link>
                        </Col>
                    </Row>


                    <Row className="justify-content-md-center">
                        <Col xs lg="2">

                        </Col>
                        <Col md="auto"><h4>Welcome <i>{username}</i>!!</h4></Col>
                        <Col xs lg="2">

                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs lg="2">

                        </Col>
                        <Col md="auto">{lastScore != 0 && (<div>
                            Your Last Score Was {lastScore} !!
                        </div>)}</Col>
                        <Col xs lg="2">

                        </Col>
                    </Row>



                    <Row className="justify-content-md-center">

                        <Col md="12">  <Progressbar
                            bgcolor="orange"
                            progress={percentageCompleted}
                            height={20}
                        /></Col>

                    </Row>
                    <Row className='mb-3'><Col xs lg="2">

                    </Col></Row>
                    <Row lg={3}>
                        {jsonObj.map((item) => {
                            return (
                                <>
                                    <Col xs lg="4" className="d-flex pb-4">
                                        <Card style={{ width: '350px' }} className="flex-fill p-2" >
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>
                                                    {item.descriptionhtml}
                                                </Card.Text>
                                                <ProblemSelectedContext.Provider value={item.id}>
                                                    {
                                                        item["status"] ? (<div className='jd-problem-done'>Solved</div>) :
                                                            <Link to="/ProblemPage" state={{ ...item, "username": username }} className='jd-problem-items'>Solve</Link>

                                                    }

                                                </ProblemSelectedContext.Provider>
                                            </Card.Body>
                                        </Card>


                                    </Col>
                                    {/* <Col md="auto" className='jd-problem-items'></Col>
                        <Col xs lg="2">

                        </Col> */}

                                    {/* <Row className='mb-3'><Col>
                    <hr/>
                    </Col></Row> */}
                                </>)
                        })

                        }
                    </Row>

                    <Row className='mb-3'><Col xs lg="2">

                    </Col></Row>
                    <Row className="justify-content-md-center">
                        <Col xs lg="2">

                        </Col>
                        <Col md="auto"> <Button onClick={submitResult}>Submit Challenge</Button></Col>
                        <Col xs lg="2">

                        </Col>
                    </Row>
                    <Row className='mb-3'><Col xs lg="2">

                    </Col></Row>
                </Container>














            </>
        )

    }

    return (
        <div>
            {renderpage()}
        </div>
    );
}
const mapStateToProps = (state) => ({
    id: state.id
});

const mapDispatchToProps = (dispatch) => ({
    updateProblem: () => dispatch({ type: "UPDATE_PROBLEM" }),
});

export default LoggedInPage;
