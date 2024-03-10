import { Avatar } from "@mui/material";
import { FC, useCallback, useState } from "react";
import NotificationsIcon from "@mui/icons-material/NotificationsTwoTone";
import SettingsIcon from "@mui/icons-material/SettingsTwoTone";
import AvatarMenu, { MenuOptions } from "./components/AvatarMenu";
import { ComponentConfigurations } from "../../../shared/config";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useGlobalStore } from "../../../hooks/useGlobalStore";

export type HeaderProps = {
  // Define your props here
};

export const Header: FC<HeaderProps> = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const { user } = useGlobalStore();
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = useCallback(async () => {
    console.log("Logging out!");

    try {
      await signOut(auth);
      // Sign-in successful.
      console.log("Logout successful");
      navigate("");
    } catch (error) {
      // Handle errors here.
      console.error("Error logging out: ", error);
    }
  }, [navigate]);

  const handleMenuClick = (item: MenuOptions) => {
    if (item.label === "Logout") {
      logout();
    }
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
            handleMenu={handleMenuClick}
            isOpen={open}
            menuOptions={ComponentConfigurations.avatarMenuOptions}
            alt={user?.displayName}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
