import { ContainerProps } from "@/types/type";
import React from "react";

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-285 px-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
