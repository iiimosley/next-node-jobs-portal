import React from "react";

export default function InlineCenterContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    // Lord help me...
    <div className="flex justify-center">
      <div className={`inline-block ${className}`}>{children}</div>
    </div>
  );
}
