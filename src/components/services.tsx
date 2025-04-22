import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Services() {
  const services = [
    {
      title: "Haircuts & Styling",
      description:
        "Expert cuts and styling for all hair types and preferences.",
      image: "/services/haircut.jpg",
    },
    {
      title: "Facial Treatments",
      description: "Rejuvenating facials to nourish and revitalize your skin.",
      image: "/services/facial.jpg",
    },
    {
      title: "Nail Care",
      description: "Manicures and pedicures with premium products.",
      image: "/services/nails.jpg",
    },
    {
      title: "Hair Coloring",
      description: "Professional coloring services from subtle to bold.",
      image: "/services/coloring.jpg",
    },
    {
      title: "Spa Packages",
      description: "Comprehensive spa experiences for total relaxation.",
      image: "/services/spa.jpg",
    },
    {
      title: "Makeup Services",
      description: "Professional makeup for any occasion.",
      image: "/services/makeup.jpg",
    },
  ];

  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Discover our range of premium beauty and wellness services designed
            to enhance your natural beauty.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
