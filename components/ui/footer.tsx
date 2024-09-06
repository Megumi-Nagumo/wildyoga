import { JSX, SVGProps } from "react";

const navigation = [

    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/',
        icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            {...props}
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-7h3v7zm-1.5-8.207c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm13.5 8.207h-3v-4.094c0-1.94-2-1.791-2 0v4.094h-3v-7h3v.941c1.396-2.586 5-2.777 5 2.476v3.583z" />
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/',
        icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            {...props}
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.323 3.608 1.299.975.975 1.236 2.242 1.298 3.608.059 1.265.071 1.645.071 4.849s-.012 3.584-.07 4.849c-.062 1.366-.323 2.633-1.299 3.608-.975.975-2.242 1.236-3.608 1.298-1.265.059-1.645.071-4.849.071s-3.584-.012-4.849-.07c-1.366-.062-2.633-.323-3.608-1.299-.975-.975-1.236-2.242-1.298-3.608-.059-1.265-.071-1.645-.071-4.849s.012-3.584.07-4.849c.062-1.366.323-2.633 1.299-3.608.975-.975 2.242-1.236 3.608-1.298 1.265-.059 1.645-.071 4.849-.071zm0-2.163c-3.259 0-3.67.012-4.947.071-1.313.062-2.722.344-3.796 1.418-1.073 1.073-1.356 2.482-1.418 3.796-.059 1.277-.071 1.688-.071 4.947s.012 3.67.071 4.947c.062 1.313.344 2.722 1.418 3.796 1.073 1.073 2.482 1.356 3.796 1.418 1.277.059 1.688.071 4.947.071s3.67-.012 4.947-.071c1.313-.062 2.722-.344 3.796-1.418 1.073-1.073 1.356-2.482 1.418-3.796.059-1.277.071-1.688.071-4.947s-.012-3.67-.071-4.947c-.062-1.313-.344-2.722-1.418-3.796-1.073-1.073-2.482-1.356-3.796-1.418-1.277-.059-1.688-.071-4.947-.071zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.208 0-4-1.792-4-4s1.792-4 4-4 4 1.792 4 4-1.792 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
          </svg>
        ),
      },
      {
        name: 'Twitter',
        href: 'https://x.com/',
        icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            {...props}
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.194-.896-.955-2.17-1.55-3.591-1.55-2.717 0-4.916 2.199-4.916 4.917 0 .386.043.762.127 1.124-4.083-.205-7.702-2.161-10.125-5.134-.423.724-.666 1.562-.666 2.457 0 1.694.863 3.189 2.177 4.066-.803-.026-1.56-.246-2.222-.616v.062c0 2.364 1.683 4.337 3.918 4.781-.41.111-.843.171-1.287.171-.315 0-.623-.03-.924-.087.624 1.952 2.432 3.374 4.575 3.414-1.676 1.313-3.786 2.098-6.078 2.098-.395 0-.785-.023-1.17-.068 2.168 1.391 4.743 2.205 7.514 2.205 9.024 0 13.964-7.481 13.964-13.964 0-.213-.005-.426-.014-.637.96-.694 1.797-1.562 2.457-2.549z" />
          </svg>
        ),
      },
      


]

export default function Footer() {
    return (
        <footer className="py-8">

            <div className="container max-w-3x1">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-center space-x-6 md:order-2">
                        {navigation.map((item) => (
                            <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-brand"
                            >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-5 w-5" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                    <div className="mt-8 md:order-1 md:mt-0">
                        <p className="text-center text-xs leading-5 text-muted-foreground">
                            &copy; {new Date().getFullYear()} Wild Yoga. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}