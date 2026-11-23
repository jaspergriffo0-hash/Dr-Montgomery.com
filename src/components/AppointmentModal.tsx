import { FormEvent, useEffect, useState } from 'react';
import { Calendar, CheckCircle2, X } from 'lucide-react';
import { CLINIC_LOCATIONS, INSURANCE_PROVIDERS, SERVICES } from '../data/surgeonData';

interface AppointmentModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}

export function AppointmentModal({
  isOpen,
  initialService,
  onClose,
}: AppointmentModalProps) {
  const [clinicId, setClinicId] = useState(CLINIC_LOCATIONS[0].id);
  const [serviceTitle, setServiceTitle] = useState(
    initialService || SERVICES[0].title
  );
  const [fundingType, setFundingType] = useState<'insured' | 'self-pay'>('insured');
  const [insurer, setInsurer] = useState(INSURANCE_PROVIDERS[0]);
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (08:30 – 12:30)');
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [validationError, setValidationError] = useState('');
  const [confirmationId, setConfirmationId] = useState<string | null>(null);

  useEffect(() => {
    if (initialService) {
      setServiceTitle(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const selectedClinic =
    CLINIC_LOCATIONS.find((c) => c.id === clinicId) ?? CLINIC_LOCATIONS[0];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (patientName.trim().length < 2) {
      setValidationError('Please enter the patient’s full name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patientEmail.trim())) {
      setValidationError('Please provide a valid email address for confirmation.');
      return;
    }
    if (patientPhone.trim().length < 7) {
      setValidationError('Please enter a contact telephone number.');
      return;
    }
    if (!preferredDate) {
      setValidationError('Please select a preferred consultation date.');
      return;
    }

    const ref = `APT-${Math.floor(10000 + Math.random() * 90000)}`;
    setConfirmationId(ref);
  };

  const handleCloseAndReset = () => {
    setConfirmationId(null);
    setValidationError('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1F33]/70 p-4 backdrop-blur-xs"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleCloseAndReset();
      }}
    >
      <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 sm:px-8">
          <div className="flex items-center gap-2.5">
            <Calendar className="h-5 w-5 text-[#1565C0]" aria-hidden="true" />
            <h2
              id="booking-modal-title"
              className="font-heading text-lg font-semibold text-[#102A43]"
            >
              Book Consultation with Dr. Montgomery
            </h2>
          </div>
          <button
            type="button"
            onClick={handleCloseAndReset}
            aria-label="Close appointment dialog"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-[#102A43]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {confirmationId ? (
            <div className="py-4">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-6 w-6 shrink-0 text-emerald-700"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-semibold tracking-[0.06em] text-emerald-700">
                    Appointment Request Logged
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-semibold text-[#102A43]">
                    Reference {confirmationId}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Thank you, <span className="font-medium text-[#102A43]">{patientName}</span>.
                    Dr. Montgomery’s Harley Street secretary will confirm your
                    exact clinic slot by telephone or email within 4 business hours.
                  </p>
                </div>
              </div>

              <div className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-[#F8FAFC] text-sm">
                <div className="flex justify-between gap-4 px-4 py-3">
                  <span className="text-slate-500">Consulting Location</span>
                  <span className="text-right font-medium text-[#102A43]">
                    {selectedClinic.name}
                  </span>
                </div>
                <div className="flex justify-between gap-4 px-4 py-3">
                  <span className="text-slate-500">Clinical Pathway</span>
                  <span className="text-right font-medium text-[#102A43]">
                    {serviceTitle}
                  </span>
                </div>
                <div className="flex justify-between gap-4 px-4 py-3">
                  <span className="text-slate-500">Preferred Date &amp; Window</span>
                  <span className="text-right font-medium text-[#102A43] tabular-nums">
                    {preferredDate} · {timeSlot}
                  </span>
                </div>
                <div className="flex justify-between gap-4 px-4 py-3">
                  <span className="text-slate-500">Funding</span>
                  <span className="text-right font-medium text-[#102A43]">
                    {fundingType === 'insured'
                      ? `Private Insurance (${insurer})`
                      : 'Self-Pay Consultation'}
                  </span>
                </div>
              </div>

              <div className="mt-7 flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseAndReset}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#102A43] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1B3B5A]"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {validationError && (
                <div
                  role="alert"
                  className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                >
                  {validationError}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-[#102A43]">
                  Clinic Location
                </label>
                <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {CLINIC_LOCATIONS.map((clinic) => {
                    const selected = clinic.id === clinicId;
                    return (
                      <button
                        key={clinic.id}
                        type="button"
                        onClick={() => setClinicId(clinic.id)}
                        className={`rounded-xl border p-3.5 text-left transition-colors ${
                          selected
                            ? 'border-[#102A43] bg-[#102A43] text-white'
                            : 'border-slate-200 bg-white text-[#102A43] hover:bg-slate-50'
                        }`}
                      >
                        <p className="font-heading text-sm font-semibold">
                          {clinic.name}
                        </p>
                        <p
                          className={`mt-1 text-xs ${
                            selected ? 'text-slate-300' : 'text-slate-500'
                          }`}
                        >
                          {clinic.postcode} · {clinic.hours}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  htmlFor="booking-service"
                  className="block text-xs font-semibold text-[#102A43]"
                >
                  Consultation or Procedure Focus
                </label>
                <input
                  id="booking-service"
                  type="text"
                  value={serviceTitle}
                  onChange={(e) => setServiceTitle(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#102A43] focus:border-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#64B5F6]/50"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="booking-date"
                    className="block text-xs font-semibold text-[#102A43]"
                  >
                    Preferred Date *
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#102A43] tabular-nums focus:border-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#64B5F6]/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="booking-window"
                    className="block text-xs font-semibold text-[#102A43]"
                  >
                    Preferred Time Window
                  </label>
                  <select
                    id="booking-window"
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#102A43] focus:border-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#64B5F6]/50"
                  >
                    <option value="Morning (08:30 – 12:30)">
                      Morning (08:30 – 12:30)
                    </option>
                    <option value="Afternoon (13:30 – 17:30)">
                      Afternoon (13:30 – 17:30)
                    </option>
                    <option value="First Available Slot">
                      First Available Urgent Slot
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <span className="block text-xs font-semibold text-[#102A43]">
                    Funding Pathway
                  </span>
                  <div className="mt-1.5 grid grid-cols-2 gap-1 rounded-lg border border-slate-200 bg-[#F8FAFC] p-1">
                    <button
                      type="button"
                      onClick={() => setFundingType('insured')}
                      className={`rounded-md py-2 text-xs font-medium transition-colors ${
                        fundingType === 'insured'
                          ? 'bg-[#102A43] text-white'
                          : 'text-slate-600 hover:text-[#102A43]'
                      }`}
                    >
                      Private Insurance
                    </button>
                    <button
                      type="button"
                      onClick={() => setFundingType('self-pay')}
                      className={`rounded-md py-2 text-xs font-medium transition-colors ${
                        fundingType === 'self-pay'
                          ? 'bg-[#102A43] text-white'
                          : 'text-slate-600 hover:text-[#102A43]'
                      }`}
                    >
                      Self-Pay
                    </button>
                  </div>
                </div>

                {fundingType === 'insured' ? (
                  <div>
                    <label
                      htmlFor="booking-insurer"
                      className="block text-xs font-semibold text-[#102A43]"
                    >
                      Insurer
                    </label>
                    <select
                      id="booking-insurer"
                      value={insurer}
                      onChange={(e) => setInsurer(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#102A43] focus:border-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#64B5F6]/50"
                    >
                      {INSURANCE_PROVIDERS.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div className="flex items-end pb-2 text-xs text-slate-600">
                    Initial consultation fee: £320 · Follow-up: £210
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-xs font-semibold text-[#102A43]"
                  >
                    Patient Name *
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Full name"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#102A43] focus:border-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#64B5F6]/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="booking-email"
                    className="block text-xs font-semibold text-[#102A43]"
                  >
                    Email *
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    required
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    placeholder="email@example.co.uk"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#102A43] focus:border-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#64B5F6]/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="booking-phone"
                    className="block text-xs font-semibold text-[#102A43]"
                  >
                    Telephone *
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="+44 7..."
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#102A43] focus:border-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#64B5F6]/50"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="booking-notes"
                  className="block text-xs font-semibold text-[#102A43]"
                >
                  Brief Symptom Summary or Imaging Notes (Optional)
                </label>
                <textarea
                  id="booking-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Right knee medial pain for 6 months, recent MRI completed"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-[#102A43] focus:border-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#64B5F6]/50"
                />
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 pt-5">
                <button
                  type="button"
                  onClick={handleCloseAndReset}
                  className="min-h-[42px] rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="min-h-[42px] rounded-lg bg-[#102A43] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1B3B5A]"
                >
                  Confirm Appointment Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
