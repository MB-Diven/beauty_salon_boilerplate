import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Thompson",
      rating: 5,
      text: "I've been coming to Elegance for years and have never been disappointed. The team is professional, friendly, and always delivers exceptional results.",
    },
    {
      name: "Michael Rodriguez",
      rating: 5,
      text: "The atmosphere is so relaxing, and the staff is incredibly skilled. My haircuts always turn out perfect, and the scalp massage is an amazing bonus!",
    },
    {
      name: "Jennifer Lee",
      rating: 5,
      text: "Their facial treatments have completely transformed my skin. The estheticians are knowledgeable and take the time to understand your specific needs.",
    },
  ];

  return (
    <section id="testimonials" className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Client Testimonials
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about their experiences.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-6 text-slate-600">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">Loyal Client</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
