import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { LayoutDashboard } from "lucide-react";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <div className="rounded-xl bg-neutral-900/80 p-3 ring-1 ring-white/10 shadow-lg">
            <LayoutDashboard className="h-8 w-8 text-neutral-300" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Hello, {session.user?.name || "User"}</h1>
            <p className="text-neutral-400">Welcome to your dashboard.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-12 text-center backdrop-blur-md shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-20" />
          
          <h3 className="text-xl font-semibold text-white mb-3">No booked events found</h3>
          <p className="text-neutral-400 max-w-sm mx-auto">
            You haven't RSVP'd to any events yet. Head over to the events page to explore and book your next experience.
          </p>
          
          <div className="mt-8">
            <a href="/events" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-neutral-200 h-9 px-4 py-2">
              Browse Events
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
