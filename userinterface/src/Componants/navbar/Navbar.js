import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
const Navbar = () => {
  const {user} = useContext(AuthContext );

  return (
    <div className="navbar h-20 bg-zinc-900	  ">
      <div className="navContainer  text-white flex justify-between items-center">
        <Link to="/">
          <span className="logo font-bold text-3xl flex ">EazyBook</span>
        </Link>
        
          {user ? user.username: (<div className="navItem">
            <button className="navButton mr-5 p-2 cursor-pointer bg-white text-blue-800 rounded-md">
              Register
            </button>
            <button className="navButton  mr-5 p-2 cursor-pointer bg-white text-blue-800 rounded-md">
              Login
            </button>
          </div>)}
        
      </div>
    </div>
  );
};

export default Navbar;
