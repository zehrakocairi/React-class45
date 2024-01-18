import "./layout.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="navigation-link">
        <Link to={"/"} style={{ marginRight: "30px" }}>
          Products
        </Link>
        <Link to={"/favorites"}>Favorites</Link>
      </div>
      <h1>Store the Cool</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
