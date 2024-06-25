import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Headers from "./components/header/Headers";
import Footer from "./components/footer/Footer";
import Home from "./routes/Home";
import Sports from "./routes/Sports";
import Movies from "./routes/Movies";
import TVShows from "./routes/TVShows";
import PageNotFound from "./routes/PageNotFound";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ProfileSettings from "./pages/profile/ProfileSettings";
import StreamingInfoContainer from "./pages/StreamingPages/streaming-info/StreamingInfoContainer";
import Header from "./pages/StreamingPages/header/Header";
import WatchContainer from "./pages/StreamingPages/streaming-play/WatchContainer";
import SearchContainer from "./pages/search/SearchContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-darkBg">
        <Headers />
        <Outlet />
        <Footer />
      </div>
    ),
    errorElement: (
      <div className="bg-darkBg">
        <PageNotFound />
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/sports", element: <Sports /> },
      { path: "/movies", element: <Movies /> },
      { path: "/tv-shows", element: <TVShows /> },
    ],
  },
  {
    path: "/register",
    element: (
      <div className="bg-darkBg">
        <Header />
        <Register />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div className="bg-darkBg">
        <Header />
        <Login />
      </div>
    ),
  },
  {
    path: "/profile-settings",
    element: (
      <div className="bg-darkBg">
        <Headers />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [{ path: "/profile-settings", element: <ProfileSettings /> }],
  },
  {
    path: "/:streamType/:title",
    element: (
      <div className="bg-darkBg">
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "",
        element: <StreamingInfoContainer />,
      },
      { path: "watch", element: <WatchContainer /> },
    ],
  },
  {
    path: "/search",
    element: (
      <div className="bg-darkBg">
        <Header />
        <SearchContainer />
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
