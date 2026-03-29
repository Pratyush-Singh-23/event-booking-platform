import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function Home() {
  return (
    <div className="relative overflow-hidden pt-16 sm:pt-24 lg:pt-32">
      <div className="container mx-auto px-4 text-center z-10 relative">
        <div className="mx-auto max-w-3xl flex flex-col items-center">
          <div className="mb-6 flex items-center justify-center rounded-2xl bg-neutral-900/50 p-2 shadow-inner ring-1 ring-white/10 w-16 h-16">
            <CalendarDays className="h-8 w-8 text-neutral-300" />
          </div>
          <h1 className="bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent text-5xl font-extrabold tracking-tight sm:text-6xl mb-6">
            Connect & Experience Incredible Events
          </h1>
          <p className="text-lg leading-8 text-neutral-400 mb-10 max-w-2xl">
            A premium platform to discover, book, and manage your upcoming events with seamless ticketing and real-time availability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <Link href="/events" className="w-full sm:w-auto">
              <Button size="lg" className="w-full text-base flex items-center gap-2">
                Browse Events
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/register" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full text-base bg-neutral-950">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 mix-blend-color-dodge opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500 blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-fuchsia-500 blur-[130px]" />
      </div>
    </div>
  );
}
