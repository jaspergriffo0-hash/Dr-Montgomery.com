import { NAV_ITEMS } from '../data/surgeonData';

interface FooterProps {
  onOpenBooking: (preselectedService?: string) => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#102A43] text-slate-300">
      <div className="mx-auto max-w-[1280px] px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/15 pb-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <button
              type="button"
              onClick={scrollToTop}
              className="text-left font-heading text-xl font-semibold tracking-tight text-white hover:text-[#64B5F6] transition-colors"
            >
              Dr. Percival George Montgomery
            </button>
            <p className="mt-1.5 text-sm text-slate-300">
              MA MB BChir (Cantab) · FRCS (Tr &amp; Orth) · MD
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Consultant Orthopaedic Surgeon specialising in hip and knee joint
              replacement, sports ligament reconstruction, and lower-limb trauma.
            </p>
          </div>

          <div className="lg:col-span-4">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">
              Navigation
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">
              Consultations
            </p>
            <p className="mt-4 text-sm text-slate-300">
              108 Harley Street, London W1G 7ET
            </p>
            <p className="mt-1 text-sm text-slate-300 tabular-nums">
              +44 (0)20 7946 0821
            </p>
            <p className="mt-1 text-sm">
              <a
                href="mailto:dr.percivalgeorgemontgomery@outlook.com"
                className="break-all text-slate-300 transition-colors hover:text-[#64B5F6]"
              >
                dr.percivalgeorgemontgomery@outlook.com
              </a>
            </p>
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="mt-5 inline-flex min-h-[40px] items-center justify-center rounded-lg bg-[#64B5F6] px-4 py-2 text-xs font-semibold text-[#0B1F33] transition-colors hover:bg-[#82C4F8]"
            >
              Book Appointment
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Dr. Percival George Montgomery Orthopaedic
            Practice. All rights reserved.
          </p>
          <p className="tabular-nums">
            GMC Specialist Register 6048291 · Fellow of the Royal College of
            Surgeons of England
          </p>
        </div>
      </div>
    </footer>
  );
}
