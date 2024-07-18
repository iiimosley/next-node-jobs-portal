export default function LinkBlocksContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-nowrap mx-auto text-center lg:flex-row lg:flex-wrap lg:items-center lg:justify-around lg:text-left">
      {children}
    </div>
  );
}
