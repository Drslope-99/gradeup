import StudentSidebar from "@/features/student/components/StudentSidebar";
import StudentNavbar from "@/features/student/components/StudentNavbar";
export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen gap-4">
      {/* LEFT COLUMN */}
      <StudentSidebar />
      {/* RIGHT COLUMN */}
      <div className="flex flex-1 flex-col bg-white rounded-xl ">
        {/* TOP NAVBAR */}
        <StudentNavbar />
        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
