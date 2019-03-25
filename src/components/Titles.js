import React from "react";
class Titles extends React.Component {
  render() {
    let date = new Date();
    date = date.toLocaleString();
    return (
      <div className="grid-container">
        <div className="title">
          <h1>Worldwide News </h1>
          <img className="swirl" src={require("../Images/swirl.png")} />
          <div className="date">
            <h1>{date}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Titles;
