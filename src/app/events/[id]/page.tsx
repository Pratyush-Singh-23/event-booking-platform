import Link from "next/link";
import { ArrowLeft, Calendar, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  // Mock event data since backend isn't merged
  const event = {
    id: params.id,
    title: "Vercel Ship Summit",
    description: "Join industry leaders for an exclusive deep dive into the future of frontend development, edge compute, and the Next.js ecosystem. The event will feature interactive workshops, keynote speakers, and extensive networking opportunities.",
    date: "2026-12-05T09:30:00Z",
    capacity: 1000,
    location: "San Francisco, CA",
  };

  const isBooked = false; // Mock state

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl relative z-10">
      <Link href="/events" className="inline-flex items-center space-x-2 text-sm text-neutral-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Events</span>
      </Link>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-1 lg:p-1 overflow-hidden shadow-2xl relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
        
        <div className="bg-neutral-950/80 backdrop-blur-md rounded-xl p-8 sm:p-10 border border-neutral-800/50">
          <div className="flex flex-col lg:flex-row gap-10 justify-between">
            <div className="flex-1">
              <div className="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 mb-6 border border-indigo-500/20">
                Conference
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                {event.title}
              </h1>
              
              <div className="prose prose-invert max-w-none text-neutral-300">
                <p>{event.description}</p>
              </div>
            </div>

            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 text-neutral-300">
                    <Calendar className="h-5 w-5 text-neutral-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">Date and Time</p>
                      <p className="text-sm">
                        {new Date(event.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                      <p className="text-sm text-neutral-500 mt-0.5">
                        {new Date(event.date).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })} PST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-neutral-300">
                    <MapPin className="h-5 w-5 text-neutral-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">Location</p>
                      <p className="text-sm">{event.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-neutral-300">
                    <Users className="h-5 w-5 text-neutral-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">Capacity</p>
                      <p className="text-sm">{event.capacity} seats total</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-800">
                  <Button size="lg" className="w-full text-base" disabled={isBooked}>
                    {isBooked ? "You're Going!" : "RSVP Now"}
                  </Button>
                  <p className="text-xs text-center text-neutral-500 mt-3">
                    Subject to organizer approval and capacity limits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
