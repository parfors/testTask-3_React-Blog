// import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import Footer from "./Footer/Footer";
import PublicRout from "./PublicRout/PublicRout";
import PrivetRout from "./PrivetRout/PrivetRout";
import MyArticles from "pages/MyArticles";
import SelectedCategory from "components/SelectedCategory/SelectedCategory";

// const Articles = lazy(() => import("pages/Articles"));
// const NotFoundPage = lazy(() => import("pages/NotFound"));
// const HomePlaceHold = lazy(() => import("pages/HomePlaceHold"));
// const Category = lazy(() => import("pages/Category"));

import HomePlaceHold from "pages/HomePlaceHold";
import Articles from "pages/Articles";
import Category from "pages/Category";
import NotFoundPage from "pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomePlaceHold />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/categories" element={<Category />}>
            <Route
              path="/categories/:category"
              element={<SelectedCategory />}
            />
          </Route>
          <Route element={<PublicRout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivetRout />}>
            <Route path="/my_articles" element={<MyArticles />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
