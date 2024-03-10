import { FC } from "react";
import NavItems, { NavigationItem } from "./components/NavItems/NavItems";

export type SidebarProps = {
  navigationItem: NavigationItem[];
  onClick: (link: string) => void;
};

export const Sidebar: FC<SidebarProps> = ({ navigationItem, onClick }) => {
  return (
    <div className="flex flex-col w-60 h-full">
      {navigationItem.map((navItem) => (
        <NavItems
          navigationItem={navItem}
          onClick={
            onClick
              ? () => onClick(navItem.link ? navItem.link : "")
              : undefined
          }
        />
      ))}
    </div>
  );
};

export default Sidebar;
