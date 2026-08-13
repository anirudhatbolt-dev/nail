import { useEffect, useRef, useState } from 'react';
import { useParams, getGalleryImages } from '@/params';

const GAP_MOBILE = 16;
const GAP_DESKTOP = 20;

export default function Gallery() {
  const params = useParams();
  const images = getGalleryImages(params);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideStep, setSlideStep] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [isResetting, setIsResetting] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  const extendedImages = [...images, ...images.slice(0, visibleSlides)];
  const totalSlides = extendedImages.length;
  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      const width = viewport.clientWidth;
      const isDesktop = width >= 640;
      const gap = isDesktop ? GAP_DESKTOP : GAP_MOBILE;
      const slides = isDesktop ? 3 : 1;
      const cardWidth = isDesktop ? (width - 40) / 3 : width;
      setVisibleSlides(slides);
      setSlideStep(cardWidth + gap);
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = current + 1;
        return next;
      });
    }, 3500);

    return () => window.clearInterval(timer);
  }, [totalSlides]);

  // When we land on the duplicated first image (last index), silently
  // jump back to 0 after the transition completes, with no visible gap.
  useEffect(() => {
    if (activeIndex !== images.length) return;
    const resetTimer = window.setTimeout(() => {
      setIsResetting(true);
      setActiveIndex(0);
    }, 700);
    return () => window.clearTimeout(resetTimer);
  }, [activeIndex, totalSlides]);

  // Re-enable transitions after the silent reset lands on index 0.
  useEffect(() => {
    if (isResetting && activeIndex === 0) {
      const raf = requestAnimationFrame(() => setIsResetting(false));
      return () => cancelAnimationFrame(raf);
    }
  }, [isResetting, activeIndex]);

  const translateX = -activeIndex * slideStep;

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute right-0 top-20 h-56 w-56 rounded-full bg-lilac-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-0 h-56 w-56 rounded-full bg-blush-200/30 blur-3xl" />

      <div className="relative">
        <div className="px-5 text-center sm:px-8">
          <p className="font-script text-xl text-blush-500">Our Work</p>
          <h2 className="mt-1 font-sans text-3xl font-semibold tracking-tight text-[#d4d2d3] sm:text-5xl">
            Result of our work
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blush-300" />
        </div>

        <div className="mt-12">
          <div ref={viewportRef} className="overflow-hidden">
            <div
              className={`flex gap-4 sm:gap-5 ${
                isResetting
                  ? ''
                  : 'transition-transform duration-700 ease-out'
              }`}
              style={{ transform: `translateX(${translateX}px)` }}
            >
                      {extendedImages.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className="group relative w-full shrink-0 overflow-hidden rounded-lg bg-blush-100 shadow-soft ring-1 ring-white/70 sm:w-[calc((100vw-40px)/3)]"
                >
                  <img
                    src={src}
                    alt={`Nail art ${index + 1}`}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-white/10 opacity-70" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
