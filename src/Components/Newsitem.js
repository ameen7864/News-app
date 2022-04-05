import React, { Component } from 'react'

export class Newsitem extends Component {


  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'><div className="card" >
        <div className="card-body">
          <h5 className="card-title">{title}<span class="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{ left: '90%', zIndex: "1" }}>
            {source}

          </span></h5>
          <img src={!imageUrl ? "https://iphone-mania.jp/uploads/2022/04/nio-day-2021-playback-desktop-1-1.jpg" : imageUrl} className="card-img-top" alt="..." />

          <p className="card-text">{description}...</p>
          <p class="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target='_blank' className="btn  btn-sm btn-primary">Read more</a>
        </div>
      </div></div>
    )
  }
}

export default Newsitem