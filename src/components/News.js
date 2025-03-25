import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
  }

  async updateNews(page) {
    this.setState({ loading: true });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=f731e7b7510c47248ed8bee9b6348b7c&page=${page}&pageSize=${this.props.pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles || [], 
      totalResults: parsedData.totalResults || 0,
      loading: false,
      page: page
    });
  }

  async componentDidMount() {
    this.updateNews(this.state.page);
  }

  handlePrevClick = async () => {
    if (this.state.page > 1) {
      this.updateNews(this.state.page - 1);
    }
  };

  handleNextClick = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
      this.updateNews(this.state.page + 1);
    }
  };

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>

        {this.state.loading && <Spinner />} 

        <div className='row'>
          {!this.state.loading && this.state.articles.map((element, index) => ( 
            <div className="col-md-4" key={element.url || index}>
              <NewsItem 
                title={element.title} 
                description={element.description} 
                imageUrl={element.urlToImage} 
                newsUrl={element.url} 
              />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between my-3">
          <button 
            type="button" 
            className="btn btn-dark"  
            disabled={this.state.page <= 1} 
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          
          <button 
            type="button" 
            className="btn btn-dark" 
            onClick={this.handleNextClick}
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
