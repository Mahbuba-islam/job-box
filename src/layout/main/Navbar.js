
import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import auth from "../../firebase/firebase.config";

const Navbar = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation();
  const navigate = useNavigate()
  const {user:{email, role, _id}} = useSelector((state)=> state.auth)
  const handleSingnOut = () => {
    signOut(auth).then(()=>{
      dispatch(logout())
    })
  }
  return (
    <nav
      className={`h-14 fixed w-full z-[999] ${
        pathname === "/" ? null : "bg-white"
      }`}
    >
      <ul className='max-w-7xl mx-auto flex gap-3 h-full items-center'>
        <li className='flex-auto font-semibold text-2xl'>
          <Link to='/'>JobBox</Link>
        </li>
        <li>
          <Link className='hover:text-primary' to='/jobs'>
            Jobs
          </Link>
        </li>
       
        {
          email? (
          <div>
            <button onClick={handleSingnOut} className="hover text-primary transition-all mx-3">logout</button>
            <button onClick={() => navigate(`/profile/${_id}`)} className="hover text-white px-3 py-1 rounded-full transition-all mx-3 uppercase bg-primary">{email.slice(0,1)}</button>
          </div>
          )
          :
          (<li>
          <Link
            className='border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all '
            to='/login'
          >
            Login
          </Link>
        </li>)
        }



       {
          email && role &&
          <li>
          <Link className='hover:text-primary' to='/dashboard'>
            dashboard
          </Link>
        </li>
        }
        {
          email && !role &&
          <li>
          <Link className='hover:text-primary' to='/register'>
            Get Started
          </Link>
        </li>
        }
      </ul>
    </nav>
  );
};

export default Navbar;
