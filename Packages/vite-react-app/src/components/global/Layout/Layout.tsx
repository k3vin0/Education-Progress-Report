import { FC, ReactNode } from "react";
import "./index.scss";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header";

type LayoutProps = {
  header?: ReactNode;
  body: ReactNode;
  footer: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ body }) => {
  return (
    <>
      <div className="app-container_wrapper">
        <Header />
        <section className="main-body_container">
          <aside>
            <Sidebar />
          </aside>
          <div className="body-content">{body}</div>
        </section>
      </div>
      {/* <Header />
      <section className="animated-grid">
        <aside>
          <Sidebar className="side-nav" />
        </aside>
        <div className="body-content">{body}</div>
      </section> */}
    </>
  );
};

export default Layout;
