import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Hero, Events, Donate, Alumini, JobPortal  } from "./components/Index.js";
import Layout from "./Layout";
import Testi from "./components/Testimonials/Testi.jsx";
import Paypg from "./components/Payment/Paypg.jsx";
import DirPortal from "./components/Directory/DirPortal.jsx";
import Landing from "./components/Landing/Landing.jsx";
import SignIn from "./components/SignIn.jsx";
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Register from './components/Register/Register.jsx'
import JobForm from './components/JobPortal/JobForm.jsx'
import Blogs from "./components/Blog-Page/Blogs.jsx";
import Write from './components/Blog-Page/pages/Write/Write.jsx'
import Mpn from "./components/Mpn.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ScrollToTop/>
  <Routes>
    <Route path="/" element={<Layout />}>
      {/* <Route path="" element={<Hero />} /> */}
      <Route path="" element={<Landing />} />
      <Route path="events" element={<Events />} />
      <Route path="jobportal" element={<JobPortal />} />
      <Route path='donate' element={<Donate />} />
      <Route path='write' element={<Write />} />
      <Route path='mpn' element={<Mpn />} />
      
      <Route path='signin' element={<SignIn />} />
      <Route path='register' element={<Register />} />
      <Route path='jobform' element={<JobForm />} />
      <Route path='social' element={<Blogs/>} />
      <Route path="alumdir" element={<Alumini />} />
      <Route path="dirportal" element={<DirPortal/>} />
      <Route path="dashboard" element={<Dashboard/>} />
      <Route path="donate/Payment" element={<Paypg />} />
      <Route path="testimonial" element={<Testi />} />
 
    </Route>
  </Routes>
</BrowserRouter>
);
