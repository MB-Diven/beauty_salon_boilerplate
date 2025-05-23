import { useBusinessInfo } from "@/lib/context/business-context";

export function About() {
  const { businessInfo } = useBusinessInfo();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Apie {businessInfo?.businessName}
          </h2>
          <p
            className="mb-8 text-slate-600"
            dangerouslySetInnerHTML={{ __html: businessInfo?.about || "" }}
          />
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-rose-500">10+</span>
              <span className="text-sm text-slate-500">Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-rose-500">
                {businessInfo?.worker_ids.length}+
              </span>
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
