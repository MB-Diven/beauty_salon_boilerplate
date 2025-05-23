import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useBusinessInfo } from "@/lib/context/business-context";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
  duration: number;
  description: string;
  sales: number;
}

export function Services() {
  const { businessInfo } = useBusinessInfo();
  const [services, setServices] = useState<Product[]>([]);

  useEffect(() => {
    if (!businessInfo) return;

    const fetchServices = async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .in(
          "id",
          businessInfo.product_ids.map((id) => +id)
        );

      setServices(data as Product[]);
    };

    fetchServices();
  }, [businessInfo]);

  console.log(services);

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
                <img
                  src={service.photo || "/placeholder.svg"}
                  alt={service.name}
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{service.name}</CardTitle>
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
