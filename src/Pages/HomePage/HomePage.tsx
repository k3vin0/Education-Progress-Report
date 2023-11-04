import React, { FC } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { StudentDataTable } from "./components";

export type HomePageProps = object;

export const HomePage: FC<HomePageProps> = () => {
  return (
    <Container maxWidth={false} sx={{ height: "75vh" }}>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid item xs={6} sx={{ height: "100%" }}>
          <Paper elevation={3} sx={{ width: "100%", height: "100%" }}>
            <StudentDataTable />
          </Paper>
        </Grid>
        <Grid item xs={6} sx={{ height: "97.2%" }}>
          <Paper elevation={3} sx={{ width: "100%", height: "50%", mb: 2 }}>
            {" "}
            {/* mb here is for margin-bottom */}
            IEP Templates
          </Paper>
          {/* Adding a margin to the bottom of the first Paper component creates a gap */}
          <Paper elevation={3} sx={{ width: "100%", height: "50%" }}>
            Resources
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
