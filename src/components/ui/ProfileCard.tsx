import Image from "next/image";
import type { TeamMember } from "@/types/content";

/** Displays a single team member's photo, name, role and short bio. */
export default function ProfileCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
      <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full bg-gia-light">
        {/* TODO: Replace with real headshot photo */}
        <Image
          src={member.photo?.src ?? "https://placehold.co/200x200?text=Photo"}
          alt={member.photo?.alt ?? member.name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-gia-blue">{member.name}</h3>
      <p className="mb-2 text-sm font-medium text-gia-teal">{member.role}</p>
      <p className="text-sm text-gray-600">{member.bio}</p>
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="mt-3 text-sm text-gia-blue underline underline-offset-2"
        >
          {member.email}
        </a>
      )}
    </div>
  );
}
