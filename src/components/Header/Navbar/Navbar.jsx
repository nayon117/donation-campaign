import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="flex justify-between items-center py-3">
        <div>
              <img className="w-3/4" src="https://i.ibb.co/rFrpV1g/Logo.png" alt="logo" />
        </div>
      <ul className="flex items-center gap-5">
        <li>
          <NavLink to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline font-semibold" : ""
            }>Home</NavLink>    
        </li>
        <li>
          <NavLink to="/donation"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline font-semibold" : ""
            }>Donation</NavLink>    
        </li>
        <li>
          <NavLink to="/statistics"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline font-semibold" : ""
            }>Statistics</NavLink>    
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
