import { render } from '@testing-library/react';
import React, { useEffect, useState, useContext } from 'react';
import ProblemData from "./ProblemData";
import ProblemSelectedContext from "./ProblemSelectedContext"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import CodeMirror from "@uiw/react-codemirror";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
function ProblemPage(props) {
  const problems = useState(ProblemData);
  const [code, setCode] = React.useState(
    `// Add you complete solution here`
  );
  const [displayResults, setDisplayResults] = useState("");
  const [isResults, setIsResults] = useState(false);
  const location = useLocation();//props.location.state;
  const problem = location.state;
  const testCases = problem.testCases;
  const [testResult, setTestResult] = useState("");
  const onChange = React.useCallback((val, viewUpdate) => {
    setCode(val);
  }, []);
  let url = "https://api.jdoodle.com/v1/execute";
  let index = 4;
  let language = "csharp";
  let clientId = "484797c6a7c209a2093e12979c8bc408";
  let clientSecret = "420088cc36f1c0b6f56e34d731efeaf424e91171f34daa0d2b9b86c933cad3fc";

  const [testResultArray, setTestArray] = useState([]);
  const [testOut, setTestOut] = useState('');

  const [jdToken, setToken] = useState('');
  let socketClient = window.webstomp.over(new window.SockJS('https://api.jdoodle.com/v1/stomp'), { heartbeat: false, debug: true })

  function onWsConnection() {
    console.log('connection succeeded')

    socketClient.subscribe('/user/queue/execute-i', (message) => {
      let msgId = message.headers['message-id']
      let msgSeq = parseInt(msgId.substring(msgId.lastIndexOf('-') + 1))

      let statusCode = parseInt(message.headers.statusCode)

      if (statusCode === 201) {
        this.wsNextId = msgSeq + 1
        return
      }

      let t0
      try {
        t0 = performance.now()
        while ((performance.now() - t0) < 2500 && this.wsNextId !== msgSeq) {

        }
      } catch (e) {

      }

      if (statusCode === 204) {
        //executionTime = message.body
      } else if (statusCode === 500 || statusCode === 410) {
        //server error
        console.log("server error");
      } else if (statusCode === 206) {
        //outputFiles = JSON.parse(message.body)
        //returns file list - not supported in this custom api
      } else if (statusCode === 429) {
        //Daily limit reached
        console.log("daily limit reached");
      } else if (statusCode === 400) {
        //Invalid request - invalid signature or token expired - check the body for details
        console.log("invalid request - invalid signature or token expired");
      } else if (statusCode === 401) {
        //Unauthorised request
        console.log("Unauthorised request");
      } else {
        var txt = document.getElementById("result").value
        document.getElementById("jd-result").value = txt + message.body
      }

      this.wsNextId = msgSeq + 1
    })
    let data = JSON.stringify({
      script: code,
      language: language,
      versionIndex: index
    })

    socketClient.send('/app/execute-ws-api-token', data, { message_type: 'execute', token: jdToken })
  }

  function onWsConnectionFailed(e) {
    console.log('connection failed')
    console.log(e)
  }

  function onInput(event) {
    let key = event.key
    if (event.key === 'Enter') {
      key = '\n'
    }
    socketClient.send('/app/execute-ws-api-token', key, { message_type: 'input' })

  }
  const runSolution = async (e) => {
    await axios.post('http://localhost:5000/getToken', {
   "clientId": clientId,
      "clientSecret": clientSecret
    }
    ).then((response) => {
      //output = response.data["output"];
     
      setToken(response.data);
      socketClient.connect({}, onWsConnection, onWsConnectionFailed)
      //  setResult();
    });
  
  setTestResult(testResult)

  };
  

  const executeProblem = async (e) => {
    let output = '';
    setTestResult("");
    setIsResults(true); let otArray = [];
    problem["testCases"].map(async (element, item) => {

      await axios.post('http://localhost:5000/execute', {
        "url": url, "language": language, "index": index,
        "input": element.testInput, "clientId": clientId,
        "clientSecret": clientSecret, "code": code
      }
      ).then((response) => {
        //output = response.data["output"];
        output += "TestCase " + item + " : Input = " + element.testInput + " Output = " + response.data;;
        otArray.push({
          "input": element.testInput,
          "output": response.data
        });
        setTestArray(otArray);
        //  setResult();
      });
    });
    setTestResult(testResult)

  };

  const observerCallback = (entries) => {
    window.requestAnimationFrame(() => {
      if (!Array.isArray(entries) || !entries.length) {
        return;
      }

    });
  };
  const resizeObserver = new ResizeObserver(observerCallback);

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
              {/* <Editor height="100%" defaultLanguage="javascript" defaultValue={code} /> */}
              <CodeMirror
                value={code}
                height="300px"
                onChange={onChange}
              />


            </div>

            <div className='jd-problem-exection-submit'> <Button onClick={executeProblem}>Execute Test Case</Button>
              <Button onClick={runSolution}>Run Code</Button>
            </div>
            <div className='jd-problem-exection-results'>
              <div className='jd-problem-exection-results-Title'>Results:</div>
              <div className='jd-problem-exection-results-description'>
                {
                  isResults ? (
                    testResultArray.map((item, index) => {
                      return (<div className='jd-testResult'>
                        <div className='jd-testResultTitle'> Test Case {index} </div>

                        <div className='jd-testResultInput'>  <div className='jd-testResultTitle'>Input: </div>{item.input} </div>
                        <div className='jd-testResultOutput'> <div className='jd-testResultTitle'>Output: </div>{item.output} </div>
                      </div>)
                    })
                  ) : (<div>
                    <textarea rows="5" cols="100" id="result" onKeyPress={onInput}></textarea><div id="jd-result"
                    ></div>                 </div>)
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