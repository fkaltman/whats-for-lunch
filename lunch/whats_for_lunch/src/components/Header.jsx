import React from "react";
import Logo from "../images/wfl_yellow_flat.jpg";

const Header = () => {
  return (
    <section className = "logo-header">
    <img className="wfl-logo" src={Logo} alt="What's for lunch logo" />
    </section>
  );
}

export default Header;