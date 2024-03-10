import { Avatar, Menu, MenuItem } from "@mui/material";
import React, { FC } from "react";

export type MenuOptions = {
  label: string;
  desc?: string;
  index?: number;
};
/**
 * Defines the properties for the AvatarMenu component.
 *
 * @typedef {Object} AvatarMenuProps
 * @property {string | undefined} id - The unique identifier for the Menu component. Defaults to "basic-menu" if not provided.
 * @property {HTMLDivElement | null} anchor - The DOM element used as the anchor for the Menu.
 * @property {boolean} isOpen - Flag indicating whether the Menu is open.
 * @property {string} [src="/static/images/avatar/1.jpg"] - The source URL for the Avatar image. Defaults to "/static/images/avatar/1.jpg".
 * @property {string} [alt="Remy Sharp"] - The alt text for the Avatar image. Defaults to "Remy Sharp".
 * @property {(event: React.MouseEvent<HTMLDivElement>) => void} onClick - The click event handler for the Avatar.
 * @property {() => void} handleClose - The function to call to close the Menu.
 */
export type AvatarMenuProps = {
  id: string | undefined;
  anchor: HTMLDivElement | null;
  isOpen: boolean;
  src?: string;
  alt?: string;
  menuOptions: MenuOptions[];
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleClose: () => void;
  handleMenu: (item: MenuOptions) => void;
};

/**
 * Renders an Avatar component with an associated Menu. The Menu appears relative to the element specified by the `anchor` prop and contains menu items like 'Profile', 'My account', and 'Logout'. The Menu and its items can be closed by triggering the `handleClose` function.
 *
 * @param {AvatarMenuProps} props - The properties passed to the AvatarMenu component.
 * @param {string | undefined} props.id - The unique identifier for the Menu component. Defaults to "basic-menu" if not provided.
 * @param {HTMLDivElement | null} props.anchor - The DOM element used as the anchor for the Menu.
 * @param {boolean} props.isOpen - Indicates whether the Menu is open.
 * @param {string} [props.src="/static/images/avatar/1.jpg"] - The source URL for the Avatar image. Defaults to "/static/images/avatar/1.jpg".
 * @param {string} [props.alt="Remy Sharp"] - The alt text for the Avatar image. Defaults to "Remy Sharp".
 * @param {(event: React.MouseEvent<HTMLDivElement>) => void} props.onClick - The click event handler for the Avatar.
 * @param {() => void} props.handleClose - The function to call to close the Menu.
 * @returns {JSX.Element} The AvatarMenu component comprising an Avatar and a Menu with items.
 */
export const AvatarMenu: FC<AvatarMenuProps> = ({
  id,
  anchor,
  isOpen,
  src = "/static/images/avatar/1.jpg",
  alt = "Remy Sharp",
  menuOptions,
  onClick,
  handleClose,
  handleMenu,
}) => {
  return (
    <>
      <Menu
        id={id || "basic-menu"}
        anchorEl={anchor}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {menuOptions?.map((item, index) => (
          <MenuItem
            id={`${index.toString}-${item.label}`}
            onClick={() => handleMenu(item)}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
      <Avatar onClick={(event) => onClick(event)} alt={alt} src={src} />
    </>
  );
};

export default AvatarMenu;
