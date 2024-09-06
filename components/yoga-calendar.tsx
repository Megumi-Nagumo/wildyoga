'use client';

import Link from 'next/link';
import React, { useState } from 'react';

// Utility function to get the next 7 Sundays from a starting date
export function getNextSundays(startDate: Date, count: number): Date[] {
  const sundays: Date[] = [];
  let currentSunday = new Date(startDate);

  // Ensure the starting date is a Sunday or move to the next Sunday
  currentSunday.setDate(
    currentSunday.getDate() + ((7 - currentSunday.getDay()) % 7)
  );

  for (let i = 0; i < count; i++) {
    sundays.push(new Date(currentSunday)); // push the current Sunday
    currentSunday.setDate(currentSunday.getDate() + 7); // move to the next Sunday
  }

  return sundays;
}

export const YogaCalendar: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [sundays, setSundays] = useState<Date[]>(getNextSundays(new Date(), 4));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Handle moving to the previous set of Sundays
  const handlePrevious = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() - 28); // go back 28 days (4 weeks)
    setStartDate(newStartDate);
    setSundays(getNextSundays(newStartDate, 4));
  };

  // Handle moving to the next set of Sundays
  const handleNext = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() + 28); // go forward 28 days (4 weeks)
    setStartDate(newStartDate);
    setSundays(getNextSundays(newStartDate, 4));
  };

  // Handle date click
  const handleDateClick = ( date: Date) =>{
    setSelectedDate(date);
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Morning Yoga Session</h1>
      <p>Choose your preferred date:</p>
      <br />
      <div className="w-full border border-gray-300 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <button onClick={handlePrevious}>&lt;</button>
          <span>
            {`${sundays[0]?.toLocaleDateString('en-GB')} - ${sundays[sundays.length - 1]?.toLocaleDateString('en-GB')}`}
          </span>
          <button onClick={handleNext}>&gt;</button>
        </div>
        <div className="flex justify-between">
          {sundays.map((sunday, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center p-2 border border-gray-200 rounded-md mr-2 last:mr-0"
            >
              <span
                className="text-sm font-semibold"
                onClick={() => handleDateClick(sunday)}
              >
                {sunday.toLocaleDateString('en-GB', {
                  weekday: 'short',
                  day: '2-digit',
                  month: '2-digit',
                })}
              </span>
              <Link
                href={`/calendar/${sunday.toISOString().split('T')[0]}`}
                passHref
              >
                <div
                  className="bg-emerald-600 text-white text-center p-2 mt-2 rounded-md cursor-pointer"
                  onClick={() => handleDateClick(sunday)}
                >
                  <span className="block text-xs">10:00 • 75 Min</span>
                  <span className="block text-xs">
                    Early Bird Outdoor Yoga - All levels
                  </span>
                </div>
              </Link>
            </div>
          ))}
          {selectedDate && (
            <p>Selected date: {selectedDate.toLocaleDateString('en-GB')}</p>
          )}
        </div>
      </div>
    </div>
  );
};
