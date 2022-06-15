import * as React from "react";
import SimpleDateTime from "react-simple-timestamp-to-date";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Stock() {
  return (
    <React.Fragment>
      <Typography component="p" variant="h6" sx={{ textAlign: "center" }}>
        Mock up only!
      </Typography>
    </React.Fragment>
  );
}
