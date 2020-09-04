import React from "react";
import FantasiaButton from "../Button/Button";
import { Container, Row, Col } from "react-grid-system";

class EnterpriseCard extends React.Component {
  render() {
    return (
      <div>
        <div className={"card"}>
          <img
            src={this.props.logoSrc}
            alt={this.props.logoAlt}
            className={"logo"}
          />
          <p className={"text"}>{this.props.description}</p>
          <FantasiaButton
            fill={"white"}
            border={"1px solid black"}
            textColor={"black"}
            padding={"15px 40px"}
            width={"100%"}
            radius={"3px"}
            fontSize={"1em"}
          >
            {this.props.buttonText}
          </FantasiaButton>
        </div>
        <style jsx>{`
          .card {
            padding: 50px 40px;
            border: 1.5px solid #E4E4E4;
            border-radius: 6px;
          }
          
          .logo {
            width: 50%;
            padding-bottom: 25px;
          }
          
          .text {
            color: #53504E;
            font-size: 1.1em;
            padding-bottom: 25px;
          }
        `}</style>
      </div>
    );
  }
}

export default EnterpriseCard;