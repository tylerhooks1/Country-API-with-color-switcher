import React from "react";
import IconButton from "@mui/material/IconButton";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const DarkModeButton = () => {
  return (
    <>
      <IconButton aria-label="dark-mode" disableRipple>
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
