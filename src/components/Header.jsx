 
import Logo from "../assets/img/Foodnest.png";
import { FaShoppingCart } from "react-icons/fa";
import useAuth from "../Utils/useAuth";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useAuth();
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  return (
    <div className="header">
      <Link to={"/"}>
        {/* <img src={Logo} alt="logo" /> */}
      </Link>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/cart"} className="nav-link">
              <FaShoppingCart /> {cartItems.length}
            </Link>
          </li>

          <li>
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)} className="nav-btn">
                Logout
              </button>
            ) : (
              <button onClick={() => {
                setIsLoggedIn(true);
                navigate("/login");
              } } className="nav-btn">
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
