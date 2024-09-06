import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '@/components/ui/theme-toggle';

export default function Header() {
  return (
    <header className="flex inset-x-0 top-0 z-50 bg-background/75 py-6">
      <nav className="container flex max-w-3x1 items-center justify-between">
        <div>
          <Link
            href="/"
            className="flex items-center font-serif text-2xl font-bold"
          >
            <Image
              src="/images/posts/logo.png"
              alt="Wild Yoga Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            Wild Yoga
          </Link>
        </div>

        <ul className="flex items-center gap-6 text-sm font-light text-muted-foreground">
          <li className="transition-colors hover:text-foreground">
            <Link href="/posts">POSTS</Link>
          </li>

          <li className="transition-colors hover:text-foreground">
            <Link href="/projects">PROJECTS</Link>
          </li>

          <li className="transition-colors hover:text-foreground">
            <Link href="/calendar">CALENDAR</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
