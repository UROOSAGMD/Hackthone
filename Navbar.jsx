 import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold fs-3 animate__animated animate__fadeIn">
          My Resume
        </Link>
        <div className="d-flex align-items-center">
          {user ? (
            <>
              <Link to="/dashboard" className="btn btn-outline-primary me-3">Dashboard</Link>
              <div 
                className="position-relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <button className="btn btn-outline-secondary">Resume Options</button>
                {showDropdown && (
                  <div 
                    className="dropdown-menu show position-absolute" 
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)' }}
                  >
                    <Link to="/create" className="dropdown-item">Create Resume</Link>
                    <Link to="/edit/:id" className="dropdown-item">Edit Resume</Link>
                    <button className="dropdown-item">Save Resume</button>
                    <div className="dropdown-item">Color Picker (Integrated in Create)</div>
                  </div>
                )}
              </div>
              <button onClick={handleLogout} className="btn btn-danger ms-3">Logout</button>
            </>
          ) : (
            <Link to="/signup" className="btn btn-primary">
              Signup <FaUserCircle size={20} />
            </Link>
          )} {/* Only Signup button when not logged in */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;