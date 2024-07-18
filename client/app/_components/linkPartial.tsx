import React from "react";
import Link from "next/link";

export default function LinkPartial({
  className,
  children,
  href,
}: {
  className: string;
  children: React.ReactNode;
  href?: string;
}) {
  return href !== undefined ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
}
