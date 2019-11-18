import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bootstrap, Row, Col, Container } from "react-bootstrap";
import { CodeAdvent20180101 } from "../components/codeAdvent20180101.js";
import { CodeAdvent20180102 } from "../components/codeAdvent20180102.js";
import { CodeAdvent20180201 } from "../components/codeAdvent20180201.js";
import { CodeAdvent20180202 } from "../components/codeAdvent20180202.js";
import { CodeAdvent20180301 } from "../components/codeAdvent20180301.js";
import { CodeAdvent20180401 } from "../components/codeAdvent20180401.js";
import Background from './advent.jpg';

/* COLOUR PALETTE

Buttons:
#6BAA75
#A7A7A9
#69747C

Border:
#E8E8EA

More:
#C1EDCC
#B0C0BC

*/

export default() =>
    <div className="App">
      <Container>
        <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={9}><h2 style={{margin: "30px 0px", textAlign: "left", color:"#C1EDCC"}}>Advent of Code 2018</h2></Col>
        <Col sm={3}><h2 style={{margin: "30px 0px", textAlign: "right", color:"#C1EDCC"}}>Addania</h2></Col>
        </Row>
        <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
          <Col sm={3} ><p>Task 2018 01 01</p>
            <a href="https://adventofcode.com/2018/day/1" style={{fontSize: "12px"}}>Go to task</a></Col>
          <Col sm={9} style={{ maxWidth: "100%" }}>
            <CodeAdvent20180101 />
          </Col>
        </Row>
        <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
          <Col sm={3}><p>Task 2018 01 02</p>
            <a href="https://adventofcode.com/2018/day/1" style={{fontSize: "12px"}}>Go to task</a></Col>
          <Col sm={9} style={{ maxWidth: "100%" }}>
            <CodeAdvent20180102 />
          </Col>
        </Row>
        <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
          <Col sm={3}><p>Task 2018 02 01</p>
            <a href="https://adventofcode.com/2018/day/2" style={{fontSize: "12px"}}>Go to task</a></Col>
          <Col sm={9} style={{ maxWidth: "100%" }}>
            <CodeAdvent20180201 />
          </Col>
        </Row>
        <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
          <Col sm={3}><p>Task 2018 02 02</p>
            <a href="https://adventofcode.com/2018/day/2" style={{fontSize: "12px"}}>Go to task</a></Col>
          <Col sm={9} style={{ maxWidth: "100%" }}>
            <CodeAdvent20180202 />
          </Col>
        </Row>
        <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
          <Col sm={3}><p>Task 2018 03 01+02</p>
            <a href="https://adventofcode.com/2018/day/3" style={{fontSize: "12px"}}>Go to task</a></Col>
          <Col sm={9} style={{ maxWidth: "100%" }}>
            <CodeAdvent20180301 />
          </Col>
        </Row>
        <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
          <Col sm={3}>
            <p>Task 2018 04 01</p>
            <a href="https://adventofcode.com/2018/day/4" style={{fontSize: "12px"}}>Go to task</a>
          </Col>
          <Col sm={9} style={{ maxWidth: "100%" }}>
            <CodeAdvent20180401 />
          </Col>
        </Row>
      </Container>
    </div>
