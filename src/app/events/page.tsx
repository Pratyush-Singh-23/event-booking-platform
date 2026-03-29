import EventCard from "@/components/EventCard";

export default function EventsPage() {
  const mockEvents = [
    { id: "1", title: "Next.js Conf 2026", date: "2026-10-25T09:00:00Z", capacity: 500 },
    { id: "2", title: "Supabase Launch Week", date: "2026-11-12T10:00:00Z", capacity: 200 },
    { id: "3", title: "Vercel Ship Summit", date: "2026-12-05T09:30:00Z", capacity: 1000 },
    { id: "4", title: "React Advanced London", date: "2026-09-15T08:00:00Z", capacity: 800 },
    { id: "5", title: "GraphQL Summit", date: "2026-08-20T09:00:00Z", capacity: 300 },
    { id: "6", title: "AWS re:Invent 2026", date: "2026-11-30T09:00:00Z", capacity: 10000 },
  ];

  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Upcoming Events
        </h1>
        <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
          Discover and register for the best tech events, conferences, and meetups happening around the world.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl">
        {mockEvents.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
      
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-indigo-500/5 to-transparent -z-10 pointer-events-none" />
    </div>
  );
}
