import MdxContent from '@/components/mdx-content';
import { getProjectBySlug, getProjects } from '@/lib/projects';
import { formatDate } from '@/lib/utils';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;
  const { title, image, publishedAt } = metadata;

  return (
    <section className="py-24 pt-32">
      <div className="container max-w-3xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to Projects</span>
        </Link>
        {image && (
          <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title || ''}
              className="object-cover"
              fill
            />
          </div>
        )}
        <header>
          <h2 className="title">{title}</h2>
          <p className="mt-3 text-xs text-muted-foreground">
            {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className="prose mt-16 dark:prose-invert">
          <MdxContent source={content} />
        </main>
      </div>
    </section>
  );
}
