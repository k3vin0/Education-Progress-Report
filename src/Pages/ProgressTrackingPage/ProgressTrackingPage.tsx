import React, { FC } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export type ProgressTrackingPageProps = {
  // Define your props here
};

export const ProgressTrackingPage: FC<ProgressTrackingPageProps> = () => {
  return (
    <Container maxWidth={false} sx={{ height: "75vh" }}>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid item xs={6} sx={{ height: "50%" }}>
          <Paper elevation={3} sx={{ width: "100%", height: "100%" }}>
            Math
          </Paper>
        </Grid>
        <Grid item xs={6} sx={{ height: "50%" }}>
          <Paper elevation={3} sx={{ width: "100%", height: "100%" }}>
            Science
          </Paper>{" "}
        </Grid>
        <Grid item xs={12} sx={{ height: "50%" }}>
          <Paper elevation={3} sx={{ width: "100%", height: "100%" }}>
            Language Arts
          </Paper>{" "}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProgressTrackingPage;
