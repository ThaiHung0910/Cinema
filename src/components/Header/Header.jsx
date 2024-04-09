
import React from "react";

import { ResponsiveDesktop, ResponsiveMobile, ResponsiveTablet } from "../../HOC/responsive";
import HeaderDesktop from "./HeaderDeskTop/HeaderDesktop";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import HeaderTablet from "./HeaderTablet/HeaderTablet";


export default function Header() {
  return (
    <>
      <ResponsiveDesktop>
        <HeaderDesktop />
      </ResponsiveDesktop>
      <ResponsiveTablet>
        <HeaderTablet />
      </ResponsiveTablet>
      <ResponsiveMobile>
        <HeaderMobile />
      </ResponsiveMobile>
    </>
  );
}
