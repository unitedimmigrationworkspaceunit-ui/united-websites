export type StageStatus = 'completed' | 'active' | 'pending';

export interface ApplicationStage {
  name: string;
  status: StageStatus;
  date: string;
  detail?: string;
}

export interface ApplicationRecord {
  id: string;
  applicantName: string;
  visaType: string;
  destination: string;
  status: 'active' | 'approved' | 'under_review';
  submittedOn: string;
  internalStages: ApplicationStage[];
  embassyStages: ApplicationStage[];
}

export const applications: ApplicationRecord[] = [
  {
    id: 'UIS-2026-48291',
    applicantName: 'Priya Sharma',
    visaType: 'Canada Express Entry PR',
    destination: 'Canada',
    status: 'active',
    submittedOn: 'Feb 10, 2026',
    internalStages: [
      { name: 'Profile Created', status: 'completed', date: 'Jan 15, 2026', detail: 'Client profile verified & assessment completed' },
      { name: 'Documents Received', status: 'completed', date: 'Jan 20, 2026', detail: '18 documents verified & checklist approved' },
      { name: 'Eligibility Assessment', status: 'completed', date: 'Jan 25, 2026', detail: 'CRS 478 — Eligible for Express Entry' },
      { name: 'Application Prepared', status: 'completed', date: 'Feb 5, 2026', detail: 'All forms filled & reviewed by senior consultant' },
      { name: 'Application Submitted', status: 'active', date: 'Feb 10, 2026', detail: 'Submitted to IRCC — awaiting acknowledgement' },
      { name: 'Follow-up & Updates', status: 'pending', date: 'Expected: Feb 25', detail: '' },
      { name: 'Decision Received', status: 'pending', date: 'Expected: Mar 15', detail: '' },
    ],
    embassyStages: [
      { name: 'Application Received', status: 'completed', date: 'Feb 10, 2026', detail: 'IRCC acknowledged receipt — AOR issued' },
      { name: 'Medical Exam Requested', status: 'completed', date: 'Feb 13, 2026', detail: 'Upfront medicals completed at IRCC-designated clinic' },
      { name: 'Biometrics Enrolled', status: 'completed', date: 'Feb 18, 2026', detail: 'Biometrics collected at VFS Global centre' },
      { name: 'Background Verification', status: 'active', date: 'In Progress', detail: 'RCMP check & overseas criminal history review' },
      { name: 'Final Decision Making', status: 'pending', date: 'Pending', detail: '' },
      { name: 'Passport / COPR Request', status: 'pending', date: 'Pending', detail: '' },
      { name: 'Visa / PR Approved ✅', status: 'pending', date: 'Pending', detail: '' },
    ],
  },
  {
    id: 'UIS-2026-39104',
    applicantName: 'Rajesh Patel',
    visaType: 'Australia Skilled Visa 189',
    destination: 'Australia',
    status: 'under_review',
    submittedOn: 'Jan 28, 2026',
    internalStages: [
      { name: 'Profile Created', status: 'completed', date: 'Dec 10, 2025', detail: 'Skills assessment initiated for Civil Engineer' },
      { name: 'Documents Received', status: 'completed', date: 'Dec 18, 2025', detail: 'All employment & qualification documents verified' },
      { name: 'Eligibility Assessment', status: 'completed', date: 'Jan 5, 2026', detail: 'Points score 82 — eligible for Subclass 189' },
      { name: 'Application Prepared', status: 'completed', date: 'Jan 20, 2026', detail: 'EOI lodged and invitation received' },
      { name: 'Application Submitted', status: 'completed', date: 'Jan 28, 2026', detail: 'Submitted to Department of Home Affairs' },
      { name: 'Follow-up & Updates', status: 'active', date: 'In Progress', detail: 'Monitoring case officer requests' },
      { name: 'Decision Received', status: 'pending', date: 'Expected: Apr 2026', detail: '' },
    ],
    embassyStages: [
      { name: 'Application Received', status: 'completed', date: 'Jan 28, 2026', detail: 'ImmiAccount updated — application in queue' },
      { name: 'Medical Exam Requested', status: 'completed', date: 'Feb 2, 2026', detail: 'Medical clearance obtained' },
      { name: 'Biometrics Enrolled', status: 'completed', date: 'Feb 8, 2026', detail: 'Biometrics completed at VFS' },
      { name: 'Background Verification', status: 'active', date: 'In Progress', detail: 'Character & health checks underway' },
      { name: 'Final Decision Making', status: 'pending', date: 'Pending', detail: '' },
      { name: 'Passport / COPR Request', status: 'pending', date: 'Pending', detail: '' },
      { name: 'Visa / PR Approved ✅', status: 'pending', date: 'Pending', detail: '' },
    ],
  },
  {
    id: 'UIS-2026-55820',
    applicantName: 'Neha Gupta',
    visaType: 'UK Student Visa',
    destination: 'United Kingdom',
    status: 'approved',
    submittedOn: 'Jan 12, 2026',
    internalStages: [
      { name: 'Profile Created', status: 'completed', date: 'Nov 20, 2025', detail: 'University offer letter verified' },
      { name: 'Documents Received', status: 'completed', date: 'Dec 1, 2025', detail: 'Financial & academic documents approved' },
      { name: 'Eligibility Assessment', status: 'completed', date: 'Dec 8, 2025', detail: 'CAS letter obtained from university' },
      { name: 'Application Prepared', status: 'completed', date: 'Dec 20, 2025', detail: 'Online application completed & reviewed' },
      { name: 'Application Submitted', status: 'completed', date: 'Jan 12, 2026', detail: 'Submitted via UKVI portal' },
      { name: 'Follow-up & Updates', status: 'completed', date: 'Jan 18, 2026', detail: 'Biometric appointment completed' },
      { name: 'Decision Received', status: 'completed', date: 'Jan 25, 2026', detail: 'Visa approved — passport returned' },
    ],
    embassyStages: [
      { name: 'Application Received', status: 'completed', date: 'Jan 12, 2026', detail: 'UKVI acknowledged application' },
      { name: 'Medical Exam Requested', status: 'completed', date: 'Jan 14, 2026', detail: 'TB screening completed' },
      { name: 'Biometrics Enrolled', status: 'completed', date: 'Jan 18, 2026', detail: 'Biometrics at VFS Global Chandigarh' },
      { name: 'Background Verification', status: 'completed', date: 'Jan 22, 2026', detail: 'Checks cleared' },
      { name: 'Final Decision Making', status: 'completed', date: 'Jan 24, 2026', detail: 'Decision made by entry clearance officer' },
      { name: 'Passport / COPR Request', status: 'completed', date: 'Jan 25, 2026', detail: 'Passport dispatched via courier' },
      { name: 'Visa / PR Approved ✅', status: 'completed', date: 'Jan 25, 2026', detail: 'Student visa granted — valid until Sep 2028' },
    ],
  },
];

export function findApplication(query: string): ApplicationRecord | undefined {
  const normalized = query.trim().toUpperCase();
  if (!normalized) return undefined;
  return applications.find((app) => app.id.toUpperCase() === normalized);
}
