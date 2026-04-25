import React, { useState } from 'react'; // ✅ added useState
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import styles from './Navbar.module.css';

function Navbar() {
  const location = useLocation();
  const { isLoggedIn, logout, user } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false); // ✅ NEW

  const userInitial = (user?.firstName?.charAt(0) || "U").toUpperCase();

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>EventSphere</Link>

      {/* ✅ Hamburger */}
      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* ✅ UPDATED CLASS */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        {location.pathname !== "/" && (
          <li><Link to="/" className={styles.navLink} onClick={() => setMenuOpen(false)}>Home</Link></li>
        )}
        {location.pathname !== "/about" && (
          <li><Link to="/about" className={styles.navLink} onClick={() => setMenuOpen(false)}>About</Link></li>
        )}
        {location.pathname !== "/contact" && (
          <li><Link to="/contact" className={styles.navLink} onClick={() => setMenuOpen(false)}>Contacts</Link></li>
        )}

        {!isLoggedIn ? (
          <>
            {location.pathname !== "/signup" && (
              <li><Link to="/signup" className={styles.navLink} onClick={() => setMenuOpen(false)}>Sign up</Link></li>
            )}
            {location.pathname !== "/login" && (
              <li><Link to="/login" className={styles.navLink} onClick={() => setMenuOpen(false)}>Login</Link></li>
            )}
          </>
        ) : (
          <>
            <li>
              <div
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  backgroundColor: "purple",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "16px",
                  marginRight: "12px",
                }}
                title={user?.firstName || "User"}
              >
                {userInitial}
              </div>
            </li>

            <li>
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false); // ✅ close menu on logout
                }}
                className={styles.navLink}
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;