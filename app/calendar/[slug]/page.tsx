import { getYogaSessionByDate, getYogaSessions } from '@/lib/yoga';
import YogaBooking from '@/components/yoga-booking';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export async function generateStaticParams() {
  const sessions = await getYogaSessions();
  return sessions.map((session) => ({ slug: session.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const session = await getYogaSessionByDate(params.slug);
  if (!session) {
    notFound();
  } 
  console.log("slug", params.slug);
  
  return (
    <section className="py-24 pt-32">
      <div className="container max-w-3xl">
        <Link
          href="/calendar"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to Calendar</span>
        </Link>
        <h1 className="title mb-12">{session.title}</h1>
        <YogaBooking slug={params.slug} session={session} date={params.slug} />
      </div>  
    </section>
  );
}
