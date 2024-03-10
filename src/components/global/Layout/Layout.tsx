import { FC, ReactNode } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { NavigationItem } from "../Sidebar/components/NavItems/NavItems";
import { ComponentConfigurations } from "../../../shared/config";

/**
 * Type definition for the props that the Layout component will accept.
 * @typedef {Object} LayoutProps
 * @property {ReactNode} [header] - Optional React node for the header part of the layout.
 * @property {ReactNode} body - React node for the main content part of the layout.
 * @property {ReactNode} [footer] - Optional React node for the footer part of the layout.
 */

type LayoutProps = {
  header?: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
};

/**
 * The Layout component that arranges the header, sidebar, and main content areas.
 *
 * @component
 * @param {LayoutProps} props - The destructured props object for the Layout component.
 * @param {ReactNode} props.body - The main content to be rendered in the layout's body section.
 * @returns {ReactNode} The React node representing the complete layout structure.
 */
export const Layout: FC<LayoutProps> = ({ body }) => {
  // Extract the navigation items from the component configurations.
  const navItems: NavigationItem[] = ComponentConfigurations.navItems;
  return (
    <>
      <div className="flex flex-col w-full bg-neutral-50">
        {/* Sticky header */}
        <div className="w-full sticky top-0 z-10 border-b-2 border-slate-500">
          <Header />
        </div>
        {/* Main content and sidebar layout */}
        <section className="flex flex-row h-screen">
          {/* Sticky sidebar */}
          <div className="sticky px-2 top-16 h-[calc(100vh-65px)] w-80 overflow-y-hidden">
            <Sidebar
              navigationItem={navItems}
              onClick={(link) => console.log(link)}
            />
          </div>
          {/* Scrollable content area */}
          <div className=" h-[calc(100vh-65px)] w-full overflow-auto">
            {body}
          </div>
        </section>
      </div>
    </>
  );
};

export default Layout;
