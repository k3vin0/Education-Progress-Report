import React, { FC, ReactNode } from "react";

export type CLSimplePageTemplateProps = {
  title: string;
  titleHeaderRight: ReactNode;
  subtitle?: string;
  subtitleHeaderRight?: ReactNode;
  heroSection?: ReactNode;
  children?: ReactNode;
};

export const CLSimplePageTemplate: FC<CLSimplePageTemplateProps> = ({
  title,
  titleHeaderRight,
  subtitle,
  subtitleHeaderRight,
  heroSection,
  children,
}) => {
  return (
    <div className="h-full w-full">
      <header className="w-full flex flex-row justify-between">
        <div>{title}</div>
        <div>{titleHeaderRight}</div>
      </header>
      <section className="w-full flex flex-row justify-between">
        <div>{subtitle}</div>
        <div>{subtitleHeaderRight}</div>
      </section>
      <section>{heroSection}</section>
      {children}
    </div>
  );
};

export default CLSimplePageTemplate;
