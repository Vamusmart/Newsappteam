import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Feed from "./components/Feed.jsx";

const API_KEY = "db0dacd1507846429b3e6b0949b4560a";

class App extends React.Component {
  state = {
    data: [],
    homepageData: []
  };

  getFeed = async e => {
    // e.preventDefault();

    let api_call = await fetch(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=db0dacd1507846429b3e6b0949b4560a"
    );

    const data = await api_call.json();
    console.log(data.articles);

    this.setState({
      homepageData: data.articles
    });
  };

  getNews = async e => {
    e.preventDefault();

    let search = e.target.elements.news.value;
    let api_call = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );

    const data = await api_call.json();

    if (search) {
      console.log(data.articles);

      this.setState({
        data: data.articles,
        error: ""
      });
    } else {
      this.setState({
        source: undefined,
        error: "Please enter the news"
      });
    }
  };

  componentDidMount() {
    this.getFeed();
  }

  render() {
    const { data, homepageData } = this.state;
    return (
      <div>
        <Titles />
        <Form getNews={this.getNews} />
        { data.length > 0 ? <Feed data={data} /> : <Feed data={homepageData} /> }
        
        {/* <Today getFeed={this.getFeed}/> */}
      </div>
    );
  }
}

export default App;
