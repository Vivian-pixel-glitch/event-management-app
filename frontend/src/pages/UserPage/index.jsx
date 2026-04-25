import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import UserPage from "./UserPage.module.css";

function Index() {
  const { isLoggedIn, logout, user } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      if (!isLoggedIn) {
        setLoading(false);
        return;
      }

      try {
        const token = localStorage.getItem("authToken");
        const res = await fetch("http://localhost:3000/api/events/user", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setEvents(data.events || []);
        } else {
          setEvents([]);
        }
      } catch (err) {
        console.error("Error loading events:", err);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [isLoggedIn]);

  const userInitial = (user?.firstName?.charAt(0) || "G").toUpperCase();

  return (
    <div className="d-flex">
      <div
        className="bg-dark text-white p-4"
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <h4 className="text-white mb-4">EventSphere</h4>
        <br />
        <br />
        <nav>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <br />
            <br />
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </li>
            <br />
            <br />

            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/signup">
                    Sign Up
                  </Link>
                </li>
                <br />
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    Login
                  </Link>
                </li>
                <br />
                <br />
              </>
            )}

            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/bookevent">
                    Book Event
                  </Link>
                </li>
                <br />
                <br />
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact">
                    Contacts
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>

      <div className="flex-grow-1">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
          <div className="ms-auto d-flex align-items-center">
            {isLoggedIn && (
              <>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    color: "#0d6efd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginRight: "10px",
                  }}
                  title={user?.firstName || "User"}
                >
                  {userInitial}
                </div>

                <Link
                  to="/"
                  className="text-white"
                  onClick={logout}
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  Logout
                </Link>
              </>
            )}
          </div>
        </nav>

        <div className="p-4">
          {isLoggedIn && (
            <p
              className={UserPage.welcome}
              style={{ fontSize: "2rem", fontWeight: "bold", color: "#333" }}
            >
              Welcome, {user?.firstName || "Guest"}!
            </p>
          )}

          {isLoggedIn && (
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              {loading ? (
                <p>Loading your events...</p>
              ) : (
                <>
                  {events.length > 0 ? (
                    <>
                      <p
                        style={{
                          color: "#0d6efd",
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                      >
                        🎉 You have booked {events.length}{" "}
                        {events.length === 1 ? "event" : "events"}.
                      </p>
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        {events.map((event) => (
                          <li
                            key={event._id}
                            style={{
                              marginBottom: "10px",
                              padding: "10px",
                              border: "1px solid #ddd",
                              borderRadius: "5px",
                            }}
                          >
                            <strong>{event.eventType}</strong> – {event.date}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p
                      style={{
                        color: "black",
                        fontStyle: "italic",
                        fontSize: "2rem",
                      }}
                    >
                      You haven't booked any event yet.
                    </p>
                  )}

                  <Link to="/bookevent">
                    <button
                      style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        fontSize: "16px",
                        backgroundColor: "#0d6efd",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Book Event
                    </button>
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
