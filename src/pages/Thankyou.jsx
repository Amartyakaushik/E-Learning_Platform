import React from "react";
import { Link } from "react-router-dom";

function Thankyou() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Thank you for purchasing the course!</h1>
      <h2 style={styles.subheading}>
        You can view your course in{" "}
        <Link to={"/my-courses"} style={styles.link}>
          My Courses
        </Link>
      </h2>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f7fc",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "20px",
  },
  subheading: {
    fontSize: "20px",
    color: "#555",
    marginBottom: "15px",
  },
  link: {
    color: "#5e72e4",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default Thankyou;
