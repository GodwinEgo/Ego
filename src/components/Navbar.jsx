import React from "react";
import { Nav, NavLink, NavMenu }
  from "./NavbarElements";
import './Navbar.css';
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";


const Navbar = () =>
{
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
          <Stack sx={ { display: 'flex', flexDirection: 'row' } } className="signIn">
            <NavLink to="/sign-in" activeStyle>
              Sign In
            </NavLink>
            <Typography>
              /
            </Typography>
            <NavLink className="" to="/sign-up" activeStyle>
              Sign Up
            </NavLink>
          </Stack>
        </NavMenu>
      </Nav>
    </>
  );
};




export default Navbar;
