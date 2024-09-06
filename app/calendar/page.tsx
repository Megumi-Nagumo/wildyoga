import { getYogaSessionByDate } from "@/lib/yoga"; 
import YogaBooking from "@/components/yoga-booking"; 
import { notFound } from "next/navigation";

export default function CalendarPage({ params }: { params: { slug: string } }) {
  const date = params.slug; 
  const session = getYogaSessionByDate(date); 

  if (!session) {
    notFound();
  }

  return (
    <section className="py-24 pt-32">
      <div className="container max-w-3xl">
      <h1 className="title mb-12">Calendar</h1>
        <YogaBooking slug={date} session={session} date={date} />
      </div>
    </section>
  );
}
