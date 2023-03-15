import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./News.css";

const News = () => {
  const news = useLoaderData();
  const { category_id, title, author, details, image_url } = news;
  return (
    <div>
      <div className="card shadow">
        <img src={image_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="fw-bold mb-0">
            <small>
              Author: {author?.name ? author.name : "Stuff Reporter"}
            </small>
          </p>
          <p>
            {" "}
            <small>
              {author?.published_date
                ? author.published_date
                : "Recently-Covered"}
            </small>
          </p>
          <p className="card-text ">{details}</p>
          <Link to={`/category/${category_id}`} className="btn btn-primary">
            All News in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
