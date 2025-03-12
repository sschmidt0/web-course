import Link from "next/link";
import React from "react";

export interface BreadcrumbProps {
  session: string;
  syllabusText: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  session,
  syllabusText,
}) => {
  return (
    <div>
      <Link href="/syllabus">{syllabusText}</Link> / <span>{session}</span>
    </div>
  );
};
