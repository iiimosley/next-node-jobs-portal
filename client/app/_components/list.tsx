import React from "react";

function ListType({
  numbered,
  children,
}: {
  numbered: boolean;
  children: React.ReactNode;
}) {
  const props = {
    className: `p-2 list-inside ${numbered ? "list-decimal" : "list-disc"}`,
  };

  return numbered ? (
    <ol {...props}>{children}</ol>
  ) : (
    <ul {...props}>{children}</ul>
  );
}

export default function List({
  title,
  subtitle,
  children,
  numbered = false,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  numbered?: boolean;
}) {
  const listType = numbered ? "list-decimal" : "list-disc";

  return (
    <div>
      <h2 className="text-xl font-bold">{title}</h2>
      {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
      <ListType numbered={numbered}>{children}</ListType>
    </div>
  );
}
