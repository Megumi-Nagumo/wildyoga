'use client';

import { z } from 'zod';
import Link from 'next/link';
import { toast } from 'sonner';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { sendEmail } from '@/lib/actions';

// memo: sonner is a library that makes it easy to display toast notifications.
// memo: I'm using 'react-hook-form' for SubmitHandler that allows me to optimize my form rendering so it doesn't refresh or rerender my react app anytime that user puts or inputs or changes the content of the form.
type Inputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },

    // this 'useForm' is going to give us back a form that contains functions like as 'register' and 'handleSubmit', reset form state for errors, and so on.
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const processForm: SubmitHandler<Inputs> = async data => {
    const result = await sendEmail(data)

    if (result?.error) {
      toast.error('An error occurred. Please try again later.');
      return
    }

    // toast message when the form is submitted
    toast.success('Message sent successfully!');
    reset();
  };

  return (
    <section className="relative isolate">
      {/* Background pattern */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        {/* <defs>
          <pattern
            id="0787a7c5-978c-4f3d-9bf9-4385e7686b39"
            width={200}
            height={200}
            x="50%"
            y={-64}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs> */}
        <svg
          x="50%"
          y={-64}
          className="overflow-visible fill-zinc-50 dark:fill-zinc-900/75"
        >
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f3d-9bf9-4385e7686b39)"
        />
      </svg>

      {/* Form */}
      <div className="relative">
        <form
          onSubmit={handleSubmit(processForm)}
          className="mt-16 lg:flex-auto"
          noValidate
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Name */}
            <div>
              <Input
                type="text"
                id="name"
                autoComplete="given-name"
                placeholder="Name"
                // Using spread method so that's going to give the proper value and onChange methongs and onBlur methods set up on this input for me. Instead of having to do this manually every time that I need to use this input.
                {...register('name')}
              />
              {errors.name?.message && (
                <p className="ml-1 mt-2 text-sm text-rose-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <Input
                type="email"
                id="email"
                autoComplete="email"
                placeholder="Email"
                {...register('email')}
              />
              {errors.email?.message && (
                <p className="ml-1 mt-2 text-sm text-rose-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <Textarea
                rows={4}
                placeholder="Message"
                {...register('message')}
              />

              {errors.message?.message && (
                <p className="ml-1 mt-2 text-sm text-rose-400">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-6">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Contact me'}
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foregound">
            By submitting this form, I agree to the{' '}
            <Link href="/privacy" className="font-bold">
              Privacy&nbsp;Policy.
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
