import Link from "next/link";
import projects from "@/data/projects.json";

export const dynamic = "force-dynamic";

export default function Portfolio() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100dvh-var(--navbar-height))]  items-center">
      {projects.map((d, i) => {
        return (
          <Link
            href={`/portfolio/${d.slug}`}
            className="w-full p-3 grid-btn font-bold bb"
            key={i}
          >
            {d.title}
          </Link>
        );
      })}
    </div>
  );
}
