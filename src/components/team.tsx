import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Team() {
  const team = [
    {
      name: "Emma Johnson",
      role: "Founder & Hair Stylist",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With over 15 years of experience, Emma leads our team with passion and creativity.",
    },
    {
      name: "Sophia Martinez",
      role: "Senior Makeup Artist",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Sophia's artistic approach to makeup has made her a favorite among our clients.",
    },
    {
      name: "Olivia Wilson",
      role: "Nail Technician",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Olivia specializes in intricate nail designs and long-lasting manicures.",
    },
    {
      name: "Isabella Brown",
      role: "Esthetician",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Isabella's facial treatments are known for their rejuvenating effects.",
    },
  ];

  return (
    <section id="team" className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Meet Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Our team of skilled professionals is dedicated to making you look
            and feel your best.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-rose-500">
                  {member.role}
                </p>
                <p className="mb-4 text-sm text-slate-600">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="text-slate-400 transition-colors hover:text-rose-500"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 transition-colors hover:text-rose-500"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 transition-colors hover:text-rose-500"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
