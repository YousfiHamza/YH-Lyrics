import React from "react";
import Switch from "react-switch";
import { Consumer } from "../../context";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Consumer>
      {value => {
        const { handleTheme, lightTheme, light, dark } = value;
        const theme = lightTheme ? light : dark;
        return (
          <nav
            className="navbar mb-5"
            style={{
              color: theme.Bcolor,
              background: theme.background,
              textTransform: "uppercase"
            }}
          >
            <span className="navbar-brand mb-0 h1 mx-auto">-Lyricsy-</span>
            <Switch
              onChange={() => handleTheme()}
              checked={lightTheme}
              checkedIcon={
                <div className="lightTheme">
                  <i className="fas fa-sun "></i>
                </div>
              }
              uncheckedIcon={
                <div className="darkTheme">
                  <i className="fas fa-moon "></i>
                </div>
              }
              onColor="#09f"
            />
          </nav>
        );
      }}
    </Consumer>
  );
};

export default Navbar;