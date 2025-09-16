import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [copied, setCopied] = useState(false); 
  const [showProfile, setShowProfile] = useState(false); 

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleCopy = () => {
    const referralLink = "https://myreferral.link/abcd123";
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="container">
      <Link to="/" className="logo">
        <img src="/assets/logo.png" alt="logo" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/practice" className="practice">Practice</Link></li>
        <li>
          <Link
            to="/placements"
            style={{
              background: "linear-gradient(to right, #800080, #000080, #483d8b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "500",
              textDecoration: "none",
            }}
          >
            Placements
          </Link>
        </li>
        <li><Link to="/community">Community</Link></li>
      </ul>
      <div className="help-earn">
        <button onClick={toggleDropdown}>Help and Earn</button>

        {showDropdown && (
          <div className="dropdown-content">
            <h4
              style={{
                background: "linear-gradient(to right, #800080, #000080, #483d8b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "500",
                fontSize: "24px",
                textAlign: "center",
              }}
            >
              One Solutions Help & Earn Program
            </h4>

            <div className="referallnbonuse">
              <h3>Referral Bonus</h3>
              <p>Earn $2000 for every successful referral</p>
              <p>Your friend gets $2000 discount on course fees</p>
              <p>No limit on referrals – earn unlimited rewards!</p>
            </div>

            <div className="importent-instructions">
              <h3>Important Instructions</h3>
              <p>Ask your friend to mention your name and One Solutions ID.</p>
              <p>when filling out the registration form</p>

              <div>
                <input
                  type="text"
                  id="referralLink"
                  value="https://myreferral.link/abcd123"
                  readOnly
                />
                <button className="copy-btn" onClick={handleCopy}>
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              <button className="referring-button">Start Referring Now</button>
            </div>
          </div>
        )}

        <div className="mentor-connect">
        <i className="bi bi-question-circle"></i>
        <a 
          href="https://zoom.us/j/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Mentor Connect
        </a>
      </div>
        <img
          src="/assets/placements.jpg"
          alt="Profile"
          className="placementimg"
          onClick={toggleProfile}
        />
        {showProfile && (
          <div className="profile-dropdown">
            <div className="profile-header">
              <img src="/assets/placements.jpg" alt="Profile" />
              <div>
                <h4>Prathibha</h4>
                <p className="status"> July 2023 Online </p>
              </div>
            </div>

            <ul >
              <li><Link to="/account"><i class="bi bi-person"></i>My Account</Link></li>
              <li><Link to="/compiler"><i class="bi bi-code-slash"></i>Compiler</Link></li>
              <li><Link to="/leave"><i class="bi bi-chat-left"></i>Apply for Leave</Link></li>
              <li><Link to="/whatsnew"><i class="bi bi-bell"></i>What's New</Link></li>
              <li><Link to="/help"><i class="bi bi-headphones"></i>Help Center</Link></li>
              <li><button className="logout-btn"><i class="bi bi-box-arrow-right"></i>Logout</button></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
