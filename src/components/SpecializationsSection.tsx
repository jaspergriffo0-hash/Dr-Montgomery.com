import { useMemo, useState } from 'react';
import { ArrowUpRight, Bone, CheckCircle2, Clock, Stethoscope } from 'lucide-react';
import { IMAGES, SPECIALIZATIONS, SpecializationItem } from '../data/surgeonData';
import { ResilientImage } from './ResilientImage';

interface SpecializationsSectionProps {
  onOpenBooking: (preselectedService?: string) => void;
}

type CategoryFilter = 'all' | 'hip' | 'knee' | 'limb';

const FILTER_TABS: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All Conditions' },
  { id: 'hip', label: 'Hip & Pelvis' },
  { id: 'knee', label: 'Knee & Ligament' },
  { id: 'limb', label: 'Lower Limb & Trauma' },
];

export function SpecializationsSection({ onOpenBooking }: SpecializationsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedId, setSelectedId] = useState<string>(SPECIALIZATIONS[0].id);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return SPECIALIZATIONS;
    return SPECIALIZATIONS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const activeSpec: SpecializationItem = useMemo(() => {
    return (
      filteredItems.find((item) => item.id === selectedId) ??
      filteredItems[0] ??
      SPECIALIZATIONS[0]
    );
  }, [filteredItems, selectedId]);

  const handleCategoryChange = (category: CategoryFilter) => {
    setActiveCategory(category);
    const nextList =
      category === 'all'
        ? SPECIALIZATIONS
        : SPECIALIZATIONS.filter((item) => item.category === category);
    if (nextList.length > 0 && !nextList.some((item) => item.id === selectedId)) {
      setSelectedId(nextList[0].id);
    }
  };

  return (
    <section
      id="specializations"
      className="border-y border-slate-200/80 bg-[#F8FAFC] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.08em] text-[#1565C0]">
              Clinical Focus
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-[#102A43] [text-wrap:balance] sm:text-4xl">
              Orthopaedic Specializations
            </h2>
            <p className="mt-3 text-[15.5px] leading-[1.7] text-slate-600">
              Subspecialty expertise across degenerative joint disease, athletic
              ligament injuries, limb realignment, and complex lower-limb trauma.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter specializations by anatomical area"
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-slate-200 bg-white p-1"
          >
            {FILTER_TABS.map((tab) => {
              const isSelected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => handleCategoryChange(tab.id)}
                  className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors sm:text-[13px] ${
                    isSelected
                      ? 'bg-[#102A43] text-white'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-[#102A43]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {filteredItems.map((item) => {
              const isSelected = activeSpec.id === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedId(item.id)}
                  className={`group flex w-full flex-col rounded-xl border p-5 text-left transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64B5F6] ${
                    isSelected
                      ? 'border-[#102A43] bg-[#102A43] text-white shadow-sm'
                      : 'border-slate-200 bg-white text-[#102A43] hover:border-slate-300 hover:bg-slate-50/70'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`text-xs font-medium ${
                        isSelected ? 'text-[#64B5F6]' : 'text-[#1565C0]'
                      }`}
                    >
                      {item.categoryLabel}
                    </span>
                    <ArrowUpRight
                      className={`h-4 w-4 shrink-0 transition-transform duration-150 ${
                        isSelected
                          ? 'text-[#64B5F6]'
                          : 'text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#102A43]'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-1.5 font-heading text-base font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-1 text-[13px] leading-relaxed ${
                      isSelected ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {item.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white lg:col-span-7">
            <div className="aspect-[16/9] w-full overflow-hidden border-b border-slate-200 bg-[#102A43]">
              <ResilientImage
                src={IMAGES.theatre}
                alt="Robotic-assisted orthopaedic surgical suite used by Dr. Montgomery"
                className="h-full w-full object-cover"
                fallbackTitle="Precision Orthopaedic Theatre"
                fallbackSubtitle="CT-Guided & Robotic-Assisted Joint Reconstruction"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="font-medium text-[#1565C0]">
                  {activeSpec.categoryLabel}
                </span>
                <span aria-hidden="true">·</span>
                <span>{activeSpec.keyProcedure}</span>
              </div>

              <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-[#102A43]">
                {activeSpec.title}
              </h3>

              <p className="mt-3 text-[15px] leading-[1.7] text-slate-600">
                {activeSpec.summary}
              </p>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <h4 className="flex items-center gap-2 font-heading text-sm font-semibold text-[#102A43]">
                  <Bone className="h-4 w-4 text-[#1565C0]" aria-hidden="true" />
                  <span>Common Clinical Indications</span>
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {activeSpec.indications.map((indication) => (
                    <li
                      key={indication}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#1565C0]"
                        aria-hidden="true"
                      />
                      <span>{indication}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 border-t border-slate-200 pt-6 sm:grid-cols-2">
                <div>
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-[#102A43]">
                    <Stethoscope className="h-3.5 w-3.5 text-[#1565C0]" aria-hidden="true" />
                    <span>Diagnostic Pathway</span>
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {activeSpec.diagnosticApproach}
                  </p>
                </div>
                <div>
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-[#102A43]">
                    <Clock className="h-3.5 w-3.5 text-[#1565C0]" aria-hidden="true" />
                    <span>Expected Recovery</span>
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {activeSpec.recoveryWindow}
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
                <p className="text-xs text-slate-500">
                  Private &amp; insured referrals accepted with or without GP letter.
                </p>
                <button
                  type="button"
                  onClick={() => onOpenBooking(activeSpec.title)}
                  className="inline-flex min-h-[42px] items-center justify-center rounded-lg bg-[#102A43] px-5 py-2.5 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#1B3B5A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64B5F6]"
                >
                  Request Specialist Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
