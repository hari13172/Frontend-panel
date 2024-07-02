import React from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import WireGuard from "./WireGuard";
import Vpn from "./Vpn";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import Testimonial from "./Testimonial";

function AppRoutes() {
  return (
    <RouterRoutes>
      <Route path="/wireguard" element={<WireGuard />} />
      <Route path="/vpn" element={<Vpn />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonial" element={<Testimonial />} />
    </RouterRoutes>
  );
}

export default AppRoutes;
