import React from "react";
class Form extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <div className="search">
          <form onSubmit={this.props.getNews}>
            <input type="text" name="news" placeholder="Search..." />
            <button type="submit">Get News</button>
            {<p>{this.props.error}</p>}
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
