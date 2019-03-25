import React from "react";
class Today extends React.Component {
  render() {
    return (
        <div>
     
       <button onClick={this.props.getFeed} type="submit">See Top Headlines</button>
       </div>
    );
  }
}

export default Today;