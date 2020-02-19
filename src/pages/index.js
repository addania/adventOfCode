import React from "react"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col, Container } from "react-bootstrap"
import { CodeAdvent20190101 } from "../components/codeAdvent20190101.js"
import { CodeAdvent20190102 } from "../components/codeAdvent20190102.js"
import { CodeAdvent20190201 } from "../components/codeAdvent20190201.js"
import { CodeAdvent20190202 } from "../components/codeAdvent20190202.js"
import { CodeAdvent20190301 } from "../components/codeAdvent20190301.js"
import { CodeAdvent20190302 } from "../components/codeAdvent20190302.js"
import { CodeAdvent20190401 } from "../components/codeAdvent20190401.js"
import { CodeAdvent20190402 } from "../components/codeAdvent20190402.js"
import { CodeAdvent20190501 } from "../components/codeAdvent20190501.js"
import { CodeAdvent20190502 } from "../components/codeAdvent20190502.js"
import { CodeAdvent20190601 } from "../components/codeAdvent20190601.js"
import { CodeAdvent20190602 } from "../components/codeAdvent20190602.js"
import { CodeAdvent20190701 } from "../components/codeAdvent20190701.js"
import { CodeAdvent20190702 } from "../components/codeAdvent20190702.js"
import { CodeAdvent20190801 } from "../components/codeAdvent20190801.js"
import { CodeAdvent20190802 } from "../components/codeAdvent20190802.js"
import { CodeAdvent20190901 } from "../components/codeAdvent20190901.js"
import { CodeAdvent20190902 } from "../components/codeAdvent20190902.js"
import { CodeAdvent20191001 } from "../components/codeAdvent20191001.js"
import { CodeAdvent20191002 } from "../components/codeAdvent20191002.js"
import { CodeAdvent20191101 } from "../components/codeAdvent20191101.js"
import { CodeAdvent20191102 } from "../components/codeAdvent20191102.js"
import { CodeAdvent20191201 } from "../components/codeAdvent20191201.js"
import { CodeAdvent20191202 } from "../components/codeAdvent20191202.js"
import { CodeAdvent20191301 } from "../components/codeAdvent20191301.js"
import { CodeAdvent20191501 } from "../components/codeAdvent20191501.js"
import { CodeAdvent20191502 } from "../components/codeAdvent20191502.js"
import { CodeAdvent20191601 } from "../components/codeAdvent20191601.js"
import { CodeAdvent20191701 } from "../components/codeAdvent20191701.js"
import { CodeAdvent20191901 } from "../components/codeAdvent20191901.js"
import { CodeAdvent20191902 } from "../components/codeAdvent20191902.js"
import { CodeAdvent20192201 } from "../components/codeAdvent20192201.js"
import { CodeAdvent20192202 } from "../components/codeAdvent20192202.js"
import { CodeAdvent20192401 } from "../components/codeAdvent20192401.js"
import { CodeAdvent20180101 } from "../components/codeAdvent20180101.js"
import { CodeAdvent20180102 } from "../components/codeAdvent20180102.js"
import { CodeAdvent20180201 } from "../components/codeAdvent20180201.js"
import { CodeAdvent20180202 } from "../components/codeAdvent20180202.js"
import { CodeAdvent20180301 } from "../components/codeAdvent20180301.js"
import { CodeAdvent20180401 } from "../components/codeAdvent20180401.js"
import { CodeAdvent20180402 } from "../components/codeAdvent20180402.js"
import { CodeAdvent20180501 } from "../components/codeAdvent20180501.js"
import { CodeAdvent20180502 } from "../components/codeAdvent20180502.js"
import { CodeAdvent20180601 } from "../components/codeAdvent20180601.js"
import { CodeAdvent20180602 } from "../components/codeAdvent20180602.js"
import { CodeAdvent20180701 } from "../components/codeAdvent20180701.js"
import { FetchAPItest } from "../components/fetchAPItest.js"
import { FetchAPItest2 } from "../components/fetchAPItest2.js"

/* COLOUR PALETTE

Green:
#6BAA75
#A7A7A9
#69747C

Blue: 
#27A7C6
#A7A7A9
#68C1B4

Border:
#E8E8EA

More:
#C1EDCC
#B0C0BC


*/

export default () => (
  <div className="App">
    <Container>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={9}>
          <h2
            style={{ margin: "30px 0px", textAlign: "left", color: "#C1EDCC" }}
          >
            Advent of Code
          </h2>
        </Col>
        <Col sm={3}>
          <h2
            style={{ margin: "30px 0px", textAlign: "right", color: "#C1EDCC" }}
          >
            Addania
          </h2>
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}></Col>
        <Col sm={9}>
          <h2
            style={{
              margin: "30px 0px",
              textAlign: "center",
              color: "#27A7C6",
            }}
          >
            YEAR 2019
          </h2>
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 01 01</p>
          <a
            href="https://adventofcode.com/2019/day/1"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>

        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20190101 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 01 02</p>
          <a
            href="https://adventofcode.com/2019/day/1"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>

        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20190102 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 02 01</p>
          <a
            href="https://adventofcode.com/2019/day/2"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>

        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20190201 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 02 02</p>
          <a
            href="https://adventofcode.com/2019/day/2"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>

        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20190202 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 03 01</p>
          <a
            href="https://adventofcode.com/2019/day/3"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>

        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20190301 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 03 02</p>
          <a
            href="https://adventofcode.com/2019/day/3"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>

        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20190302 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 04 01</p>
          <a
            href="https://adventofcode.com/2019/day/4"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>

        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20190401 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 04 02</p>
          <a
            href="https://adventofcode.com/2019/day/4"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>

        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20190402 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 05 01</p>
          <a
            href="https://adventofcode.com/2019/day/5"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>

        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20190501 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 05 02</p>
          <a
            href="https://adventofcode.com/2019/day/5"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>

        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20190502 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 06 01</p>
          <a
            href="https://adventofcode.com/2019/day/6"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>

        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20190601 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 06 02</p>
          <a
            href="https://adventofcode.com/2019/day/6"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>

        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20190602 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 07 01</p>
          <a
            href="https://adventofcode.com/2019/day/7"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>

        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20190701 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 07 02</p>
          <a
            href="https://adventofcode.com/2019/day/7"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>

        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20190702 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 08 01</p>
          <a
            href="https://adventofcode.com/2019/day/8"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>

        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20190801 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 08 02</p>
          <a
            href="https://adventofcode.com/2019/day/8"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20190802 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 09 01</p>
          <a
            href="https://adventofcode.com/2019/day/9"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20190901 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 09 02</p>
          <a
            href="https://adventofcode.com/2019/day/9"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20190902 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 10 01</p>
          <a
            href="https://adventofcode.com/2019/day/10"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20191001 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 10 02</p>
          <a
            href="https://adventofcode.com/2019/day/10"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20191002 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 11 01</p>
          <a
            href="https://adventofcode.com/2019/day/11"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20191101 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 11 02</p>
          <a
            href="https://adventofcode.com/2019/day/11"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20191102 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 12 01</p>
          <a
            href="https://adventofcode.com/2019/day/12"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20191201 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 12 01</p>
          <a
            href="https://adventofcode.com/2019/day/12"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20191202 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 13 01</p>
          <a
            href="https://adventofcode.com/2019/day/13"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20191301 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 15 01</p>
          <a
            href="https://adventofcode.com/2019/day/15"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20191501 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 15 02</p>
          <a
            href="https://adventofcode.com/2019/day/15"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20191502 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 16 01</p>
          <a
            href="https://adventofcode.com/2019/day/16"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20191601 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 17 01</p>
          <a
            href="https://adventofcode.com/2019/day/17"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20191701 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 19 01</p>
          <a
            href="https://adventofcode.com/2019/day/19"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20191901 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 19 02</p>
          <a
            href="https://adventofcode.com/2019/day/19"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20191902 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 22 01</p>
          <a
            href="https://adventofcode.com/2019/day/22"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20192201 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 22 02</p>
          <a
            href="https://adventofcode.com/2019/day/22"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20192202 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2019 24 01</p>
          <a
            href="https://adventofcode.com/2019/day/24"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20192401 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}></Col>
        <Col sm={9}>
          <h2
            style={{
              margin: "30px 0px",
              textAlign: "center",
              color: "#C1EDCC",
            }}
          >
            YEAR 2018
          </h2>
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2018 01 01</p>
          <a
            href="https://adventofcode.com/2018/day/1"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>

        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20180101 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2018 01 02</p>
          <a
            href="https://adventofcode.com/2018/day/1"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20180102 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2018 02 01</p>
          <a
            href="https://adventofcode.com/2018/day/2"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20180201 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2018 02 02</p>
          <a
            href="https://adventofcode.com/2018/day/2"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20180202 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2018 03 01+02</p>
          <a
            href="https://adventofcode.com/2018/day/3"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20180301 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2018 04 01</p>
          <a
            href="https://adventofcode.com/2018/day/4"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20180401 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2018 04 02</p>
          <a
            href="https://adventofcode.com/2018/day/4"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20180402 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2018 05 01</p>
          <a
            href="https://adventofcode.com/2018/day/5"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20180501 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2018 05 02</p>
          <a
            href="https://adventofcode.com/2018/day/5"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20180502 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2018 06 01</p>
          <a
            href="https://adventofcode.com/2018/day/6"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20180601 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2018 06 02</p>
          <a
            href="https://adventofcode.com/2018/day/6"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20180602 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>Task 2018 07 01</p>
          <a
            href="https://adventofcode.com/2018/day/6"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <CodeAdvent20180701 />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>FETCH API TEST</p>
          <a
            href="https://adventofcode.com/2018/day/6"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <FetchAPItest />
        </Col>
      </Row>
      <Row style={{ borderBottom: "0.5px solid #E8E8EA" }}>
        <Col sm={3}>
          <p>FETCH API TEST</p>
          <a
            href="https://adventofcode.com/2018/day/6"
            style={{ fontSize: "12px" }}
          >
            Go to task
          </a>
        </Col>
        <Col sm={9} style={{ maxWidth: "100%" }}>
          <FetchAPItest2 />
        </Col>
      </Row>
    </Container>
  </div>
)
