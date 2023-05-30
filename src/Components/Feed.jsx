import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Html from "./HtmlPage/Html";
import Css from "./CssPage/Css";
import Javascript from "./JavascriptPage/Javascript";
import Home from "./HomePage/Home";
import Reactdoc from "./ReactjsPage/Reactdoc";
import Welcome from "./Important/Welcome";
import Jquery from "./JqueryPage";
import Bootstrap from "./Bootstrap";
import ReactBootstrap from "./ReactBootstrap";
import Material from "./Material ui";
import Tailwindcss from "./Tailwind";
import Nodejs from "./Node";
import Expressjs from "./Express/index";
import Mysql from "./Mysqlp";
import Nextjsp from "./Nextjs";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const renderComponent = () => {
    switch (selectedCategory) {
      case "Home":
        return <Home />;
      case "Html":
        return <Html />;
      case "Css":
        return <Css />;
      case "Javascript":
        return <Javascript />;
      case "React JS":
        return <Reactdoc />;
      case "J-Query":
        return <Jquery />;
      case "Bootstrap":
        return <Bootstrap />;
      case "ReactBootstrap":
        return <ReactBootstrap />;
      case "Material":
        return <Material />;
      case "Tailwindcss":
        return <Tailwindcss />;
      case "Nodejs":
        return <Nodejs />;
      case "Expressjs":
        return <Expressjs />;
      case "Mysqlp":
        return <Mysql />;
      case "Nextjsp":
        return <Nextjsp />;
      default:
        return <Welcome />;
    }
  };

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "90vh" },
          borderRight: "2px solid black",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          handleCategoryClick={handleCategoryClick}
        />
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#f31503" }}>{renderComponent()}</span>
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
