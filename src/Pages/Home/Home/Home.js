import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummeryCard from "../../Shared/NewsSummeryCard/NewsSummeryCard";
import "./Home.css";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <h2>Total Nwes Reports {allNews.length}</h2>
      {allNews.map((news) => (
        <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>
      ))}
    </div>
  );
};

export default Home;
