import { useRouter } from 'next/router';
import { useState } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function BookingPage(){
  const router = useRouter();
  const { date } = router.query;
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    setLoading(true);

    // Sending the booking request to the API
    const res = await fetch('/api/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Michelle',
        date: new Date(date as string),
        time: '10:00 AM',
        session: 'Early Bird Outdoor Yoga - All levels',
      }),
    });

    if (res.ok) {
      router.push('/booked');
    } else {
      setLoading(false);
      alert('Failed to book the session.');
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Booking Page</h1>
      <p className="mb-2">Session: Early Bird Outdoor Yoga - All levels</p>
      <p className="mb-2">Date: {new Date(date as string).toLocaleDateString()}</p>
      <p className="mb-2">Time: 10:00 AM</p>
      <p className="mb-6">Instructor: Michelle</p>
      <button
        onClick={handleBooking}
        disabled={loading}
        className="bg-teal-500 text-white px-4 py-2 rounded-md"
      >
        {loading ? 'Booking...' : 'Book Now'}
      </button>
    </div>
  );
};
