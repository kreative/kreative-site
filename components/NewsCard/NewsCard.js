import React from "react";
import Link from "next/head";

class NewsCard extends React.Component {
  render() {
    return (
      <div>
        <h3 className={"heading"}>
          <a href={"/newsroom/"+this.props.slug}>
            {this.props.title}
          </a>
        </h3>

        <p className={"description"}>{this.props.description}</p>
        <hr />
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Alike+Angular&display=swap');
          
          .heading {
            font-family: 'Alike Angular', serif;
            text-align: center;
            padding-bottom: 10px;
            color: black;
            padding-bottom: 20px;
          }
          
          .heading a {
            text-decoration: none;
            color: black;
          }
          
          .heading a:hover {
            color: #949494;
          }
          
          .description {
            font-family: 'Alike Angular', serif;
            font-size: 1.2em;
            text-align: center;
            color: #53504E;
            padding-bottom: 30px;
          }
        `}</style>
      </div>
    );
  }
}

export default NewsCard;