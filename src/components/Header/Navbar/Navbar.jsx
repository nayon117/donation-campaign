import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="flex justify-between items-center py-3">
        <div>
              <img className="w-3/4" src="https://i.ibb.co/rFrpV1g/Logo.png" alt="logo" />
        </div>
      <ul className="flex items-center gap-5 font-semibold">
        <li>
          <NavLink to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline  " : ""
            }>Home</NavLink>    
        </li>
        <li>
          <NavLink to="/donation"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline  " : ""
            }>Donation</NavLink>    
        </li>
        <li>
          <NavLink to="/statistics"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline  " : ""
            }>Statistics</NavLink>    
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
