'use server';

// this server directive on top is going to mark any function I export from this file as a server action, which means I can pass it to client components, call it from your form event handlers or use it to submit forms or any data mutations I need to do on the server.
import { z } from 'zod';
import { ContactFormSchema, NewsletterFormSchema } from './schemas';
import { Resend } from 'resend';
import ContactFormEmail from '@/emails/contact-form-email';

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

const resend = new Resend('re_WPZo7piK_Nyf7tXytRE27o6T13uKvXQ6K');
console.log(process.env.RESEND_API_KEY);

//Here it passes the 'data' to the contact-form.tsx in 'components' folder.
export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);
  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    const { name, email, message } = result.data;
    // Using the 'resend' library to send an email to the user .
    const { data, error } = await resend.emails.send({
        //verified on Resend domain
      from: 'hello@equivalentpoetfray.com',
      to: [email],
      cc: ['hello@equivalentpoetfray.com'],
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message }),
    });

    if (!data || error) {
      throw new Error('Failed to send email.');
    }
    return { success: true };
  } catch (error) {
    return { error };
  }
}

export async function subscribe(data: { email: string }) {
  const result = NewsletterFormSchema.safeParse(data);
  if (result.error) {
    return { error: result.error.format() };
  }
  // TODO: Implement email subscription
  return { success: true };
}
