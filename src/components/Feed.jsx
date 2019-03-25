import React from "react";

class Feed extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map(article => (
          <div className="grid-container">
            <a className="content-title" href={article.url}>
              <h3>{article.title}</h3>
            </a>
            <img className="image" src={article.urlToImage} alt="" />
            <div className="source">
              <h4>{article.author}</h4>
            </div>
            <div className="news">
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Feed;
