import Image from "next/image";

export function Gallery() {
  const images = [
    { src: "/placeholder.svg?height=600&width=800", alt: "Salon Interior" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Hair Styling" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Makeup Session" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Nail Art" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Facial Treatment" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Spa Experience" },
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Our Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Take a glimpse at our salon environment and the beautiful results of
            our services.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative h-64 overflow-hidden rounded-lg"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
