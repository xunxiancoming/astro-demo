import React from "react";

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-pink-100/20 shadow-md rounded-sm  dark:bg-slate-500/30 dark:backdrop-blur-md p-4 ${className}`}
    >
      {children}
    </div>
  );
};
