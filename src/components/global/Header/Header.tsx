import { FC } from "react";

export type HeaderProps = {
  // Define your props here
};

export const Header: FC<HeaderProps> = () => {
  return (
    <div className="w-full h-16 flex flex-row bg-neutral-50">
      <div className="w-3/12">Connected Education</div>
      <div className="w-10/12 flex flex-row justify-between">
        <div>
          <span>Search</span>
        </div>
        <div>
          <span>Settings</span>
          <span>Notifications</span>
          <span>Avatar</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
