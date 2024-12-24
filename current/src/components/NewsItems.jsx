import React from 'react'

const NewsItems = ({title,description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-4 px-2 py-2  " style={{
        maxWidth:"345px"
    }}>
    <img src={src?src:"image.png"} style={{
        height:"200px",
        width:"320px"
    }} className="card-img-top" alt="image"/>
    <div className="card-body">
      <h5 className="card-title">{title?title.slice(0,50):"No Title found"}</h5>
      <p className="card-text">{description?description.slice(0,90):"News has no description"}</p>
      <a href={url} className="btn btn-primary">Read More..</a>
    </div>
  </div>
  )
}

export default NewsItems
