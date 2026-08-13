import {
  Phone,
  MessageCircle,
  MapPin,
  Instagram,
  Clock,
  Mail,
} from 'lucide-react';
import { useParams, telLink, whatsappLink, instagramLink } from '@/params';

export default function Contact() {
  const params = useParams();
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <p className="font-script text-xl text-blush-500">Visit Us</p>
          <h2 className="mt-1 font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">
            Location & Contact
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blush-300" />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Map + address card */}
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
            <div className="relative h-64 w-full bg-cream-100 sm:h-72">
              <iframe
                title="Map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  params.address
                )}&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 shrink-0 text-blush-500"
                  size={20}
                  strokeWidth={2}
                />
                <div>
                  <p className="font-medium text-ink-900">{params.area}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-700">
                    {params.address}
                  </p>
                </div>
              </div>
              <a
                href={params.google_maps_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-blush-600 underline-offset-2 hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Contact details card */}
          <div className="flex flex-col gap-4 rounded-[2rem] bg-gradient-to-br from-blush-50 to-lilac-50 p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-blush-500 shadow-soft">
                <Clock size={20} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-700/70">
                  Hours
                </p>
                <p className="text-sm font-medium text-ink-900">
                  {params.operating_hours}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-blush-500 shadow-soft">
                <Phone size={20} strokeWidth={2} />
              </div>
              <a
                href={telLink(params)}
                className="text-sm font-medium text-ink-900 transition-colors hover:text-blush-600"
              >
                {params.phone_number}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-sage-600 shadow-soft">
                <MessageCircle size={20} strokeWidth={2} />
              </div>
              <a
                href={whatsappLink(params)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ink-900 transition-colors hover:text-sage-700"
              >
                WhatsApp {params.whatsapp_number}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-lilac-600 shadow-soft">
                <Instagram size={20} strokeWidth={2} />
              </div>
              <a
                href={instagramLink(params)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ink-900 transition-colors hover:text-lilac-600"
              >
                @{params.instagram_handle}
              </a>
            </div>

            {params.email && (
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-ink-700 shadow-soft">
                  <Mail size={20} strokeWidth={2} />
                </div>
                <a
                  href={`mailto:${params.email}`}
                  className="text-sm font-medium text-ink-900 transition-colors hover:text-blush-600"
                >
                  {params.email}
                </a>
              </div>
            )}

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                href={telLink(params)}
                className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-blush-500 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-blush-600 active:translate-y-0"
              >
                <Phone size={17} strokeWidth={2.5} />
                Call Now
              </a>
              <a
                href={whatsappLink(params)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full border-2 border-sage-300 bg-white px-6 py-3.5 text-sm font-semibold text-sage-700 transition-all hover:-translate-y-0.5 hover:border-sage-400 active:translate-y-0"
              >
                <MessageCircle size={17} strokeWidth={2.5} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
