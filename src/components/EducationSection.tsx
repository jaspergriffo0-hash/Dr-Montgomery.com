import { GraduationCap } from 'lucide-react';
import { EDUCATION_TIMELINE } from '../data/surgeonData';

export function EducationSection() {
  return (
    <section id="education" className="border-y border-slate-200/80 bg-[#F8FAFC] py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#102A43]">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </div>
            <p className="mt-4 text-xs font-semibold tracking-[0.08em] text-[#1565C0]">
              Academic Foundation
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-[#102A43] [text-wrap:balance]">
              Education &amp; Surgical Training
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
              Educated at the University of Cambridge and Imperial College London,
              followed by subspecialty reconstruction fellowships in New York and
              Zurich.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {EDUCATION_TIMELINE.map((item) => (
                <article
                  key={`${item.year}-${item.degree}`}
                  className="grid grid-cols-1 gap-3 p-6 transition-colors hover:bg-slate-50/70 sm:grid-cols-12 sm:gap-6 sm:p-7"
                >
                  <div className="sm:col-span-3">
                    <p className="font-heading text-lg font-semibold text-[#102A43] tabular-nums">
                      {item.year}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">{item.location}</p>
                  </div>
                  <div className="sm:col-span-9">
                    <h3 className="font-heading text-base font-semibold leading-snug text-[#102A43] sm:text-[17px]">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#1565C0]">
                      {item.institution}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
