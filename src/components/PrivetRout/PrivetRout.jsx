import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsLoggedIn } from "redux/selector";

export default function PrivetRout() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="login" />;
  }
  return <Outlet />;
}
