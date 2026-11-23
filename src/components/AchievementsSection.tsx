import { useState } from 'react';
import { Award, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import {
  HONOURS_LIST,
  OUTCOME_METRICS,
  PATIENT_OUTCOMES,
  PUBLICATIONS,
} from '../data/surgeonData';

export function AchievementsSection() {
  const [expandedPubIndex, setExpandedPubIndex] = useState<number | null>(0);

  return (
    <section
      id="achievements"
      className="border-y border-slate-200/80 bg-[#F8FAFC] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.08em] text-[#1565C0]">
            Audited Outcomes &amp; Academic Recognition
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-[#102A43] [text-wrap:balance] sm:text-4xl">
            Clinical Achievements &amp; Research
          </h2>
          <p className="mt-3 text-[15.5px] leading-[1.7] text-slate-600">
            Transparent National Joint Registry outcome tracking, Royal College
            academic honours, and peer-reviewed publications advancing lower-limb
            orthopaedics.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {OUTCOME_METRICS.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <p className="font-heading text-3xl font-bold tracking-tight text-[#102A43] tabular-nums">
                {item.value}
              </p>
              <p className="mt-2 font-heading text-sm font-semibold text-[#102A43]">
                {item.label}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {item.benchmark}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <Award className="h-5 w-5 text-[#1565C0]" aria-hidden="true" />
              <h3 className="font-heading text-lg font-semibold text-[#102A43]">
                Distinctions &amp; Honours
              </h3>
            </div>

            <div className="mt-6 divide-y divide-slate-200">
              {HONOURS_LIST.map((honour) => (
                <div key={honour.title} className="py-4 first:pt-0 last:pb-0">
                  <p className="text-xs font-semibold text-[#1565C0] tabular-nums">
                    {honour.year}
                  </p>
                  <h4 className="mt-1 font-heading text-[15px] font-semibold text-[#102A43]">
                    {honour.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {honour.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-7">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <BookOpen className="h-5 w-5 text-[#1565C0]" aria-hidden="true" />
                <h3 className="font-heading text-lg font-semibold text-[#102A43]">
                  Selected Peer-Reviewed Publications
                </h3>
              </div>
              <span className="text-xs text-slate-500">Click to view summary</span>
            </div>

            <div className="mt-6 divide-y divide-slate-200">
              {PUBLICATIONS.map((pub, index) => {
                const isExpanded = expandedPubIndex === index;
                return (
                  <div key={pub.title} className="py-4 first:pt-0 last:pb-0">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() =>
                        setExpandedPubIndex(isExpanded ? null : index)
                      }
                      className="flex w-full items-start justify-between gap-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64B5F6]"
                    >
                      <div>
                        <p className="text-xs text-slate-500">
                          <span className="font-semibold text-[#1565C0] tabular-nums">
                            {pub.year}
                          </span>
                          <span className="mx-2 text-slate-300" aria-hidden="true">
                            ·
                          </span>
                          <span className="font-medium text-slate-700">
                            {pub.journal}
                          </span>
                        </p>
                        <h4 className="mt-1 font-heading text-[15px] font-semibold leading-snug text-[#102A43]">
                          {pub.title}
                        </h4>
                      </div>
                      <span className="mt-1 shrink-0 text-slate-400">
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="h-4 w-4" aria-hidden="true" />
                        )}
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="mt-3 rounded-xl bg-[#F8FAFC] p-4 text-sm text-slate-600">
                        <p className="text-xs font-medium text-slate-500">
                          Authors: {pub.coAuthors}
                        </p>
                        <p className="mt-1.5 leading-relaxed text-slate-700">
                          {pub.clinicalTakeaway}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-heading text-xl font-semibold text-[#102A43]">
              Patient Functional Outcomes
            </h3>
            <p className="text-xs text-slate-500">
              Documented clinical recovery milestones shared with patient consent
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PATIENT_OUTCOMES.map((item) => (
              <article
                key={item.patientName}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div>
                  <p className="text-xs font-medium text-[#1565C0]">
                    {item.procedure}
                  </p>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed">
                    <div>
                      <span className="font-semibold text-[#102A43]">
                        Presentation:{' '}
                      </span>
                      <span className="text-slate-600">{item.before}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#102A43]">
                        Outcome:{' '}
                      </span>
                      <span className="text-slate-700">{item.outcome}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="font-heading text-sm font-semibold text-[#102A43]">
                    {item.patientName}
                  </p>
                  <p className="text-xs text-slate-500">{item.profile}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
