import React from "react";

export interface INews {
  title : string,
  text : string,
  image : string
}

const NewsItem : React.FC<{item : INews}> = ({item}) => {
    return <div className="news-item flex flex-col sm:flex-row bg-white shadow-md p-4">
    <div className="news-item__left w-full sm:w-1/3">
      <img src={item.image} alt="image" className="news-item__image" />
    </div>
    <div className="news-item__right w-full sm:w-2/3 text-start p-4">
      <div className="news-item__title font-bold text-xl">
        {item.title}
      </div>
      <div className="news-item__text">
        {item.text}
      </div>
    </div>
  </div>
}

export default NewsItem