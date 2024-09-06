import Link from 'next/link';
import { getPosts } from '@/lib/posts';
import Posts from '@/components/posts';

export default async function RecentPost() {
    //Limiting the recent posts to 4
    const posts = await getPosts(4);

    return (
        <section className='pb-24'>
            <div>
                <h2 className='title mb-12'>Recent Posts</h2>
                <Posts posts={posts} />
                <Link 
                href='/posts'
                className='mt-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground'
                >
                    <span>All Posts</span>
                </Link>

            </div>
        </section>
    )
}