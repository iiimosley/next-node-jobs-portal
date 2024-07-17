export default function LinkBlocksContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-32 flex flex-col flex-nowrap items-center text-center lg:flex-row lg:flex-wrap lg:items-start lg:justify-around lg:text-left">
      {children}
    </div>
  );
}
