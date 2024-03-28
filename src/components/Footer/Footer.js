import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer} className="">
      <p>This is a simple footer.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    position: "static",
    bottom: "0",
    width: "100%",
    height: "150px",
  },
};

export default Footer;
