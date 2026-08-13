import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useParams, telLink } from '@/params';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/85 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a
          href="#top"
          className="font-serif text-lg font-semibold tracking-tight text-ink-900 sm:text-xl"
        >
          {params.business_name}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-blush-600"
            >
              {l.label}
            </a>
          ))}
          <a
            href={telLink(params)}
            className="inline-flex items-center gap-2 rounded-full bg-blush-500 px-5 py-2 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-blush-600 hover:shadow-soft-lg active:translate-y-0"
          >
            <Phone size={15} strokeWidth={2.5} />
            Call
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full bg-white/70 text-ink-800 shadow-soft backdrop-blur md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden px-5 transition-all duration-400 md:hidden ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="rounded-3xl bg-cream-50/95 p-4 shadow-soft-lg backdrop-blur">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-base font-medium text-ink-800 transition-colors hover:bg-blush-100 hover:text-blush-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href={telLink(params)}
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-blush-500 px-4 py-3 text-base font-semibold text-white shadow-soft"
          >
            <Phone size={17} strokeWidth={2.5} />
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
