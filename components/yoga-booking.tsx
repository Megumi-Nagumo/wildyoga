'use client';

import { YogaSession } from "@/lib/yoga";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface YogaBookingProps {
  session: YogaSession;
  date: string;
  slug: string;  
}

const YogaBooking: React.FC<YogaBookingProps> = ({ session, date, slug }) => {
  const router = useRouter();
console.log("slug", slug);

  const handleBooking = (slug: string) => {
    router.push(`/calendar/${slug}/booking`);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl text-gray-950 font-bold mb-4">{session.title} - All levels</h2>
      <p className="text-lg text-gray-950 mb-2">
        <strong>Date:</strong> {new Date(date).toLocaleDateString('en-GB')}
      </p>
      <p className="text-lg text-gray-950 mb-2">
        <strong>Time:</strong> {session.time} (75 min)
      </p>
      <p className="text-lg text-gray-950 mb-2">
        <strong>Instructor:</strong> {session.instructor}
      </p>
      <div className="mb-4">
        <Image 
          src={session.instructorImage}
          alt={session.instructor}
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <p className="text-lg text-gray-950 mb-4">{session.description}</p>
      <button 
        onClick={() => handleBooking(slug)} 
        className="bg-emerald-600 text-white p-3 rounded-lg"
      >
        Book Now
      </button>
    </div>
  );
};

export default YogaBooking;
