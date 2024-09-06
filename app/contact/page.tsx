import ContactForm from '@/components/contact-form';

export default function Contact() {

    return (
        <section className="py-24 pt-40">
            <div className="container max-w-3x1">
                <h2 className="title">Let&apos;s get in touch</h2>

                {/* here it's going to render a contact form. This is going to use React hook froms to render the form elements and zod for validation so I can verify the inputs*/}
                <ContactForm />
            </div>
        </section>
    )
}