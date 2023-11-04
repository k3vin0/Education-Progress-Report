import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Layout } from "./components/global/Layout";
import { Header } from "./components/global/Header";
import { HomePage } from "./Pages/HomePage/HomePage";
import StudentDetails from "./Pages/StudentDetailPage/StudentDetailPage";
import ProgressTrackingPage from "./Pages/ProgressTrackingPage/ProgressTrackingPage";

// LayoutWrapper wraps children with the Layout component
const LayoutRoute = () => (
  <Layout
    header={<Header />}
    body={<Outlet />} // The Outlet component will render the matched child route.
    footer={<div>Footer</div>}
  />
);

// HomePage.tsx

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
          <Route path="/student-details" element={<StudentDetails />} />
          <Route path="/progress-tracking" element={<ProgressTrackingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* More child routes can be added here */}
        </Route>
        {/* More parent routes can be added here */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
