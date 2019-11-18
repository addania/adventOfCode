import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bootstrap, Row, Col, Container } from "react-bootstrap";
import { CodeAdvent20180101 } from "../components/codeAdvent20180101.js";
import { CodeAdvent20180102new } from "../components/codeAdvent20180102new.js";
import { CodeAdvent20180102newOptimizedwithImport } from "../components/codeAdvent20180102newOptimizedwithImport.js";
import { CodeAdvent20180201 } from "../components/codeAdvent20180201.js";
import { CodeAdvent20180202 } from "../components/codeAdvent20180202.js";
import { CodeAdvent20180301 } from "../components/codeAdvent20180301.js";
import { CodeAdvent20180401 } from "../components/codeAdvent20180401.js";


export default() =>
    <div className="App">
      <Container>
        <Row style={{ border: "1px solid grey" }}>
          <Col sm={12}><h2>Code Advent 2018</h2></Col>
        </Row>
        <Row style={{ border: "1px solid grey" }}>
          <Col sm={3}>Task 2018 01 01</Col>
          <Col sm={9} style={{ maxWidth: "100%" }}>
            <CodeAdvent20180101 />
          </Col>
        </Row>
        <Row style={{ border: "1px solid grey" }}>
          <Col sm={3}>Task 2018 01 02</Col>
          <Col sm={9} style={{ maxWidth: "100%" }}>
            <CodeAdvent20180102new />
          </Col>
        </Row>
        <Row style={{ border: "1px solid grey" }}>
          <Col sm={3}>Task 2018 01 02 +</Col>
          <Col sm={9} style={{ maxWidth: "100%" }}>
            <CodeAdvent20180102newOptimizedwithImport />
          </Col>
        </Row>
        <Row style={{ border: "1px solid grey" }}>
          <Col sm={3}>Task 2018 02 01</Col>
          <Col sm={9} style={{ maxWidth: "100%" }}>
            <CodeAdvent20180201 />
          </Col>
        </Row>
        <Row style={{ border: "1px solid grey" }}>
          <Col sm={3}>Task 2018 02 02</Col>
          <Col sm={9} style={{ maxWidth: "100%" }}>
            <CodeAdvent20180202 />
          </Col>
        </Row>
        <Row style={{ border: "1px solid grey" }}>
          <Col sm={3}>Task 2018 03 01+02</Col>
          <Col sm={9} style={{ maxWidth: "100%" }}>
            <CodeAdvent20180301 />
          </Col>
        </Row>
        <Row style={{ border: "1px solid grey" }}>
          <Col sm={3}>Task 2018 04 01</Col>
          <Col sm={9} style={{ maxWidth: "100%" }}>
            <CodeAdvent20180401 />
          </Col>
        </Row>
      </Container>
    </div>
