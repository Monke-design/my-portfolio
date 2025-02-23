import React, { useState } from "react";
import AboutMeTest from "../Pages/AboutMeTest";
import Projects from "../Pages/Projects";
import ContactMe from "../Pages/ContactMe";
import AboutMe from "../Pages/AboutMe";
import IconButton from "@mui/material/IconButton";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import NightlightSharpIcon from "@mui/icons-material/NightlightSharp";
import TurningGears from "./TurningGears";
import { Box } from "@mui/material";

function Base({ setMode, mode }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  function toggleTheme() {
    setMode(!mode);
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          paddingRight: "15px",
        }}
      >
        <IconButton
          aria-label="Light-Dark mode switch"
          size="large"
          onClick={toggleTheme}
          color="primary"
        >
          {mode ? (
            <NightlightSharpIcon fontSize="inherit" />
          ) : (
            <LightModeSharpIcon fontSize="inherit" />
          )}
        </IconButton>
      </div>
      {pageIndex === 0 && <AboutMeTest />}
      {pageIndex === 1 && <Projects />}
      {pageIndex === 2 && <ContactMe />}
      {pageIndex === 3 && <AboutMe />}
      <Box
        width="275px"
        height="20px"
        style={{
          position: "fixed",
          bottom: 150,
          left: 25,
        }}
      >
        <TurningGears
          onClick={() => {
            if (pageIndex === 3) {
              setPageIndex(1);
            } else {
              setPageIndex(pageIndex + 1);
            }
            setRotation((prev) => prev + 120);
            // setTimeout(() => setClicked(false), 1000);
          }}
          rotation={rotation}
        />
      </Box>
    </div>
  );
}

export default Base;
