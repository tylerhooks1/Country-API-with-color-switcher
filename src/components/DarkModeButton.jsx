import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import theme from "../theme";

const DarkModeButton = () => {
  // const [dark, setDark] = useState({});
  // const handleClick = () => {};
  return (
    <>
      <IconButton
        aria-label="dark-mode"
        disableRipple
        sx={{ color: "lightMode.text" }}
      >
        <DarkModeOutlinedIcon
          sx={{
            fontSize: "16px",
            marginRight: "8px",
          }}
        />
        <span
          style={{
            fontSize: "14px",
          }}
        >
          Dark Mode
        </span>
      </IconButton>
    </>
  );
};

export default DarkModeButton;
