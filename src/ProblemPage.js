import { render } from '@testing-library/react';
import React, { useEffect, useState, useContext } from 'react';
import ProblemData from "./ProblemData";
import ProblemSelectedContext from "./ProblemSelectedContext"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import { Link, useLocation } from 'react-router-dom';
function ProblemPage(props) {
  const problems = useState(ProblemData);
  const [displayResults, setDisplayResults] = useState("");
  const [isResults , setIsResults] = useState(false);
  const location = useLocation();//props.location.state;
  const problem = location.state;
  const testCases = problem.testCases;
  const executeProblem = (e) =>{

  };
  return (
    <div>
      <Container className='m-10 p-5'>
        <Row><Col><div className='jd-problem-title'> {problem["title"]}</div></Col></Row>
        <Row>
          <Col className='jd-problem-data-section'>
            <div className='jd-problem description'> {problem["descriptionhtml"]}</div>
            <div className='jd-problem constraints'>
              <div className='jd-problem constraints-title'>Constraints:</div>
              <div className='jd-problem constraints-desc'> {problem["constraints"]}</div>
            </div>
            <div className='jd-problem example'>
              {
                problem["example"].map((element, item) => {
                  return (
                    <Card style={{ width: '350px' }} className="flex-fill p-1 mb-2" >
                      <Card.Body>

                        <Card.Title>Example {element["exampleid"]}</Card.Title>
                        <Card.Text>

                          <div className='jd-exampleInput'><b>Input:</b> <code>   {element["input"]} </code></div>
                          <div className='jd-exampleOutput'><b>Output:</b> <code>   {element["output"]}</code></div>
                          <div className='jd-exampleExplanation'><b>Explanation:</b>  {element["explanation"]}  </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>

                  )
                })
              }</div>


          </Col>
          <Col className='jd-problem-exection-section'>
            <div className='jd-problem-exection-header'>
              <Link to={`/LoggedInPage`} state={{ "id": problem.id, "username": problem.username }}>Submit Solution</Link>
              <Link to={`/LoggedInPage`} state={{ "username": problem.username }} className='jd-back-btn'>Solve Other Problems</Link>
            </div>
            <div className='jd-problem-exection-editor'>
            <div data-pym-src="https://www.jdoodle.com/embed/v1/16b04e2aa5c261b3"></div>
            </div>

            <div className='jd-problem-exection-submit'> <Button onClick={executeProblem}>Execute</Button></div>
            <div className='jd-problem-exection-results'>
              <div className='jd-problem-exection-results-Title'>Results:</div>
              <div className='jd-problem-exection-results-description'>{
                isResults?(displayResults):(<div>
                  Your Results can be viewed here</div>)
              }
              </div>
            </div>
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default ProblemPage;