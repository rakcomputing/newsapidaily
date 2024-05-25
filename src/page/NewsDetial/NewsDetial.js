import React from "react";
import "./NewsDetail.css";

const NewsDetail = ({ article, onBack }) => {
  return (
    <div className="news-detail">
      <button onClick={onBack}>Back to list</button>
      <h2>{article.title}</h2>
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} />
      )}
      <p>
        <strong>Author:</strong> {article.author}
      </p>
      <p>
        <strong>Published at:</strong>{" "}
        {new Date(article.publishedAt).toLocaleString()}
      </p>
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read full article
      </a>
    </div>
  );
};

export default NewsDetail;
