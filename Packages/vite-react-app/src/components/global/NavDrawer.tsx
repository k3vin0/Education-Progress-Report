import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

type Anchor = "top" | "left" | "bottom" | "right";

export type SwipeableTemporaryDrawerProps = {
  visible: boolean;
  onClose: () => void;
};

export const SwipeableTemporaryDrawer: FC<SwipeableTemporaryDrawerProps> = ({
  visible,
  onClose,
}) => {
  const navigate = useNavigate();
  const handleNavigation = (item: string) => {
    if (item === "Home") {
      navigate("/");
    }
    if (item === "Student details") {
      navigate("/student-details");
    }
    if (item === "Progress Tracking") {
      navigate("/progress-tracking");
    }
  };
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <List>
        {[
          "Home",
          "Progress Tracking",
          "Behavioral Tracking",
          "Student details",
          "Drafts",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                onClick={() => handleNavigation(text)}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor={"left"}
          open={visible}
          onClose={onClose}
          onOpen={onClose}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};
