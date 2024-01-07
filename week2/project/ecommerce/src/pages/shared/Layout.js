import "./layout.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>Store the Cool</h1>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
