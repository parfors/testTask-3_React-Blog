import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Footer from "./Footer/Footer";
import { CategoryTitleStyled } from "./Categories/CategoriesStyled";
import { ContainerStyled } from "./Header/HeaderStyled";
import Register from "pages/Register";
import Login from "pages/Login";

const Articles = lazy(() => import("pages/Articles"));
const NotFoundPage = lazy(() => import("pages/NotFound"));
const HomePlaceHold = lazy(() => import("pages/HomePlaceHold"));
const Category = lazy(() => import("pages/Category"));
const Home = lazy(() => import("pages/Home"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <ContainerStyled>
            <CategoryTitleStyled>Loading...</CategoryTitleStyled>
          </ContainerStyled>
        }
      >
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomePlaceHold />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/articles" element={<Articles />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
