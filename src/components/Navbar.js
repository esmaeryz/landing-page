import React, { useState, useRef } from "react";

// components
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";

// constants
import { MENU_OPTIONS as menuOptions } from "../constants/constants";

// assets
import { HiOutlineBars3 } from "react-icons/hi2";
import { BsCart2 } from "react-icons/bs";
import Logo from "../Assets/Logo.svg";
import Box from "@mui/material/Box";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const sectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const fourthSectionRef = useRef(null);
  const fifthSectionRef = useRef(null);

  const executeScroll = (takenRef) => {
    if (takenRef?.current) {
      takenRef.current.scrollIntoView();
    }
  };

  return (
    <>
      <nav>
        <div className="nav-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar-buttons-container">
          <button
            onClick={() => {
              executeScroll(sectionRef);
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              executeScroll(secondSectionRef);
            }}
          >
            About
          </button>
          <button
            onClick={() => {
              executeScroll(thirdSectionRef);
            }}
          >
            Work
          </button>
          <button
            onClick={() => {
              executeScroll(fourthSectionRef);
            }}
          >
            Testimonials
          </button>
          <button
            onClick={() => {
              executeScroll(fifthSectionRef);
            }}
          >
            Contact
          </button>
          <button>
            <BsCart2 className="navbar-cart-icon" />
          </button>
        </div>
        <div className="navbar-links-container">
          <button className="primary-button">Bookings Now</button>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
      <div className="main-section">
        <div className="first-section" ref={sectionRef}>
          <Home />
        </div>
        <div className="second-section" ref={secondSectionRef}>
          <About />
        </div>
        <div className="third-section" ref={thirdSectionRef}>
          <Work />
        </div>
        <div className="fourth-section" ref={fourthSectionRef}>
          <Testimonial />
        </div>
        <div className="fifth-section" ref={fifthSectionRef}>
          <Contact />
        </div>
        <div className="sixth-section">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Navbar;
