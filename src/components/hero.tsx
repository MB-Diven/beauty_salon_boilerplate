import { Button } from "@/components/ui/button";
import { useBusinessInfo } from "@/lib/context/business-context";
import Link from "next/link";

export function Hero() {
  const { businessInfo } = useBusinessInfo();

  return (
    <section
      style={{
        background: `linear-gradient(to right, ${businessInfo?.primaryColor}80, oklch(55.4% 0.046 257.417))`,
      }}
      className="relative h-[80vh] w-full"
    >
      <div className="container mx-auto relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 font-serif text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
          {businessInfo?.welcome_message}
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-slate-900 md:text-xl">
          {businessInfo?.businessDescription}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button
            asChild
            size="lg"
            style={{
              background: businessInfo?.primaryColor,
            }}
            className="hover:opacity-80"
          >
            <Link href="#reservation">Book Appointment</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="hover:opacity-80"
          >
            <Link href="#services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
