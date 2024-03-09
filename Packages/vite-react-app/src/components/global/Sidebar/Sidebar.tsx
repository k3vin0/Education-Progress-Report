import React, { FC } from "react";

export type SidebarProps = {
  // Define your props here
};

export const Sidebar: FC<SidebarProps> = () => {
  return <div className="bg-blue-500 text-white p-4">Hello, Tailwind!</div>;
};

export default Sidebar;
