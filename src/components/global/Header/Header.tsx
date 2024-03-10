import { Avatar, Popover } from "@mui/material";
import { FC, useState } from "react";
import NotificationsIcon from "@mui/icons-material/NotificationsTwoTone";
import SettingsIcon from "@mui/icons-material/SettingsTwoTone";
import AvatarMenu from "./components/AvatarMenu";

export type HeaderProps = {
  // Define your props here
};

export const Header: FC<HeaderProps> = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <header className="w-full h-16 flex flex-row bg-neutral-50 justify-center items-center">
      <div className="w-3/12">Connected Education</div>
      <nav className="w-10/12 flex flex-row justify-between items-center">
        <div>
          <div>Search</div>
        </div>
        <div className="flex flex-row w-32 align-center justify-between">
          <Popover
            id={id}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            onClose={handleClose}
            open={open}
          >
            The content of the Popover.
          </Popover>
          <Avatar>
            <SettingsIcon />
          </Avatar>
          <Avatar>
            <NotificationsIcon />
          </Avatar>
          <AvatarMenu
            id={id}
            anchor={anchorEl}
            handleClose={handleClose}
            onClick={handleClick}
            isOpen={open}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
