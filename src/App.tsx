import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Layout } from "./components/global/Layout/Layout";
import { Header } from "./components/global/Header";
import { HomePage } from "./Pages/HomePage/HomePage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import StudentDetails from "./Pages/StudentDetailPage/StudentDetailPage";
import ProgressTrackingPage from "./Pages/ProgressTrackingPage/ProgressTrackingPage";
import Login from "./Pages/LoginPage/Login";
import { useState, useEffect } from "react";

// LayoutWrapper wraps children with the Layout component
const LayoutRoute = () => (
  <Layout
    header={<Header />}
    body={<Outlet />} // The Outlet component will render the matched child route.
    footer={<div style={{ backgroundColor: "black" }}>Footer</div>}
  />
);

// HomePage.tsx

// AboutPage.tsx
const AboutPage = () => <div>About Page Content</div>;

// ContactPage.tsx
const ContactPage = () => <div>Contact Page Content</div>;

const App = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  console.log(user);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // User is signed out.
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutRoute />}>
          <Route index element={<Login />} />
          <Route path="/home" element={<HomePage />} />
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
