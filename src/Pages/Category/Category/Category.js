import React from "react";
import { useLoaderData } from "react-router-dom";
import useSetTitle from "../../../hooks/useSetTitle";
import NewsSummeryCard from "../../Shared/NewsSummeryCard/NewsSummeryCard";
import "./Category.css";

const Category = () => {
  useSetTitle("Category");
  const categoryNews = useLoaderData();
  // console.log(categoryNews);
  return (
    <div>
      <h2>From category page Welcome !!</h2>
      <p>Total category{categoryNews.length}</p>
      {categoryNews.map((news) => (
        <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>
      ))}
    </div>
  );
};

export default Category;
