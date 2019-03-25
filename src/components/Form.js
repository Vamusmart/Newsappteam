import React from "react";
class Form extends React.Component {
  render() {
    return (
        <div>
      <form onSubmit={this.props.getNews}>
        <input 
            type="text" name="news" 
            placeholder="Search..."
        />
        <button type="submit">Get News</button>
        {<p>{this.props.error}</p>}
       
      </form>
       
       </div>
    );
  }
}

export default Form;