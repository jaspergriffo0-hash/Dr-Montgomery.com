export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  location: string;
  detail: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organisation: string;
  location: string;
  summary: string;
}

export interface SpecializationItem {
  id: string;
  category: 'hip' | 'knee' | 'limb';
  categoryLabel: string;
  title: string;
  subtitle: string;
  summary: string;
  indications: string[];
  diagnosticApproach: string;
  recoveryWindow: string;
  keyProcedure: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  durationOrMode: string;
  description: string;
  targetAudience: string;
}

export interface OutcomeMetric {
  value: string;
  label: string;
  benchmark: string;
}

export interface PublicationItem {
  year: string;
  journal: string;
  title: string;
  coAuthors: string;
  clinicalTakeaway: string;
}

export interface PatientOutcome {
  patientName: string;
  profile: string;
  procedure: string;
  before: string;
  outcome: string;
}

export interface ClinicLocation {
  id: string;
  name: string;
  address: string;
  postcode: string;
  hours: string;
  type: string;
}

export const IMAGES = {
  portrait: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_10.08.18_PM_ff720b07.jpeg',
  consultation: '/src/assets/images/doctor_consultation_room_1795434852442.jpg',
  theatre: '/src/assets/images/surgical_precision_theatre_1795434678365.jpg',
  rehab: '/src/assets/images/rehabilitation_mobility_1795434677590.jpg',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Specializations', href: '#specializations', id: 'specializations' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Achievements', href: '#achievements', id: 'achievements' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const HERO_METRICS = [
  { value: '22+ Years', label: 'Consultant Orthopaedic Practice' },
  { value: '6,400+', label: 'Lower Limb Procedures Performed' },
  { value: '99.2%', label: '10-Year Primary Implant Survivorship' },
  { value: 'GMC 6048291', label: 'Specialist Register · FRCS (Tr & Orth)' },
];

export const CREDENTIALS_LIST = [
  'Fellow of the Royal College of Surgeons of England (FRCS Tr & Orth)',
  'Master of Arts & Bachelor of Surgery, University of Cambridge (MA MB BChir)',
  'Doctor of Medicine in Implant Biomechanics, Imperial College London (MD)',
  'British Orthopaedic Association (BOA) & British Association for Surgery of the Knee (BASK)',
];

export const EDUCATION_TIMELINE: EducationItem[] = [
  {
    year: '2007',
    degree: 'International Fellowship in Adult Reconstruction & Sports Knee Surgery',
    institution: 'Hospital for Special Surgery & Schulthess Klinik',
    location: 'New York · Zurich',
    detail:
      'Subspecialty surgical training in kinematic knee alignment, complex revision hip arthroplasty, and multi-ligament athletic reconstruction.',
  },
  {
    year: '2005',
    degree: 'FRCS (Trauma & Orthopaedics)',
    institution: 'Royal College of Surgeons of England',
    location: 'London',
    detail:
      'Awarded Intercollegiate Fellowship following completion of the Percivall Pott Higher Surgical Training Rotation.',
  },
  {
    year: '2004',
    degree: 'Doctor of Medicine (MD) — Periprosthetic Bone Remodelling',
    institution: 'Imperial College London',
    location: 'South Kensington, London',
    detail:
      'Doctoral thesis investigating uncemented femoral stem osseointegration and gait force distribution using dual-energy densitometry.',
  },
  {
    year: '1997',
    degree: 'MA MB BChir (Distinction in Surgery)',
    institution: 'Trinity College, University of Cambridge',
    location: 'Cambridge',
    detail:
      'Pre-clinical Tripos in Medical Sciences followed by clinical undergraduate surgical training at Addenbrooke’s Hospital.',
  },
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    period: '2014 – Present',
    role: 'Consultant Orthopaedic Surgeon (Private & Specialist Practice)',
    organisation: 'King Edward VII’s Hospital & 108 Harley Street',
    location: 'Marylebone, London',
    summary:
      'Lead lower-limb arthroplasty and sports knee practice providing diagnostic consultations, robotic-assisted joint replacement, and second-opinion revision surgery.',
  },
  {
    period: '2008 – Present',
    role: 'Consultant Orthopaedic & Major Trauma Surgeon',
    organisation: 'Imperial College Healthcare NHS Trust (St Mary’s Hospital)',
    location: 'Paddington, London',
    summary:
      'Senior lower-limb consultant at London’s designated Major Trauma Centre, managing complex peri-articular fractures, limb salvage, and tertiary revision referrals.',
  },
  {
    period: '2016 – 2023',
    role: 'Clinical Lead for Lower Limb Arthroplasty & Enhanced Recovery',
    organisation: 'Imperial College Healthcare NHS Trust',
    location: 'London',
    summary:
      'Directed multidisciplinary surgical pathways reducing median post-arthroplasty inpatient stay from 4.2 days to 1.4 days while maintaining a 0.3% infection rate.',
  },
  {
    period: '2011 – Present',
    role: 'Honorary Senior Clinical Lecturer in Orthopaedic Surgery',
    organisation: 'Imperial College London, Department of Surgery & Cancer',
    location: 'London',
    summary:
      'Supervisor for higher surgical trainees and doctoral candidates researching robotic alignment accuracy and patellofemoral kinematics.',
  },
];

export const SPECIALIZATIONS: SpecializationItem[] = [
  {
    id: 'robotic-arthroplasty',
    category: 'hip',
    categoryLabel: 'Hip & Pelvis',
    title: 'Primary & Robotic-Assisted Hip Replacement',
    subtitle: 'Muscle-sparing total hip arthroplasty tailored to individual pelvic anatomy',
    summary:
      'Using CT-guided 3D preoperative planning and intraoperative haptic guidance, hip components are positioned to restore natural leg length, femoral offset, and spinopelvic stability.',
    indications: [
      'End-stage hip osteoarthritis & inflammatory arthropathy',
      'Avascular necrosis of the femoral head',
      'Developmental hip dysplasia in young adults',
    ],
    diagnosticApproach: 'Standing AP pelvis & lateral lumbar-pelvic radiographs with 3D CT templating.',
    recoveryWindow: 'Mobilising same day · Walking unaided at 3–4 weeks',
    keyProcedure: 'Posterior / Direct Superior Muscle-Sparing THA',
  },
  {
    id: 'complex-revision-hip',
    category: 'hip',
    categoryLabel: 'Hip & Pelvis',
    title: 'Complex Revision Hip Reconstruction',
    subtitle: 'Tertiary management of worn, loosened, or painful hip prostheses',
    summary:
      'Comprehensive evaluation of failing implants, bone stock defects, and periprosthetic fractures using trabecular metal augments and custom modular reconstruction.',
    indications: [
      'Aseptic loosening or polyethylene wear',
      'Recurrent prosthetic hip instability',
      'Periprosthetic femoral or acetabular fractures',
    ],
    diagnosticApproach: 'Metal-artefact reduction (MARS) MRI, bone scintigraphy, and sterile joint aspiration.',
    recoveryWindow: 'Protected weight-bearing 4–6 weeks · Full gait rehab 12 weeks',
    keyProcedure: 'Modular Revision Arthroplasty & Acetabular Augmentation',
  },
  {
    id: 'knee-arthroplasty',
    category: 'knee',
    categoryLabel: 'Knee & Ligament',
    title: 'Robotic Partial & Total Knee Replacement',
    subtitle: 'Ligament-balanced unicondylar and total knee resurfacing',
    summary:
      'Preserving healthy bone and cruciate ligaments wherever possible through unicompartmental resurfacing, or delivering sub-millimetre robotic balance in total knee replacement.',
    indications: [
      'Isolated medial or patellofemoral compartment arthritis',
      'Tricompartmental degenerative osteoarthritis',
      'Post-traumatic knee joint degeneration',
    ],
    diagnosticApproach: 'Weight-bearing Rosenburg radiographs, long-leg alignment axis views, and 3T MRI.',
    recoveryWindow: 'Hospital stay 1–2 nights · Driving at 4–6 weeks',
    keyProcedure: 'MAKO Robotic-Assisted Unicompartmental & Total Knee Arthroplasty',
  },
  {
    id: 'sports-knee-ligament',
    category: 'knee',
    categoryLabel: 'Knee & Ligament',
    title: 'Arthroscopic Ligament & Meniscal Preservation',
    subtitle: 'Keyhole ACL reconstruction and repair of acute sporting knee injuries',
    summary:
      'Anatomical ligament reconstruction using autologous hamstring or quadriceps tendon grafts alongside all-inside meniscal suture repair to protect long-term articular cartilage.',
    indications: [
      'Acute or chronic ACL & multi-ligament ruptures',
      'Repairable bucket-handle and root meniscal tears',
      'Recurrent patellar instability & MPFL injury',
    ],
    diagnosticApproach: 'High-resolution 3T musculoskeletal MRI and dynamic pivot-shift clinical laxity testing.',
    recoveryWindow: 'Day-case surgery · Return to straight-line running at 12 weeks',
    keyProcedure: 'Anatomical ACL Reconstruction & Meniscal Root Repair',
  },
  {
    id: 'limb-alignment-osteotomy',
    category: 'limb',
    categoryLabel: 'Lower Limb & Trauma',
    title: 'Limb Alignment, Osteotomy & Gait Correction',
    subtitle: 'Joint-preserving realignment for varus/valgus leg deformities',
    summary:
      'High tibial and distal femoral osteotomies shift mechanical load away from damaged compartments, allowing active patients to retain their native knee joint for decades.',
    indications: [
      'Varus ("bow-leg") or valgus ("knock-knee") malalignment',
      'Early unicompartmental overload in active adults under 55',
      'Post-fracture angular deformity of the tibia or femur',
    ],
    diagnosticApproach: 'Full-length standing hip-to-ankle mechanical axis radiographs & force-plate gait analysis.',
    recoveryWindow: 'Partial weight-bearing 4 weeks · Return to sport at 6 months',
    keyProcedure: 'Patient-Specific Instrumented Opening-Wedge Osteotomy',
  },
  {
    id: 'lower-limb-trauma',
    category: 'limb',
    categoryLabel: 'Lower Limb & Trauma',
    title: 'Lower Limb Trauma & Fracture Fixation',
    subtitle: 'Specialist reconstruction of complex femoral, tibial, and ankle fractures',
    summary:
      'Precision anatomical internal fixation of acute fractures, delayed unions, and non-unions involving the hip, femur, tibial plateau, shaft, and ankle.',
    indications: [
      'Tibial plateau & distal femoral articular fractures',
      'Femoral & tibial shaft non-union or malunion',
      'Complex sports & ski-related lower extremity trauma',
    ],
    diagnosticApproach: 'Multi-planar CT with 3D surface rendering and neurovascular assessment.',
    recoveryWindow: 'Early joint range of motion · Individualised weight-bearing protocol',
    keyProcedure: 'Minimally Invasive Locking Plate & Intramedullary Nail Fixation',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01.',
    title: 'Comprehensive Diagnostic Consultation',
    durationOrMode: '45 Minutes · Harley Street & Virtual',
    description:
      'Unrushed clinical history, biomechanical lower-limb examination, and immediate review of X-ray or MRI imaging with a clear conservative or surgical management plan.',
    targetAudience: 'New & Self-Referring Patients',
  },
  {
    number: '02.',
    title: 'Robotic-Assisted Joint Replacement',
    durationOrMode: 'Inpatient Pathway · King Edward VII’s Hospital',
    description:
      'CT-planned hip and knee arthroplasty using haptic robotic assistance for personalised component alignment, reduced soft-tissue trauma, and accelerated walking recovery.',
    targetAudience: 'Arthritis & Joint Degeneration',
  },
  {
    number: '03.',
    title: 'Arthroscopic Sports Knee & Ligament Surgery',
    durationOrMode: 'Day-Case Procedure · Rapid Rehab',
    description:
      'Keyhole meniscal repair, articular cartilage restoration, and anatomical ACL/PCL reconstruction designed to return athletes and active individuals safely to sport.',
    targetAudience: 'Athletic & Acute Knee Injuries',
  },
  {
    number: '04.',
    title: 'Tertiary Second-Opinion & Revision Clinic',
    durationOrMode: '60 Minutes · Multidisciplinary Review',
    description:
      'Detailed diagnostic workup for persistent pain after prior hip or knee surgery, implant loosening, suspected low-grade infection, or mechanical instability.',
    targetAudience: 'Complex & Revision Cases',
  },
  {
    number: '05.',
    title: 'Gait Biomechanics & Rehabilitation Coordination',
    durationOrMode: 'Integrated Physiotherapy Pathway',
    description:
      'Direct collaboration with specialist musculoskeletal physiotherapists using force-plate gait analysis and milestone-driven post-operative recovery protocols.',
    targetAudience: 'Pre-hab & Post-Operative Care',
  },
  {
    number: '06.',
    title: 'Medico-Legal Orthopaedic Reporting',
    durationOrMode: 'CPR Part 35 Compliant · 14-Day Turnaround',
    description:
      'Independent expert witness reports and clinical negligence opinions on lower-limb trauma, arthroplasty outcomes, and long-term functional prognosis.',
    targetAudience: 'Solicitors & Insurers',
  },
];

export const OUTCOME_METRICS: OutcomeMetric[] = [
  {
    value: '99.2%',
    label: '10-Year Implant Survivorship',
    benchmark: 'National Joint Registry (NJR) verified · vs 95.8% UK mean',
  },
  {
    value: '1.4 Days',
    label: 'Median Post-Op Mobilisation Stay',
    benchmark: 'Enhanced Recovery Programme · 94% walking day of surgery',
  },
  {
    value: '0.3%',
    label: 'Deep Surgical Site Infection Rate',
    benchmark: 'Continuous 10-year clinical audit · vs 1.1% national average',
  },
  {
    value: '97.8%',
    label: 'Patient-Reported Outcome Improvement',
    benchmark: 'Oxford Hip & Knee Score delta at 12 months post-op',
  },
];

export const HONOURS_LIST = [
  {
    year: '2024',
    title: 'Hunterian Professorship Nominee & Keynote Lecturer',
    body: 'Royal College of Surgeons of England — Invited lecture on spinopelvic kinematics in robotic hip arthroplasty.',
  },
  {
    year: '2021',
    title: 'British Orthopaedic Association Travelling Fellowship Award',
    body: 'Recognised for clinical innovation in day-case unicompartmental knee replacement pathways.',
  },
  {
    year: '2018',
    title: 'NHS Clinical Excellence Award (Silver Level)',
    body: 'Awarded for leadership of major lower-limb trauma and tertiary revision surgery at St Mary’s Hospital.',
  },
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    year: '2025',
    journal: 'The Bone & Joint Journal',
    title: 'Spinopelvic Mobility and Acetabular Cup Orientation in Robotic-Assisted Total Hip Arthroplasty: A 5-Year Prospective Cohort',
    coAuthors: 'Montgomery PG, Whitaker H, Patel S.',
    clinicalTakeaway:
      'Demonstrated a 78% reduction in dislocation risk among patients with stiff lumbar spines through patient-specific functional cup placement.',
  },
  {
    year: '2023',
    journal: 'Journal of Arthroplasty',
    title: 'Functional Alignment Versus Mechanical Alignment in Medial Unicompartmental Knee Replacement: Gait Force-Plate Outcomes',
    coAuthors: 'Montgomery PG, Al-Mansoor K, Davies R.',
    clinicalTakeaway:
      'Patients receiving ligament-referenced functional alignment achieved near-normal stair ascent symmetry at 6 months.',
  },
  {
    year: '2021',
    journal: 'Knee Surgery, Sports Traumatology, Arthroscopy',
    title: 'Meniscal Root Preservation Combined with Opening-Wedge High Tibial Osteotomy Delays Arthroplasty at 8-Year Follow-Up',
    coAuthors: 'Montgomery PG, Lindqvist E.',
    clinicalTakeaway:
      'Preserving meniscal hoop tension alongside mechanical axis correction yielded 91% native joint survival at 8 years.',
  },
];

export const PATIENT_OUTCOMES: PatientOutcome[] = [
  {
    patientName: 'Jonathan Hargreaves',
    profile: 'Barrister, Aged 61 · Kensington',
    procedure: 'Robotic Bilateral Staged Hip Replacement',
    before:
      'Severe bilateral osteoarthritis had reduced walking tolerance to under 200 yards and prevented sleep through night pain.',
    outcome:
      'Walking unaided three weeks after each stage; returned to coastal hill-walking in Devon four months post-operatively with a full pain-free range of motion.',
  },
  {
    patientName: 'claire_ashworth',
    profile: 'Architectural Historian, Aged 54 · Hampstead',
    procedure: 'ACL Reconstruction & Medial Meniscal Root Repair',
    before:
      'Complete ACL rupture and radial meniscal tear following a skiing fall in Verbier, causing persistent knee giving-way.',
    outcome:
      'Completed structured 24-week gait rehabilitation and resumed alpine skiing and tennis without brace support or instability.',
  },
  {
    patientName: 'Major Thomas Caldwell (Retd)',
    profile: 'Charity Director, Aged 68 · Guildford',
    procedure: 'Complex Revision Right Knee Arthroplasty',
    before:
      'Referred with a painfully loosened 14-year-old primary prosthesis causing significant varus collapse and daily reliance on crutches.',
    outcome:
      'Reconstructed with stemmed tibial augmentation; discharged on day three and now walks five miles daily without walking aids.',
  },
];

// Clean display name fix in data
PATIENT_OUTCOMES[1].patientName = 'Claire Ashworth';

export const CLINIC_LOCATIONS: ClinicLocation[] = [
  {
    id: 'harley-street',
    name: '108 Harley Street Consulting Rooms',
    address: '108 Harley Street, Marylebone, London',
    postcode: 'W1G 7ET',
    hours: 'Tue & Thu · 08:30 – 18:00',
    type: 'Private Consultations & Diagnostics',
  },
  {
    id: 'king-edward',
    name: 'King Edward VII’s Hospital',
    address: '5–10 Beaumont Street, Marylebone, London',
    postcode: 'W1G 6AA',
    hours: 'Mon & Fri Surgical Lists · Wed 14:00 – 17:30',
    type: 'Inpatient Surgery & Robotic Theatre',
  },
];

export const INSURANCE_PROVIDERS = [
  'Bupa',
  'AXA Health',
  'VitalityHealth',
  'Aviva',
  'WPA',
  'Cigna Global',
  'Healix',
  'Self-Pay / Embassy',
];
