import { ArrowRight, CalendarCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_METRICS, IMAGES } from '../data/surgeonData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onOpenBooking: (preselectedService?: string) => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#102A43] pt-[68px] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_75%_20%,rgba(100,181,246,0.12),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-[1280px] px-6 pb-14 pt-12 lg:px-8 lg:pb-16 lg:pt-16">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <p className="text-xs font-medium tracking-[0.06em] text-[#64B5F6] sm:text-sm">
              <span>MA MB BChir (Cantab)</span>
              <span className="mx-2 text-slate-400" aria-hidden="true">
                ·
              </span>
              <span>FRCS (Tr &amp; Orth)</span>
              <span className="mx-2 text-slate-400" aria-hidden="true">
                ·
              </span>
              <span>MD</span>
            </p>

            <h1 className="mt-4 max-w-2xl font-heading text-[clamp(2.15rem,4vw,3.5rem)] font-bold leading-[1.12] tracking-tight text-white [text-wrap:balance]">
              Dr. Percival George Montgomery
            </h1>

            <p className="mt-3 font-heading text-lg font-medium text-slate-200 sm:text-xl">
              Consultant Orthopaedic Surgeon
            </p>

            <p className="mt-6 max-w-xl text-[15.5px] leading-[1.7] text-slate-300 sm:text-base">
              Specialising in surgical and non-surgical care for bone, joint, leg, and
              musculoskeletal conditions. Practising at 108 Harley Street and King
              Edward VII’s Hospital, London, with a clinical focus on robotic-assisted
              hip and knee replacement, sports ligament reconstruction, and lower-limb
              realignment.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenBooking('Comprehensive Diagnostic Consultation')}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#64B5F6] px-6 py-3 text-sm font-semibold text-[#0B1F33] whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#82C4F8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64B5F6]"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                <span>Book Appointment</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('specializations')}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-200 hover:border-white/45 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64B5F6]"
              >
                <span>Explore Specializations</span>
                <ArrowRight className="h-4 w-4 text-[#64B5F6]" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-10 border-t border-white/15 pt-6 text-xs text-slate-300 sm:text-[13px]">
              <span>108 Harley Street, London W1G</span>
              <span className="mx-2.5 text-slate-500" aria-hidden="true">
                ·
              </span>
              <span>King Edward VII’s Hospital</span>
              <span className="mx-2.5 text-slate-500" aria-hidden="true">
                ·
              </span>
              <span>Imperial College Healthcare NHS Trust</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-2xl border border-white/15 bg-[#0B1F33] shadow-2xl lg:min-h-[490px]">
              <ResilientImage
                src={IMAGES.portrait}
                alt="Portrait of Dr. Percival George Montgomery, Consultant Orthopaedic Surgeon"
                className="h-full w-full object-cover object-[58%_25%] lg:absolute lg:inset-0"
                fallbackTitle="Dr. Percival George Montgomery"
                fallbackSubtitle="Consultant Orthopaedic Surgeon · 108 Harley Street"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B1F33]/85 via-[#0B1F33]/30 to-transparent"
              />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-xs text-slate-200">
                <div>
                  <p className="font-heading text-sm font-semibold text-white">
                    Harley Street Consulting Rooms
                  </p>
                  <p className="mt-0.5 text-slate-300">
                    Adult Reconstruction &amp; Lower Limb Trauma
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/15 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {HERO_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="bg-[#0E263D] px-6 py-5 transition-colors hover:bg-[#13314E]"
            >
              <p className="font-heading text-2xl font-semibold tracking-tight text-white tabular-nums">
                {metric.value}
              </p>
              <p className="mt-1 text-[13px] text-slate-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
