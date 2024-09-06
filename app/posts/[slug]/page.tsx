import MdxContent from '@/components/mdx-content';
import { getPostBySlug, getPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

// import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This custom components object that says anytime that I encounter an H2 or a heading of type h2 (can pass into MDX), render the text in red.

// const components = {
//   h2: (props: any) => (
//     <h2 {...props} className="text-red-400">
//       {props.children}
//     </h2>
//   )
// }

// This function is going to increase the performance of the pages by statically generating these pages at build time
export async function generateStaticParams() {
  const posts = await getPosts();
  // it's mapping over the posts and for each one it's returning an object with a slug that sets to "post.slug"
  const slugs = posts.map(post => ({ slug: post.slug }));

  // array of slugs
  return slugs;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // next.js uses this slug to get the post by the slug function. if it's not found, it will return 404. otherwise it's going to get the metadata and render it here
  const post = await getPostBySlug(slug);

  if (!post) {
    // anytime a post is not found, return 404.
    notFound();
  }

  // A post that is going to have some metadata because that's what it's returning " return { metadata: { ... data, slug}, content }" on lib/posts.tsx

  //and the content that I can pass into the MDX
  const { metadata, content } = post;
  const { title, image, author, publishedAt } = metadata;

  return (
    <section className="py-24 pt-32">
      <div className="container max-w-3xl">
        <Link
          href="/posts"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to Posts</span>
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
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className="prose mt-16 dark:prose-invert">
          {/* <MDXRemote source={content} components={components}/> */}
          <MdxContent source={content} />
        </main>
      </div>
    </section>
  );
}
