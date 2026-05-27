export default function AuthLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-screen-2xl p-4 w-full mx-auto">{children}</main>
  );
}
