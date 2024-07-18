export default function Main({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <main className="min-h-screen lg:py-24 lg:px-64">
    <main className="flex min-h-screen flex-col items-center justify-start p-24 lg:px-64">
      {children}
    </main>
  );
}
