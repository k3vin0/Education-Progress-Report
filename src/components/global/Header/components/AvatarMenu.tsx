import { Popover, Avatar } from "@mui/material";
import React, { FC } from "react";

/**
 * Defines the props for the AvatarMenu component.
 *
 * @typedef {Object} AvatarMenuProps
 * @property {string | undefined} id - The unique identifier for the Popover component.
 * @property {HTMLDivElement | null} anchor - The DOM element used as the anchor for the Popover.
 * @property {boolean} isOpen - Flag indicating whether the Popover is open.
 * @property {string} [src="/static/images/avatar/1.jpg"] - The source URL for the Avatar image.
 * @property {string} [alt="Remy Sharp"] - The alt text for the Avatar image.
 * @property {(event: React.MouseEvent<HTMLDivElement>) => void} onClick - The click event handler for the Avatar.
 * @property {() => void} handleClose - The function to call to close the Popover.
 */
export type AvatarMenuProps = {
  id: string | undefined;
  anchor: HTMLDivElement | null;
  isOpen: boolean;
  src?: string;
  alt?: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleClose: () => void;
};

/**
 * A functional component that renders an avatar with a clickable Popover.
 * The Popover appears relative to the element specified by the `anchor` prop.
 * The Popover can be closed by triggering the `handleClose` function.
 *
 * @param {AvatarMenuProps} props - The props for the AvatarMenu component.
 * @param {string | undefined} props.id - The unique identifier for the Popover component.
 * @param {HTMLDivElement | null} props.anchor - The DOM element used as the anchor for the Popover.
 * @param {boolean} props.isOpen - Flag indicating whether the Popover is open.
 * @param {string} [props.src="/static/images/avatar/1.jpg"] - The source URL for the Avatar image.
 * @param {string} [props.alt="Remy Sharp"] - The alt text for the Avatar image.
 * @param {(event: React.MouseEvent<HTMLDivElement>) => void} props.onClick - The click event handler for the Avatar.
 * @param {() => void} props.handleClose - The function to call to close the Popover.
 * @returns {JSX.Element} The AvatarMenu component comprising a Popover and an Avatar.
 */
export const AvatarMenu: FC<AvatarMenuProps> = ({
  id,
  anchor,
  isOpen,
  src = "/static/images/avatar/1.jpg",
  alt = "Remy Sharp",
  onClick,
  handleClose,
}) => {
  return (
    <>
      <Popover
        id={id}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handleClose}
        open={isOpen}
      >
        The content of the Popover.
      </Popover>
      <Avatar onClick={(event) => onClick(event)} alt={alt} src={src} />
    </>
  );
};

export default AvatarMenu;
