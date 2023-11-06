import React, { ReactNode } from "react";
import BottomNavigation from "../BottomNavigation";

const DefaultContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col flex-1">
      {children}
      <BottomNavigation />
    </div>
  );
};

export default DefaultContainer;
