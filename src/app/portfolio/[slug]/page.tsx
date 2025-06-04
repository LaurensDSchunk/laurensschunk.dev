import projects from "@/data/projects.json";

// TODO: add example images

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: any }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <div>Project not found</div>;

  return (
    <div className="pt-2">
      <h1 className="px-3 text-3xl font-semibold">{project.title}</h1>
      <h2 className="px-3 text-xl pb-3">{project.summary}</h2>
      <div className="bb bt">
        <div className="flex flex-row gap-x-3 flex-wrap px-3">
          <p className="font-bold">Technologies:</p>
          {project.technologies.map((t) => {
            return <p key={t}>{t}</p>;
          })}
        </div>
      </div>
      <p className="px-3 pt-3">{project.description}</p>
      <p className="px-3 font-bold pt-2">
        Live Url:{" "}
        <a
          href={project.liveUrl}
          className="font-normal underline"
          target="_blank"
        >
          {project.formattedUrl}
        </a>
      </p>
    </div>
  );
}
