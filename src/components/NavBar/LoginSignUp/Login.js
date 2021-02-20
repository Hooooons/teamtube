import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

const GlobalStyle = createGlobalStyle`
  background:#000;
`;
const LoginFormWrap = styled.div`
  height:100vh;
  min-height:100vh;
`;
const LoginForm = styled.div`
  width:600px;
  margin:0 auto;
  padding:100px 0 0;

  h1 {
    margin-bottom:60px;
    font-size:60px;
    color:#fff;
    text-align:center;
  }
`;
const LoginFormButton = styled.div`
  margin-top:50px;
  text-align:center;
`;

function Login() {
  // 로그인 정보
  const [loginInfo, setLoginInfo] = useState({
    email : "",
    pass : ""
  });

  // Input Change
  const evtInputValue = (e) => {
    const { name, value } = e.target;

    setLoginInfo({
      ...loginInfo,
      [name] : value
    });
  }

  // Submit
  const evtFormSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <GlobalStyle />
        <LoginFormWrap>
        <Container>
          <Row>
              <Col>
                <LoginForm>
                  <h1>LOGIN</h1>
                  <Form onSubmit={evtFormSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" name="email" placeholder="Enter email" value={loginInfo.email} onChange={evtInputValue} />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" name="pass" placeholder="Password" value={loginInfo.pass} onChange={evtInputValue} />
                    </Form.Group>
                    <LoginFormButton>
                      <Button variant="primary" type="submit">
                        로그인
                      </Button>
                    </LoginFormButton>
                  </Form>
                </LoginForm>
              </Col>
          </Row>
        </Container>
      </LoginFormWrap>
    </>
  );
}

export default Login;
