import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import theme from "../theme";
import { color } from "@mui/system";

const DarkModeButton = () => {
  // const [dark, setDark] = useState({});
  // const handleClick = () => {};
  return (
    <>
      <IconButton aria-label="dark-mode" disableRipple>
        <DarkModeOutlinedIcon
          sx={{ color: "#111517", fontSize: "16px", marginRight: "8px" }}
        />
        <span style={{ fontSize: "14px", color: "#111517" }}>Dark Mode</span>
      </IconButton>
    </>
  );
};

export default DarkModeButton;
