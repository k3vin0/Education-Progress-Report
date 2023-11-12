import { FC, useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { ListItemButton } from "@mui/material";

const drawerWidth = 240;

type SidebarProps = {
  className: string;
};

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>();

  const handleListItemClick = (index: number | undefined) => {
    if (index) {
      setSelectedIndex(index);
    }
  };

  return (
    <Drawer
      className={`${className}`}
      data-testid="sidebar-test-class"
      sx={{
        width: drawerWidth,
        border: "none",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          backgroundColor: "transparent;",
          borderWidth: 0,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List sx={{ paddingTop: "2rem" }}>
        {["Home", "All Students", "Connections", "Chat"].map((text, index) => (
          <div key={index + 1}>
            <ListItemButton
              style={{ width: "300px" }}
              className={`menu-item ${
                selectedIndex === index + 1 ? "selected" : ""
              }`}
              key={index + 1}
              selected={selectedIndex === index + 1}
              onClick={() => handleListItemClick(index + 1)}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
              {/* {selectedIndex === index && (
                <div
                  style={{
                    backgroundColor: "white",
                    height: "5rem",
                    width: "30rem",
                    position: "absolute",
                    left: "200px",
                    borderRadius: "50px",
                  }}
                ></div>
              )} */}
            </ListItemButton>
          </div>
        ))}
      </List>
    </Drawer>
  );
};
