import LinkPartial from "@components/linkPartial";
import React from "react";

export default function LinkBlock({
  title,
  description,
  href,
  disabled = false,
  className,
}: {
  title: string;
  description: string;
  href?: string;
  disabled?: boolean;
  className?: string;
}) {
  // Disable link block if href is not provided
  disabled = !disabled && href === undefined;

  return (
    <LinkPartial
      href={href}
      className={`group rounded-lg border border-transparent self-center lg:self-stretch mt-4 lg:mt-8 px-10 py-7 w-80 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${className}`}
    >
      <div>
        <h2 className="mx-auto mb-3 text-2xl font-semibold">
          {title}{" "}
          {!disabled && (
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          )}
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">{description}</p>
      </div>
    </LinkPartial>
  );
}
