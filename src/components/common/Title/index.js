import React from "react";
import { Typography } from "@mui/material";

function H({style, children }) {
  return (
    <Typography
    style={style}
      sx={{
        pb: 2,
        textAlign: { sm: "center", xs: "center", md: "left" },
        color: "#74CBD3",
        fontSize: { xs: 20, sm: 30, md: 45 },
        fontFamily: "press_start_2pregular",
        lineHeight: 1,
        textTransform: 'uppercase',
        mt:15
      }}
    >
      {children}
    </Typography>
  );
}

export default H;
