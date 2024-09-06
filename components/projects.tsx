import Image from 'next/image';
import Link from 'next/link';
import { ProjectMetadata } from '@/lib/projects';
import { formatDate } from '@/lib/utils';

export default function Projects({
  projects,
}: {
  projects: ProjectMetadata[];
}) {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {projects.map((project) => (
        <li key={project.slug} className="group relative">
          <Link href={`/projects/${project.slug.substring(0, project.slug.length - 4)}`}>
            {project.image && (
              <div className="h-72 w-full overflow-hidden bg-muted sm:h-60">
                <Image
                  src={project.image}
                  alt={project.title || ''}
                  fill
                  className="rounded-lg object-cover object-center transition duration-500 group-hover:scale-105 sm:h-60 sm:object-cover"
                />
              </div>
            )}

            <div className="absolute inset-[1px] rounded-lg bg-background/70" />

            <div className="absolute inset-x-0 bottom-0 translate-y-2 px-6 py-2">
              <h2 className="title line-clamp-1 text-xl no-underline">
                {project.title}
              </h2>

              <p className="line-clamp-1 text-sm text-muted-foreground ">
                {project.summary}
              </p>

              <p className="text-xs font-light text-muted-foreground">
                {formatDate(project.publishedAt ?? '')}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
