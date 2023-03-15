import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Pages/Shared/RightSideNav/RightSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row gx-2 gy-4">
          <div className="col col-12 col-md-2 d-none d-lg-block">
            <LeftSideNav></LeftSideNav>
          </div>
          <div className="col col-12 col-md-7">
            <Outlet></Outlet>
          </div>
          <div className="col col-12 col-md-3">
            <RightSideNav></RightSideNav>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
