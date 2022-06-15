import * as React from "react";
import SimpleDateTime from "react-simple-timestamp-to-date";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Product() {
  return (
    <React.Fragment>
      <Typography
        color="primary"
        component="p"
        variant="h3"
        sx={{ textAlign: "center", pt: 1.5 }}
      >
        500,000
      </Typography>

      {/* <Typography color="text.secondary" sx={{ flex: 1 }}>
        <SimpleDateTime
          dateSeparator="/"
          format="MYD"
          timeSeparator=":"
          meridians="1"
        >
          {new Date()}
        </SimpleDateTime>
      </Typography> */}
    </React.Fragment>
  );
}
