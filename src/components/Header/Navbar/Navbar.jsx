import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="flex justify-between items-center py-3">
        <div>
              <h2>logo</h2>
        </div>
      <ul className="flex items-center gap-5">
        <li>
          <NavLink to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>Home</NavLink>    
        </li>
        <li>
          <NavLink to="/donation"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>Donation</NavLink>    
        </li>
        <li>
          <NavLink to="/statistics"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>Statistics</NavLink>    
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
