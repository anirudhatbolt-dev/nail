import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { useParams, getHeroImage, telLink, whatsappLink } from '@/params';

export default function Hero() {
  const params = useParams();
  const heroImg = getHeroImage(params);

  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blush-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-40 h-64 w-64 rounded-full bg-lilac-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:pb-24">
        {/* Text column */}
        <div className="animate-floatUp text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-4 py-1.5 text-xs font-medium text-blush-700 shadow-soft backdrop-blur">
            <MapPin size={13} strokeWidth={2.5} />
            {params.area}
          </span>

          <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.1] text-ink-900 text-balance sm:text-5xl lg:text-6xl">
            {params.business_name}
          </h1>

          <p className="mx-auto mt-5 max-w-md font-script text-xl text-ink-700 sm:text-2xl lg:mx-0">
            {params.tagline}
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href={telLink(params)}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-blush-500 px-7 py-4 text-base font-semibold text-white shadow-soft-lg transition-all hover:-translate-y-0.5 hover:bg-blush-600 active:translate-y-0 sm:w-auto"
            >
              <Phone size={18} strokeWidth={2.5} />
              Call Now
            </a>
            <a
              href={whatsappLink(params)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-sage-300 bg-white/70 px-7 py-4 text-base font-semibold text-sage-700 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-sage-400 hover:bg-white active:translate-y-0 sm:w-auto"
            >
              <MessageCircle size={18} strokeWidth={2.5} />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Image column */}
        <div className="relative animate-floatUp [animation-delay:120ms]">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-blush-200/60 to-lilac-200/50 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-soft-lg ring-1 ring-white/60">
              <img
                src={heroImg}
                alt={params.business_name}
                className="aspect-[4/5] w-full animate-gentleZoom object-cover sm:aspect-[5/5] lg:aspect-[4/5]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/15 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
