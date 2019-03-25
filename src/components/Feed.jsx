import React from "react";

class Feed extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map(article => (
          <div>
            <a href={article.url}>
              <h3>{article.title}</h3>
            </a>
            <img src={article.urlToImage} alt="" />
            <h4>{article.author}</h4>
            <p>{article.description}</p>
            {/* <div>{article.urlToImage} </div> */}
          </div>
        ))}
      </div>
    );
  }
}

export default Feed;
