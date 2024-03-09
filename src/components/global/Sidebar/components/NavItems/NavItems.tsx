import { FC, ReactNode, useState } from "react";

export type NavigationItemChildren = {
  label: string;
  link?: string;
  icon?: ReactNode;
};
export type NavigationItem = {
  label: string;
  link?: string;
  icon?: ReactNode;
  children?: NavigationItemChildren[];
};

export type NavItemsProps = {
  navigationItem: NavigationItem;
  onClick?: (link: string) => void;
};

export const NavItems: FC<NavItemsProps> = ({ navigationItem, onClick }) => {
  const { label, link, children, icon } = navigationItem;
  const [showChildren, setShowChildren] = useState<boolean>(false);
  return (
    <>
      <div
        className="w-full h-15 hover:bg-teal-300 p-4"
        onClick={
          link && onClick
            ? () => {
                onClick(link), children && setShowChildren(!showChildren);
              }
            : () => children && setShowChildren(!showChildren)
        }
      >
        <div className="flew flex-row items-center content-center ">
          <div className="flex flex-row items-center content-center gap-2">
            {icon}
            <span>{label}</span>
          </div>
        </div>
      </div>
      <div>
        {showChildren && (
          <div>
            {children?.map((child) => (
              <div className="w-full h-15 hover:bg-teal-300 p-4 flex flex-row items-center content-center gap-2">
                <div>{child.icon}</div>
                <div>{child.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NavItems;
