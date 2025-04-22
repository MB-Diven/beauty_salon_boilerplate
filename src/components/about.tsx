export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            About Elegance Beauty Salon
          </h2>
          <p className="mb-6 text-slate-600">
            Founded in 2010, Elegance Beauty Salon has been dedicated to
            providing exceptional beauty services in a relaxing and luxurious
            environment. Our team of highly skilled professionals is committed
            to enhancing your natural beauty and ensuring you leave our salon
            feeling refreshed and confident.
          </p>
          <p className="mb-8 text-slate-600">
            We use only premium products and stay updated with the latest trends
            and techniques in the beauty industry to offer you the best possible
            experience.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-rose-500">10+</span>
              <span className="text-sm text-slate-500">Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-rose-500">15+</span>
              <span className="text-sm text-slate-500">Expert Stylists</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-rose-500">5000+</span>
              <span className="text-sm text-slate-500">Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
