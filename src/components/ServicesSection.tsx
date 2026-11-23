import { ArrowRight } from 'lucide-react';
import { IMAGES, SERVICES } from '../data/surgeonData';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  onOpenBooking: (preselectedService?: string) => void;
}

export function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.08em] text-[#1565C0]">
              Patient Pathways &amp; Clinical Care
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-[#102A43] [text-wrap:balance] sm:text-4xl">
              Orthopaedic Services &amp; Surgical Pathways
            </h2>
            <p className="mt-3 max-w-2xl text-[15.5px] leading-[1.7] text-slate-600">
              Every patient pathway begins with thorough clinical diagnosis and
              clear explanation of non-surgical and operative options, supported by
              dedicated London physiotherapy partners.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#102A43] px-5 py-2.5 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#1B3B5A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64B5F6]"
            >
              <span>Book Consultation</span>
              <ArrowRight className="h-4 w-4 text-[#64B5F6]" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.number}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#F8FAFC]/55 p-6 transition-colors duration-200 hover:border-slate-300 hover:bg-white sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-heading text-lg font-semibold text-[#1565C0] tabular-nums">
                    {service.number}
                  </span>
                  <span className="text-xs text-slate-500">
                    {service.targetAudience}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-[#102A43]">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-xs font-medium text-slate-500">
                  {service.durationOrMode}
                </p>
                <p className="mt-4 text-sm leading-[1.7] text-slate-600">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-200/90 pt-4">
                <button
                  type="button"
                  onClick={() => onOpenBooking(service.title)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#102A43] transition-colors hover:text-[#1565C0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#64B5F6]"
                >
                  <span>Enquire for this service</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch overflow-hidden rounded-2xl border border-slate-200 bg-[#102A43] text-white lg:grid-cols-12">
          <div className="flex flex-col justify-center p-8 lg:col-span-6 lg:p-10">
            <p className="text-xs font-semibold tracking-[0.08em] text-[#64B5F6]">
              Enhanced Recovery &amp; Rehabilitation
            </p>
            <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-white [text-wrap:balance]">
              Gait Biomechanics &amp; Structured Return to Mobility
            </h3>
            <p className="mt-4 text-[15px] leading-[1.7] text-slate-300">
              Surgery is only half of a successful orthopaedic outcome. Dr.
              Montgomery works directly with London musculoskeletal physiotherapists
              and gait laboratories so patients progress safely from early weight
              bearing to confident daily activity and sport.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span>Day-Zero Mobilisation</span>
              <span className="text-slate-500" aria-hidden="true">
                ·
              </span>
              <span>Force-Plate Gait Review</span>
              <span className="text-slate-500" aria-hidden="true">
                ·
              </span>
              <span>6-Week &amp; 12-Month Clinical Follow-Up</span>
            </div>
          </div>

          <div className="min-h-[260px] lg:col-span-6">
            <ResilientImage
              src={IMAGES.rehab}
              alt="Minimalist gait biomechanics and orthopaedic rehabilitation studio"
              className="h-full w-full object-cover"
              fallbackTitle="Gait Biomechanics & Rehabilitation"
              fallbackSubtitle="Integrated Post-Operative Physiotherapy Pathway"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
