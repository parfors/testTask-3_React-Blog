import { UserMenuTextStyled, UserMenuButton, UserMenuIcon } from "components";
import { useSelector } from "react-redux";
import { getUserEmail } from "redux/selector";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/auth-operations";

export default function UserMenu() {
  const email = useSelector(getUserEmail);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <UserMenuIcon />
      <UserMenuTextStyled>{email}</UserMenuTextStyled>
      <UserMenuButton onClick={clickHandler}>Выход</UserMenuButton>
    </>
  );
}
