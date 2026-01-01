import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div className={`mx-auto max-w-[1170px] px-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
