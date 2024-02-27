import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// I have used here Lazy laoding  using "React.Lazy() method where i have passed import statment for component
//  as a parameter using callback function".

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const ContactUs = React.lazy(() => import("./ContactUs"));

const root = ReactDOM.createRoot(document.getElementById("root"));
// Suspense component is used to follow Lazy loading in any react app
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route
          index
          element={
            <Suspense fallback={<div>Loading...Please wait..</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="home"
          element={
            <Suspense fallback={<div>Loading...Please wait..</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<div>Loading...Please wait..</div>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<div>Loading...Please wait..</div>}>
              <ContactUs />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
