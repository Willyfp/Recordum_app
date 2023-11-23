import React, { ReactNode } from "react";
import BottomNavigation from "../BottomNavigation";

const DefaultContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col h-full w-full bg-primary_bg">
      <div className="flex flex-col flex-1 bg-primary_bg pb-[4.6875rem]">
        {children}
      </div>
      <BottomNavigation />
    </div>
  );
};

export default DefaultContainer;
