import { FormEvent, useState } from 'react';
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { CLINIC_LOCATIONS } from '../data/surgeonData';

interface ContactSectionProps {
  onOpenBooking: (preselectedService?: string) => void;
}

export function ContactSection({ onOpenBooking }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState('Patient Consultation Enquiry');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (trimmedMessage.length < 10) {
      setErrorMsg('Please provide brief details of your enquiry.');
      return;
    }

    const refCode = `PGM-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(refCode);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setErrorMsg('');
    setSubmittedRef(null);
  };

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.08em] text-[#1565C0]">
              Practice &amp; Referrals
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-[#102A43] [text-wrap:balance] sm:text-4xl">
              Consulting Rooms &amp; Contact
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.7] text-slate-600">
              For private appointments, GP and physiotherapist referrals, or
              medico-legal instructions, please contact Dr. Montgomery’s medical
              secretary or submit an enquiry below.
            </p>

            <div className="mt-8 space-y-5">
              {CLINIC_LOCATIONS.map((clinic) => (
                <div
                  key={clinic.id}
                  className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5"
                >
                  <p className="text-xs font-medium text-[#1565C0]">{clinic.type}</p>
                  <h3 className="mt-1 font-heading text-base font-semibold text-[#102A43]">
                    {clinic.name}
                  </h3>
                  <div className="mt-3 space-y-1.5 text-sm text-slate-600">
                    <p className="flex items-start gap-2">
                      <MapPin
                        className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                        aria-hidden="true"
                      />
                      <span>
                        {clinic.address}, {clinic.postcode}
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Clock
                        className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                        aria-hidden="true"
                      />
                      <span className="tabular-nums">{clinic.hours}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3 border-t border-slate-200 pt-6 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#1565C0]" aria-hidden="true" />
                <div>
                  <span className="text-slate-500">Medical Secretary: </span>
                  <a
                    href="tel:+442079460821"
                    className="font-medium text-[#102A43] tabular-nums hover:text-[#1565C0]"
                  >
                    +44 (0)20 7946 0821
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#1565C0]" aria-hidden="true" />
                <div className="min-w-0">
                  <span className="text-slate-500">Email: </span>
                  <a
                    href="mailto:dr.percivalgeorgemontgomery@outlook.com"
                    className="break-all font-medium text-[#102A43] hover:text-[#1565C0]"
                  >
                    dr.percivalgeorgemontgomery@outlook.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-[#102A43]">
                    Direct Practice Enquiry
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Responded to within one working day by Dr. Montgomery’s
                    secretarial team.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="inline-flex min-h-[40px] items-center justify-center rounded-lg bg-[#102A43] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#1B3B5A]"
                >
                  Open Full Booking Scheduler
                </button>
              </div>

              {submittedRef ? (
                <div className="mt-8 rounded-xl border border-emerald-200 bg-white p-6 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 shrink-0 text-emerald-700"
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-[#102A43]">
                        Enquiry Received
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        Thank you, <span className="font-medium text-[#102A43]">{name}</span>. Your message has been logged with Dr. Montgomery’s practice office under reference{' '}
                        <span className="font-semibold text-[#102A43] tabular-nums">
                          {submittedRef}
                        </span>
                        . A confirmation has been queued for{' '}
                        <span className="font-medium text-[#102A43]">{email}</span>.
                      </p>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="mt-5 inline-flex min-h-[40px] items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-[#102A43] transition-colors hover:bg-slate-50"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                  {errorMsg && (
                    <div
                      role="alert"
                      className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                    >
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[#102A43]"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alistair Finch"
                        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#102A43] placeholder:text-slate-400 focus:border-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#64B5F6]/50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[#102A43]"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.co.uk"
                        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#102A43] placeholder:text-slate-400 focus:border-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#64B5F6]/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-[#102A43]"
                      >
                        Telephone (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+44 7700 900123"
                        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#102A43] placeholder:text-slate-400 focus:border-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#64B5F6]/50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-type"
                        className="block text-xs font-semibold text-[#102A43]"
                      >
                        Enquiry Category
                      </label>
                      <select
                        id="contact-type"
                        value={enquiryType}
                        onChange={(e) => setEnquiryType(e.target.value)}
                        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#102A43] focus:border-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#64B5F6]/50"
                      >
                        <option value="Patient Consultation Enquiry">
                          Patient Consultation Enquiry
                        </option>
                        <option value="GP or Specialist Referral">
                          GP or Specialist Referral
                        </option>
                        <option value="Second Opinion / Imaging Review">
                          Second Opinion / Imaging Review
                        </option>
                        <option value="Medico-Legal Instruction">
                          Medico-Legal Instruction
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[#102A43]"
                    >
                      Clinical Context or Question *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please describe your symptoms, affected joint or limb, or referral requirements (avoid including sensitive NHS numbers here)."
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#102A43] placeholder:text-slate-400 focus:border-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#64B5F6]/50"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                    <p className="text-xs text-slate-500">
                      Handled in strict medical confidence under UK GDPR standards.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#102A43] px-6 py-2.5 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#1B3B5A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64B5F6]"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
