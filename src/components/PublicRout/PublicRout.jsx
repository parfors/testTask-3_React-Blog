import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsLoggedIn } from "redux/selector";

export default function PublicRout() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="my_articles" />;
  }
  return <Outlet />;
}
