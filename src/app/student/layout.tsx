import StudentSidebar from "@/features/student/components/StudentSidebar";
import StudentNavbar from "@/features/student/components/StudentNavbar";
export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen gap-4">
      {/* LEFT COLUMN */}
      <StudentSidebar />
      {/* RIGHT COLUMN */}
      <div className="flex flex-1 flex-col bg-white rounded-xl min-h-0">
        {/* TOP NAVBAR */}
        <StudentNavbar />
        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl sit amet consectetur consequat, nisl nunc egestas
            nisi, euismod aliquam nisl nunc eu nisl. Curabitur sit amet magna
            quis justo dignissim aliquam. Donec at nisl ac nisi efficitur
            tincidunt. Integer vitae lacus vel arcu gravida ullamcorper.
            Suspendisse potenti. Nulla facilisi. Phasellus vitae risus non
            turpis tempus viverra. Aenean eget purus vitae ipsum ultricies
            viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum euismod, nisl sit amet aliquam tincidunt, nisl nunc
            aliquet nisi, eu aliquet nisl nunc eu nisl. Morbi non ligula nec
            neque cursus tempor. Praesent nec sem at erat feugiat gravida. Sed
            non purus vel orci efficitur malesuada. Integer in neque sed justo
            dictum tincidunt. Aliquam erat volutpat. Proin eget arcu at nisl
            efficitur tincidunt. Curabitur feugiat, nisi at facilisis fermentum,
            nisl nunc ultricies nisi, eu ultricies nisl nunc eu nisl. Donec
            euismod, nisl sit amet consectetur lacinia, nisl nunc egestas nisi,
            vitae aliquam nisl nunc eu nisl. Aenean vitae nulla id eros dictum
            pharetra. Cras at odio ac nisi cursus varius. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Suspendisse potenti. Integer vitae sapien nec ligula
            commodo tincidunt. Sed sit amet nulla sed massa aliquam tincidunt.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Donec euismod, nisl sit amet consectetur
            gravida, nisl nunc tincidunt nisi, eget tincidunt nisl nunc eu nisl.
            Phasellus auctor, nisl a aliquet suscipit, nisl nunc egestas nisi,
            sed euismod nisl nunc eu nisl. Mauris sed turpis nec ligula
            tincidunt posuere. Donec eget nisl vitae lorem efficitur tincidunt.
            Integer ac nisl id arcu fermentum gravida. Vestibulum euismod, nisl
            sit amet aliquam consequat, nisl nunc aliquet nisi, eu aliquet nisl
            nunc eu nisl. Aliquam erat volutpat. Sed euismod, nisl sit amet
            consectetur ultricies, nisl nunc egestas nisi, vitae aliquam nisl
            nunc eu nisl. Proin sit amet magna at arcu fermentum vehicula.
            Curabitur non nisl nec nisl facilisis tincidunt. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Sed euismod, nisl sit amet consectetur tincidunt,
            nisl nunc egestas nisi, eu aliquet nisl nunc eu nisl. Donec vitae
            sapien id nisl fermentum gravida. Aliquam erat volutpat. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Donec in nisl ac justo feugiat porta. Integer sit
            amet nisl nec ligula bibendum efficitur. Sed euismod, nisl sit amet
            consectetur malesuada, nisl nunc egestas nisi, eu aliquet nisl nunc
            eu nisl. Cras non nisl id elit interdum luctus. Phasellus euismod,
            nisl sit amet aliquam tincidunt, nisl nunc aliquet nisi, eu aliquet
            nisl nunc eu nisl. Donec vitae nisl nec arcu tincidunt tincidunt.
            Mauris euismod, nisl sit amet consectetur luctus, nisl nunc egestas
            nisi, vitae aliquam nisl nunc eu nisl. Integer ac nisl id urna
            commodo faucibus. Sed sit amet nulla at orci pharetra cursus.
            Vestibulum a nisl at nisl consequat ullamcorper. Donec euismod, nisl
            sit amet consectetur tincidunt, nisl nunc egestas nisi, eu aliquet
            nisl nunc eu nisl. Morbi sed nisl vitae lorem aliquam tincidunt.
            Curabitur at nisl ac lorem luctus viverra. Integer vitae nisl nec
            ligula dictum tincidunt. Sed euismod, nisl sit amet consectetur
            posuere, nisl nunc egestas nisi, vitae aliquam nisl nunc eu nisl.
            Praesent sed nisl vitae lorem ultricies tincidunt. Aliquam erat
            volutpat. Integer at nisl nec lacus dignissim tincidunt. Donec
            euismod, nisl sit amet consectetur gravida, nisl nunc egestas nisi,
            eu aliquet nisl nunc eu nisl. Fusce euismod, nisl sit amet aliquam
            tincidunt, nisl nunc aliquet nisi, eu aliquet nisl nunc eu nisl.
            Mauris vitae nisl ac arcu cursus tincidunt. Integer sit amet nisl
            nec ligula fermentum feugiat. Vestibulum euismod, nisl sit amet
            consectetur lacinia, nisl nunc egestas nisi, eu aliquet nisl nunc eu
            nisl. Donec at nisl ac justo facilisis ullamcorper. Sed euismod,
            nisl sit amet consectetur tincidunt, nisl nunc egestas nisi, vitae
            aliquam nisl nunc eu nisl. Proin vitae nisl nec magna aliquam
            tincidunt. Curabitur sit amet nisl vitae arcu dictum pharetra.
            Integer euismod, nisl sit amet consectetur gravida, nisl nunc
            egestas nisi, eu aliquet nisl nunc eu nisl. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed euismod, nisl sit amet
            consectetur consequat, nisl nunc egestas nisi, euismod aliquam nisl
            nunc eu nisl. Curabitur sit amet magna quis justo dignissim aliquam.
            Donec at nisl ac nisi efficitur tincidunt. Integer vitae lacus vel
            arcu gravida ullamcorper. Suspendisse potenti. Nulla facilisi.
            Phasellus vitae risus non turpis tempus viverra. Aenean eget purus
            vitae ipsum ultricies viverra. Vestibulum euismod, nisl sit amet
            aliquam tincidunt, nisl nunc aliquet nisi, eu aliquet nisl nunc eu
            nisl. Morbi non ligula nec neque cursus tempor. Praesent nec sem at
            erat feugiat gravida. Sed non purus vel orci efficitur malesuada.
            Integer in neque sed justo dictum tincidunt. Aliquam erat volutpat.
            Proin eget arcu at nisl efficitur tincidunt. Curabitur feugiat, nisi
            at facilisis fermentum, nisl nunc ultricies nisi, eu ultricies nisl
            nunc eu nisl. Donec euismod, nisl sit amet consectetur lacinia, nisl
            nunc egestas nisi, vitae aliquam nisl nunc eu nisl. Aenean vitae
            nulla id eros dictum pharetra. Cras at odio ac nisi cursus varius.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
        </main>
      </div>
    </div>
  );
}
