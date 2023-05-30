import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./Components/App.css";
import { Navbar, Feed } from "./Components";
import WebsiteHome from './Components/Important/WebsiteHome'


const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "white", color: "black" }}>
      <Navbar />
      <Routes>
        <Route exact path="/"  element={<WebsiteHome/>} />
        <Route path="/website" exact element={<Feed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
