import React, { FC } from "react";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => (
  <>
    <MobileNavigation />
    <DesktopNavigation />
  </>
);
