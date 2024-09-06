//Purpose: This file provides utility functions for retrieving yoga session data.

// Purpose: This file provides utility functions for retrieving yoga session data.

export interface YogaSession {
  slug: string;
  title: string;
  time: string;
  instructor: string;
  instructorImage: string;
  description: string;
}

const yogaSessions: YogaSession[] = [
  {
    slug: 'early-bird-outdoor-yoga-01',
    title: 'Early Bird Outdoor Yoga',
    time: '10:00 AM',
    instructor: 'Michelle',
    instructorImage: '/images/authors/michelle-foto-gesichtjpeg-x-small.jpeg',
    description: 'All levels outdoor yoga session with Michelle.',
  },
  // Add more sessions here if needed
];

/**
 * Retrieves a yoga session by its slug.
 * @param slug - The slug of the yoga session.
 * @returns The yoga session with the matching slug, or undefined if not found.
 */
export function getYogaSessionBySlug(slug: string): YogaSession | undefined {
  return yogaSessions.find((session) => session.slug === slug);
}

/**
 * Retrieves all yoga sessions.
 * @returns An array of all yoga sessions.
 */
export function getYogaSessions(): YogaSession[] {
  return yogaSessions;
}

/**
 * Retrieves a yoga session by its date.
 * @param date - The date of the yoga session.
 * @returns The first yoga session that matches the given date.
 */
export function getYogaSessionByDate(date: string): YogaSession | undefined {
  // Logic to find the session by date
  // For simplicity, returning the first session for now
  return yogaSessions[0];
}
