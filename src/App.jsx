import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layouts/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Registration from "./components/Registration/Registration";
import Students from "./Pages/Student/Students";
import StudentDetails from "./components/StudentDetails";
import Dashboard from "./components/Dashboard/Dashboard";
import Companies from "./components/Companies/Companies";
import CompanyRegistration from "./Pages/CompanyRegistration/CompanyRegistration";
import EditStudent from "./Pages/EditStudent/EditStudent";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />

      {/* Routes with Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Students />} />
        <Route path="/student/:id" element={<StudentDetails />} />
        <Route path="/student/edit/:id" element={<EditStudent />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* Company Registration */}
      <Route
        path="/company-registration"
        element={<CompanyRegistration />}
      />

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;