import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Category from "../Pages/Category/Category/Category";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News/News";
import Profile from "../Pages/Others/Profile/Profile";
import Register from "../Pages/Register/Register";
import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () =>
            fetch("https://news-portal-fyre-news-server.vercel.app/news"),
        },
        {
          path: "/category/:id",
          element: <Category></Category>,
          loader: ({ params }) =>
            fetch(
              `https://news-portal-fyre-news-server.vercel.app/category/${params.id}`
            ),
        },
        {
          path: "/news/:id",
          element: (
            <PrivateRoute>
              <News></News>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://news-portal-fyre-news-server.vercel.app/news/${params.id}`
            ),
        },
        {
          path: "/profile",
          element: (
            <PrivateRoute>
              <Profile></Profile>
            </PrivateRoute>
          ),
        },
        {
          path: "/termsAndCondition",
          element: <TermsAndCondition></TermsAndCondition>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
  ]);
  return router;
};
