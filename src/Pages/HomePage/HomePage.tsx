import React, { FC } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export type HomePageProps = object;

export const HomePage: FC<HomePageProps> = () => {
  return (
    <Container maxWidth={false} sx={{ height: "75vh" }}>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid item xs={6} sx={{ height: "50%" }}>
          <Paper elevation={3} sx={{ width: "100%", height: "100%" }}>
            Recent Students
          </Paper>
        </Grid>
        <Grid item xs={6} sx={{ height: "50%" }}>
          <Paper elevation={3} sx={{ width: "100%", height: "100%" }}>
            IEP Templates
          </Paper>{" "}
        </Grid>
        <Grid item xs={6} sx={{ height: "50%" }}>
          <Paper elevation={3} sx={{ width: "100%", height: "100%" }}>
            Progress Templates
          </Paper>{" "}
        </Grid>
        <Grid item xs={6} sx={{ height: "50%" }}>
          <Paper elevation={3} sx={{ width: "100%", height: "100%" }}>
            Resources
          </Paper>{" "}
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
