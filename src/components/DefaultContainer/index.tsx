import React, { ReactNode } from "react";
import BottomNavigation from "../BottomNavigation";

const DefaultContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col h-full w-full bg-primary_bg">
      {children}
      <BottomNavigation />
    </div>
  );
};

export default DefaultContainer;
