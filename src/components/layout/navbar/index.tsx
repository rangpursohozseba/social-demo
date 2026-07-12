import MobileNavbar from "@/components/layout/navbar/MobileNavbar";
import DesktopNavbar from "@/components/layout/navbar/DesktopNavbar";
import React from "react";
import MobileBottomNavbar from "@/components/layout/navbar/MobileBottomNavbar";

export default function Navbar() {
  return (
    <React.Fragment>
      <DesktopNavbar />
      <MobileNavbar />
      <MobileBottomNavbar />
    </React.Fragment>
  );
}
