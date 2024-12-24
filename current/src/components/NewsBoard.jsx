
import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems';

const NewsBoard = ({category}) => {



 const[article, setArticle] = useState([]);


 useEffect(()=>{
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
  fetch(url).then(response=>response.json()).then(data=> setArticle(data.articles))
 },[category])

  return (
    <div>
      <h2 className='text-center'>
        <span className='badge bg-info my-3 fs-4'> Latest News</span>
      </h2>
      {article.map((news,index)=>{
        return <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url = {news.url}/>

      })}
    </div>
  )
}

export default NewsBoard
