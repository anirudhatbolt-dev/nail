import { Instagram, Heart } from 'lucide-react';
import { useParams, instagramLink } from '@/params';

export default function Footer() {
  const params = useParams();
  return (
    <footer className="border-t border-blush-100 bg-cream-100/60 py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <a
            href="#top"
            className="font-serif text-xl font-semibold text-ink-900"
          >
            {params.business_name}
          </a>

          <a
            href={instagramLink(params)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink-800 shadow-soft transition-all hover:-translate-y-0.5 hover:text-lilac-600"
          >
            <Instagram size={16} strokeWidth={2} />
            @{params.instagram_handle}
          </a>

          <p className="text-sm text-ink-700">{params.operating_hours}</p>

          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-ink-700/70">
            <span>{params.area}</span>
            <span aria-hidden>·</span>
            <a
              href={params.google_maps_url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:text-blush-600 hover:underline"
            >
              Get directions
            </a>
          </div>

          <div className="mt-4 flex items-center gap-1.5 text-xs text-ink-700/60">
            <span>Made with</span>
            <Heart size={12} className="fill-blush-400 text-blush-400" />
            <span>care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
