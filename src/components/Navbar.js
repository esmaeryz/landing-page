import React, { useState } from "react";

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

  return (
    <>
      <nav>
        <div className="nav-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar-links-container">
          <button>Home</button>
          <a href="">About</a>
          <a href="">Testimonials</a>
          <a href="">Contact</a>
          <a href="">
            <BsCart2 className="navbar-cart-icon" />
          </a>
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
      <div>
        <Home />
        <About />
        <Work />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
