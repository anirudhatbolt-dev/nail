import { useParams, getOwnerInitials } from '@/params';

export default function About() {
  const params = useParams();
  const initials = getOwnerInitials(params);

  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-5 text-center sm:px-8 lg:flex-row lg:gap-12 lg:text-left">
        {/* circular photo placeholder */}
        <div className="relative shrink-0">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-blush-200 to-lilac-200 blur-md" />
          <div className="relative grid h-36 w-36 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-blush-100 to-lilac-100 ring-4 ring-white shadow-soft sm:h-40 sm:w-40">
            <span className="font-serif text-4xl font-semibold text-blush-500 sm:text-5xl">
              {initials}
            </span>
          </div>
        </div>

        <div>
          <p className="font-script text-xl text-blush-500">Meet the Artist</p>
          <h2 className="mt-1 font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">
            {params.owner_name}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-700 lg:mx-0">
            {params.owner_bio}
          </p>
          <p className="mt-4 font-script text-lg italic text-blush-600">
            — {params.owner_name}
          </p>
        </div>
      </div>
    </section>
  );
}
