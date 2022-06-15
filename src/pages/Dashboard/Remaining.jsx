import * as React from "react";
import SimpleDateTime from "react-simple-timestamp-to-date";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function preventDefault(event) {
  event.preventDefault();
}

export default function Remaining() {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CircularProgress
            variant="determinate"
            sx={{
              color: "#FF92A4",
              width: "100px",
              height: "100px",
              borderRadius: "100%",
              boxShadow: "inset 0 0 0px 13px #DCDCDC",
              backgroundColor: "transparent",
            }}
            size={150}
            value={70}
          ></CircularProgress>
        </Grid>
        <Grid item xs={6}>
          <Typography
            component="p"
            variant="h6"
            sx={{ textAlign: "flex-start", color: "#475362" }}
          >
            สินค้าคงเหลือ
          </Typography>
          <Typography
            component="p"
            variant="h6"
            pt={2}
            sx={{ textAlign: "center", color: "#FF92A4", fontSize: "50px" }}
          >
            70%
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
