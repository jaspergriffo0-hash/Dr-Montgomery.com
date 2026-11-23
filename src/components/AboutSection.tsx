import { Check } from 'lucide-react';
import { CREDENTIALS_LIST, IMAGES } from '../data/surgeonData';
import { ResilientImage } from './ResilientImage';

interface AboutSectionProps {
  onOpenBooking: (preselectedService?: string) => void;
}

export function AboutSection({ onOpenBooking }: AboutSectionProps) {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[340px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <ResilientImage
                src={IMAGES.consultation}
                alt="Dr. Montgomery consulting with a patient in his sunlit Harley Street clinic"
                className="h-full w-full object-cover lg:absolute lg:inset-0"
                fallbackTitle="108 Harley Street Consultation Suite"
                fallbackSubtitle="Private Orthopaedic Assessment & Diagnostic Review"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.08em] text-[#1565C0]">
              About Dr. Montgomery
            </p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight text-[#102A43] [text-wrap:balance] sm:text-4xl">
              Precision Lower-Limb Surgery Guided by Conservative Judgement
            </h2>

            <div className="mt-6 space-y-4 text-[15.5px] leading-[1.7] text-slate-600">
              <p>
                Dr. Percival George Montgomery is a London-based Consultant
                Orthopaedic Surgeon with over two decades of specialist experience
                treating disorders of the hip, knee, leg, and musculoskeletal system.
                His clinical approach balances evidence-based non-operative
                rehabilitation with high-precision surgical reconstruction when an
                operation is genuinely warranted.
              </p>
              <p>
                Alongside his private practice at 108 Harley Street and King Edward
                VII’s Hospital, Dr. Montgomery serves as a senior lower-limb
                consultant at Imperial College Healthcare NHS Trust (St Mary’s Major
                Trauma Centre), where he manages complex primary and revision joint
                replacements as well as acute athletic and traumatic leg injuries.
              </p>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-7">
              <h3 className="font-heading text-sm font-semibold text-[#102A43]">
                Professional Registrations &amp; Fellowships
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {CREDENTIALS_LIST.map((credential) => (
                  <li
                    key={credential}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#1565C0]"
                      aria-hidden="true"
                    />
                    <span>{credential}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
              <div className="text-xs text-slate-500">
                <span>GMC Specialist Register No. 6048291</span>
                <span className="mx-2 text-slate-300" aria-hidden="true">
                  ·
                </span>
                <span>Revalidated &amp; Appraised Annually</span>
              </div>
              <button
                type="button"
                onClick={() => onOpenBooking('Comprehensive Diagnostic Consultation')}
                className="inline-flex items-center justify-center rounded-lg border border-[#102A43] px-4 py-2 text-sm font-medium text-[#102A43] whitespace-nowrap shrink-0 transition-colors hover:bg-[#102A43] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64B5F6]"
              >
                Arrange a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
