import { FC, ReactNode } from "react";

interface CardContainerProps {
  children: ReactNode;
}

export const CardContainer: FC<CardContainerProps> = ({ children }) => {
  return (
    <div
      className="
    grid 
    grid-cols-2 
    sm:grid-cols-3 
    md:grid-cols-3 
    lg:grid-cols-4 
    xl:grid-cols-5 
    2xl:grid-cols-6 
    gap-4 
  "
    >
      {children}
    </div>
  );
};
