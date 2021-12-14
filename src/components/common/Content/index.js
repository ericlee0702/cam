import React from "react";
import { Typography } from "@mui/material";

function P({style, children }) {
  return (
    <Typography
    style={style}
      sx={{
        pb: 1,
        textAlign: { sm: "center", xs: "center", md: "left" },
        color: "white",
        fontSize: { xs: 15, sm: 17, md: 19 },
        fontFamily: "press_start_2pregular",
        lineHeight: 1.2,
        mt:5
      }}
      dangerouslySetInnerHTML={{ __html: children }}
    >
      {/* {children} */}
    </Typography>
  );
}

export default P;
