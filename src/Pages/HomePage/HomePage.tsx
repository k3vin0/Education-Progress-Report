import React, { FC, ReactNode } from "react";

export type HomePageProps = {
  // Define your props here
  children?: ReactNode;
};

export const HomePage: FC<HomePageProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default HomePage;
