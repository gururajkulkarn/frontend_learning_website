import React from "react";
import { Stack } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { logo } from "../utils/constants";

const Navbar = () => (
  <>
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "white",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/">
        <img src="images/4.png" alt="logo" width={70} />
      </Link>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" width={70} />
      </Link>
    </Stack>
    <hr />

    <Outlet />
  </>
);

export default Navbar;
