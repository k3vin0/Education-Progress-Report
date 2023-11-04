import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Layout } from "./components/global/Layout";
import { Header } from "./components/global/Header";

// LayoutWrapper wraps children with the Layout component
const LayoutRoute = () => (
  <Layout
    header={<Header />}
    body={<Outlet />} // The Outlet component will render the matched child route.
    footer={<div>Footer</div>}
  />
);

// HomePage.tsx
const HomePage = () => <div>Home Page Content</div>;

// AboutPage.tsx
const AboutPage = () => <div>About Page Content</div>;

// ContactPage.tsx
const ContactPage = () => <div>Contact Page Content</div>;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutRoute />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* More child routes can be added here */}
        </Route>
        {/* More parent routes can be added here */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
