import { MDXRemote } from 'next-mdx-remote/rsc';
import Intro from '@/components/intro';
import NewsletterForm from '@/components/newsletter-form';
import RecentPosts from '@/components/recent-posts';
import RecentProjects from '@/components/recent-projects';
import { YogaCalendar } from '@/components/yoga-calendar';

export default function Home() {
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <Intro />
        <RecentPosts />
        <RecentProjects />
        <YogaCalendar />
        <NewsletterForm />
      </div>
    </section>
  );
}
