import React, { FC, ReactNode } from "react";
import "./index.scss";
import { Sidebar } from "../Sidebar";

type LayoutProps = {
  header: ReactNode;
  body: ReactNode;
  footer: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ header, body }) => {
  return (
    <section className="animated-grid">
      <Sidebar className="side-nav" />
      <div className="search_header">{header}</div>
      <div className="body-content">{body}</div>
    </section>
    // <Container maxWidth={false} disableGutters>
    //   <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
    //     {/* Header */}

    //     {/* Body */}
    //     <Box sx={{ flexGrow: 1, width: "100%" }}>
    //       <Paper elevation={1} sx={{ height: "100%", overflow: "auto" }}>
    //         <Box sx={{ width: "100%" }}>{header}</Box>
    //         <Box p={2}>{body}</Box>
    //       </Paper>
    //     </Box>

    //     {/* Footer */}
    //     <Box sx={{ width: "100%" }}>
    //       <Paper elevation={1}>
    //         <Box p={2}>{footer}</Box>
    //       </Paper>
    //     </Box>
    //   </Box>
    // </Container>
  );
};

export default Layout;
