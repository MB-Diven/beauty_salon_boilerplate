import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[80vh] w-full bg-gradient-to-r from-rose-50 to-slate-50">
      <div className="container mx-auto relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 font-serif text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
          Your Beauty Sanctuary
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-slate-600 md:text-xl">
          Where beauty meets relaxation. Experience the ultimate in personal
          care and pampering.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button asChild size="lg" className="bg-rose-500 hover:bg-rose-600">
            <Link href="#reservation">Book Appointment</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
