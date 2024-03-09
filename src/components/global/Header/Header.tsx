import React, { FC } from "react";

export type HeaderProps = {
  // Define your props here
};

export const Header: FC<HeaderProps> = () => {
  return (
    <div className="w-full h-16 flex flex-row">
      <div className="w-2/12">Icon</div>
      <div className="w-10/12">
        <span>content</span>
        <span>content</span>
        <span>content</span>
      </div>
    </div>
  );
};

export default Header;
