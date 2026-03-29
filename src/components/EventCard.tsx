import Link from "next/link";
import { Calendar, Users } from "lucide-react";
import { Button } from "./ui/Button";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  capacity: number;
}

export default function EventCard({ id, title, date, capacity }: EventCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 transition-all hover:border-neutral-700 hover:bg-neutral-900 hover:shadow-xl hover:shadow-neutral-900/50">
      <div className="mb-4">
        <h3 className="line-clamp-1 text-xl font-semibold tracking-tight text-white mb-2">
          {title}
        </h3>
        <div className="flex flex-col space-y-1.5 text-sm text-neutral-400">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(date).toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>Capacity: {capacity}</span>
          </div>
        </div>
      </div>
      <Link href={`/events/${id}`} className="mt-4 block w-full">
        <Button variant="outline" className="w-full justify-between group-hover:bg-white group-hover:text-black">
          View Details
          <span className="opacity-0 transition-opacity group-hover:opacity-100">→</span>
        </Button>
      </Link>
    </div>
  );
}
