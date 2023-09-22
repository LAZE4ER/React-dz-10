import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <Outlet />
    </>
  );
}
export default Layout;
