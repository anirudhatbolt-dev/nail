import { Star } from 'lucide-react';
import { useParams } from '@/params';

export default function Reviews() {
  const params = useParams();
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <a
          href={params.google_maps_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-[4rem] border border-blush-100 bg-white px-6 py-11 text-center shadow-soft-lg transition-transform duration-300 hover:-translate-y-1 sm:px-12 sm:py-14"
        >
          <div className="relative">
            <div className="flex items-center justify-center gap-3">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  size={30}
                  className="fill-blush-400 text-blush-400 sm:h-8 sm:w-8"
                  strokeWidth={1.5}
                />
              ))}
            </div>

            <p className="mt-6 font-serif text-3xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              {params.google_rating} — {params.review_count}+ Google Reviews
            </p>

            <span className="mt-6 inline-block text-base font-medium text-blush-500 transition-colors group-hover:text-blush-600 sm:text-lg">
              Read them on Google →
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
