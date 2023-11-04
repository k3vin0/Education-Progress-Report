import React, { FC, ReactNode } from "react";

export type StudentDetailProps = {
  // Define your props here
  children?: ReactNode;
};

export const StudentDetail: FC<StudentDetailProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default StudentDetail;
