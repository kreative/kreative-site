import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-grid-system";

class PageStarter extends React.Component {
  render() {
    return (
      <div>
        <Container style={{ padding: "0px" }} fluid>
          <Row nogutter>
            <Col sm={2}>
              <div className={"sidebar"}>
                <div className={"sidebar-wrapper"}>
                  <img
                    src={"https://kreative-site.kaycdn.com/kreative-logo@4x.png"}
                    alt={"Kreative logo in Black"}
                    className={"logo"}
                  />
                  <div className={"links"}>
                    <div className={"link"}>
                      <Link href={""}>
                        <a>About</a>
                      </Link>
                    </div>
                    <div className={"link"}>
                      <Link href={""}>
                        <a>Mission</a>
                      </Link>
                    </div>
                    <div className={"link"}>
                      <Link href={""}>
                        <a>Verticals</a>
                      </Link>
                    </div>
                    <div className={"link"}>
                      <Link href={""}>
                        <a>Enterprises</a>
                      </Link>
                    </div>
                    <div className={"link"}>
                      <Link href={""}>
                        <a>Newsroom</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={10}>
              <div className={"wrapper"}>
                {this.props.children}
              </div>
            </Col>
          </Row>
        </Container>
        <style jsx>{`
          .logo {
            width: 50%;
          }
          
          .links {
            padding-top: 15px;
          }
          
          .link {
            margin-top: 10px;
            margin-bottom: 10px;
            font-family: "BasierCircle";
            font-size: 1.2em;
          }
          
          .sidebar {
            position: absolute;
            top: 0px;
            background-color: #F8F8F8;
            height: 100vh;
            width: 100%;            
          }
          
          .sidebar-wrapper {
            padding: 40% 10%;
            text-align: left;
          }
          
          .wrapper {
            padding: 5% 10%;
          }
        `}</style>
      </div>
    );
  }
}

export default PageStarter;