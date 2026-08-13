import {
  Sparkles,
  Hand,
  Brush,
  Gem,
  Heart,
  Flower2,
  type LucideIcon,
} from 'lucide-react';
import { useParams } from '@/params';

const icons: LucideIcon[] = [
  Sparkles,
  Hand,
  Brush,
  Gem,
  Heart,
  Flower2,
];

export default function Services() {
  const params = useParams();
  return (
    <section id="services" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <p className="font-script text-xl text-blush-500">Our Menu</p>
          <h2 className="mt-1 font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">
            Services & Pricing
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blush-300" />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {params.services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={s.name}
                className="group rounded-3xl bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blush-100 to-lilac-100 text-blush-600 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-serif text-xl font-medium text-ink-900">
                  {s.name}
                </h3>
                <p className="mt-1.5 text-sm text-ink-700">
                  Starting from{' '}
                  <span className="font-semibold text-blush-600">
                    {s.price_from}
                  </span>
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-ink-700">
          Prices are starting points — final pricing depends on length &
          design.{' '}
          <a
            href={`https://wa.me/${params.whatsapp_number.replace(
              /[^\d]/g,
              ''
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blush-600 underline-offset-2 hover:underline"
          >
            Message us for a quote.
          </a>
        </p>
      </div>
    </section>
  );
}
