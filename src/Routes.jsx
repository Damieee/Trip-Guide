import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";

const SignUp = React.lazy(() => import("pages/SignUp"));
const SignIn = React.lazy(() => import("pages/SignIn"));
const BookingstepThree = React.lazy(() => import("pages/BookingstepThree"));
const BookingstepTwo = React.lazy(() => import("pages/BookingstepTwo"));
const BookingstepOne = React.lazy(() => import("pages/BookingstepOne"));
const Lastminutedeals = React.lazy(() => import("pages/Lastminutedeals"));
const Main = React.lazy(() => import("pages/Main"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/lastminutedeals" element={<Lastminutedeals />} />

            <Route path="/bookingstepone" element={<BookingstepOne />} />
            <Route path="/bookingsteptwo" element={<BookingstepTwo />} />
            <Route path="/bookingstepthree" element={<BookingstepThree />} />

            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />

        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
