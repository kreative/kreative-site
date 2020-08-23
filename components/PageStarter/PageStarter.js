import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-grid-system";

class PageStarter extends React.Component {
  render() {
    return (
      <div>
        <Container style={{ padding: "0px" }} fluid>
          <Row nogutter>
            <Col sm={3} md={2}>
              <div className={"sidebar"}>
                <div className={"sidebar-wrapper"}>
                  <img
                    src={"https://kreative-site.kaycdn.com/kreative-logo@4x.png"}
                    alt={"Kreative logo in Black"}
                    className={"logo"}
                  />
                  <div className={"links"}>
                    <Link href={"/about"}>
                      <a className={"link"}>About</a>
                    </Link>
                    <Link href={"/about/mission"}>
                      <a className={"link"}>Mission</a>
                    </Link>
                    <Link href={"/verticals"}>
                      <a className={"link"}>Verticals</a>
                    </Link>
                    <Link href={"/enterprises"}>
                      <a className={"link"}>Enterprises</a>
                    </Link>
                    <Link href={"/newsroom"}>
                      <a className={"link"}>Newsroom</a>
                    </Link>
                    <Link href={"/contact-us"}>
                      <a className={"link"}>Contact Us</a>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={9} md={10}>
              <div className={"wrapper"}>
                {this.props.children}
              </div>
            </Col>
          </Row>
        </Container>
        <style jsx>{`
          .logo {
            width: 50%;
            padding-bottom: 50px
          }
          
          .link {
            display: block;
            padding-bottom: 20px;
            font-family: "BasierCircle";
            font-size: 1.4em;
            text-decoration: none;
            color: black;
          }
          
          .link:hover {
            color: #338EEE;
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