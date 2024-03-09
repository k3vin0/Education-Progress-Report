import { FC, ReactNode } from "react";
import "./index.scss";
import { Sidebar } from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { NavigationItem } from "../Sidebar/components/NavItems/NavItems";
import HouseIcon from "@mui/icons-material/HouseTwoTone";
import SchoolIcon from "@mui/icons-material/SchoolTwoTone";
import ArticleIcon from "@mui/icons-material/ArticleTwoTone";

type LayoutProps = {
  header?: ReactNode;
  body: ReactNode;
  footer: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ body }) => {
  const navItems: NavigationItem[] = [
    { label: "Home", link: "/home", icon: <HouseIcon color="warning" /> },
    {
      label: "Students",
      link: "/students",
      icon: <SchoolIcon color="warning" />,
      children: [
        { label: "Home", link: "/home", icon: <HouseIcon color="warning" /> },
        { label: "Students", link: "/students" },
        { label: "IEP's", link: "/ieps" },
      ],
    },
    { label: "IEP's", link: "/ieps", icon: <ArticleIcon color="warning" /> },
  ];
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="w-full">
          <Header />
        </div>
        <section className="main-body_container">
          <aside>
            <Sidebar
              navigationItem={navItems}
              onClick={(link) => console.log(link)}
            />
          </aside>
          <div className="border-y-2 border-slate-500 w-full">{body}</div>
        </section>
      </div>
    </>
  );
};

export default Layout;