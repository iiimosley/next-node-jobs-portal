import React from "react";
import LinkPartial from "../linkPartial";

export default function Header({
  title,
  href,
}: {
  title: string;
  href?: string;
}) {
  return (
    <LinkPartial
      href={href}
      className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"
    >
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        {title}
      </p>
    </LinkPartial>
  );
}
