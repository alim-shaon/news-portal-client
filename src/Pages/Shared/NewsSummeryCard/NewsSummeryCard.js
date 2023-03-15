import React from "react";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummeryCard = ({ news }) => {
  const { _id, title, author, details, image_url, total_view, rating } = news;
  return (
    <div>
      <div className="card border  my-4">
        <div className="card-header border ">
          {author && (
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle"
                  style={{ width: "50px" }}
                  src={author.img}
                  alt=""
                />
                <div className="mx-2">
                  <p className="my-0">
                    {author.name ? author.name : "Stuff-Reporter"}
                  </p>
                  <p className="my-0">
                    {author?.published_date
                      ? author.published_date
                      : "Recently-Covered"}
                  </p>
                </div>
              </div>
              <div>
                <FaRegBookmark className="mx-1"></FaRegBookmark>
                <FaShareAlt className="mx-1"></FaShareAlt>
              </div>
            </div>
          )}
        </div>
        <div className="card-body">
          <h5 className="card-title text-center py-1">{title}</h5>
          <img src={image_url} className="card-img-top" alt="..." />
          {details.length > 250 ? (
            <p className="card-text">
              {details.slice(0, 250) + "..."}{" "}
              <Link to={`/news/${_id}`}>Read More</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
        <div className="card-footer border d-flex justify-content-between align-items-center">
          <div>
            <FaStar className="text-warning me-2"></FaStar>
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye className="me-2"></FaEye>
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSummeryCard;
