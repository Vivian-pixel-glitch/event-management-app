import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import styles from './Navbar.module.css';

function Navbar() {
  const location = useLocation();
  const { isLoggedIn, logout, user } = useAuth();

  const userInitial = (user?.firstName?.charAt(0) || "U").toUpperCase();

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>EventSphere</Link>
      <ul className={styles.navLinks}>
        {location.pathname !== "/" && (
          <li><Link to="/" className={styles.navLink}>Home</Link></li>
        )}
        {location.pathname !== "/about" && (
          <li><Link to="/about" className={styles.navLink}>About</Link></li>
        )}
        {location.pathname !== "/contact" && (
          <li><Link to="/contact" className={styles.navLink}>Contacts</Link></li>
        )}

        {!isLoggedIn ? (
          <>
            {location.pathname !== "/signup" && (
              <li><Link to="/signup" className={styles.navLink}>Sign up</Link></li>
            )}
            {location.pathname !== "/login" && (
              <li><Link to="/login" className={styles.navLink}>Login</Link></li>
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
                onClick={logout}
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
