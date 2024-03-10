import { FC, ReactNode } from "react";
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
      <div className="flex flex-col w-full bg-neutral-50">
        <div className="w-full sticky top-0 z-10 border-b-2 border-slate-500">
          <Header />
        </div>
        <section className="flex flex-row h-screen">
          {" "}
          {/* Ensure the parent has enough height */}
          <div className="sticky px-2 top-16 h-[calc(100vh-65px)] w-80 overflow-y-hidden">
            {" "}
            {/* Adjusted for the sticky sidebar */}
            <Sidebar
              navigationItem={navItems}
              onClick={(link) => console.log(link)}
            />
          </div>
          <div className=" h-[calc(100vh-65px)] w-full overflow-auto">
            {body}
          </div>
        </section>
      </div>
    </>
  );
};

export default Layout;
