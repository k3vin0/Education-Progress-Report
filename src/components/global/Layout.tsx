import React, { FC, ReactNode } from "react";
import { Container, Paper, Box } from "@mui/material";

type LayoutProps = {
  header: ReactNode;
  body: ReactNode;
  footer: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ header, body, footer }) => {
  return (
    <Container maxWidth={false} disableGutters>
      <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <Box sx={{ width: "100%" }}>{header}</Box>

        {/* Body */}
        <Box sx={{ flexGrow: 1, width: "100%" }}>
          <Paper elevation={1} sx={{ height: "100%", overflow: "auto" }}>
            <Box p={2}>{body}</Box>
          </Paper>
        </Box>

        {/* Footer */}
        <Box sx={{ width: "100%" }}>
          <Paper elevation={1}>
            <Box p={2}>{footer}</Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default Layout;
