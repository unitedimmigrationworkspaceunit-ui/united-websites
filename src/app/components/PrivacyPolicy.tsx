import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface PrivacyPolicyProps {
  children: ReactNode;
}

export function PrivacyPolicy({ children }: PrivacyPolicyProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">Privacy Policy</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 text-sm text-muted-foreground">
          <div>
            <h3 className="font-semibold text-foreground text-base mb-2">United Immigration Services</h3>
            <p>Sector 35-C, Chandigarh, India</p>
            <p>Effective Date: June 2026 | Last Updated: June 2026</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground text-lg mb-2">1. Introduction</h3>
            <p>
              United Immigration Services (“we,” “our,” or “the Company”), located at Sector 35-C, Chandigarh, is committed to protecting the privacy and confidentiality of all individuals who engage with our services. This Privacy Policy explains how we collect, use, store, share, and protect your personal information in connection with our immigration consulting and advisory services.
            </p>
            <p className="mt-2">
              By engaging our services, visiting our office, or interacting with us through any channel, you acknowledge that you have read, understood, and agree to this Privacy Policy.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground text-lg mb-2">2. Information We Collect</h3>
            <p className="mb-4">We collect personal information necessary for providing immigration-related services. This may include:</p>
            
            <h4 className="font-medium text-foreground mb-1">2.1 Personal Identification Information</h4>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Full name, date of birth, gender, and nationality</li>
              <li>Passport and travel document details</li>
              <li>National identification numbers (Aadhaar, PAN, etc.)</li>
              <li>Photographs and biometric data (as required by visa processes)</li>
            </ul>

            <h4 className="font-medium text-foreground mb-1">2.2 Contact Information</h4>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Residential address, email address, and phone numbers</li>
              <li>Emergency contact details</li>
            </ul>

            <h4 className="font-medium text-foreground mb-1">2.3 Financial Information</h4>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Bank statements and proof of funds (for visa applications)</li>
              <li>Payment details for service fees</li>
              <li>Income and employment proof documents</li>
            </ul>

            <h4 className="font-medium text-foreground mb-1">2.4 Immigration & Legal Documents</h4>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Visa history, rejection records, and travel history</li>
              <li>Work permits, study permits, and residency documents</li>
              <li>Family and sponsorship-related documents</li>
            </ul>

            <h4 className="font-medium text-foreground mb-1">2.5 Sensitive Personal Information</h4>
            <p>
              In certain cases, we may collect sensitive information such as medical history, criminal background records, or other documents required by immigration authorities of the destination country. Such data is collected only with your explicit consent and handled with the highest level of security.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground text-lg mb-2">3. How We Use Your Information</h3>
            <p className="mb-2">We use your personal information solely for legitimate immigration service purposes, including:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Assessing your eligibility for visas, permits, or immigration programs</li>
              <li>Preparing and submitting visa and immigration applications on your behalf</li>
              <li>Communicating with embassies, consulates, and government authorities</li>
              <li>Providing legal and consultancy advice related to immigration matters</li>
              <li>Verifying your identity and preventing fraud</li>
              <li>Maintaining records required under applicable law or regulations</li>
              <li>Sending important service updates, appointment reminders, and correspondence</li>
              <li>Improving the quality and efficiency of our services</li>
            </ul>
            <p>We do not use your personal data for marketing purposes without your explicit consent.</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground text-lg mb-2">4. Legal Basis for Processing</h3>
            <p className="mb-2">We process your personal information based on one or more of the following legal grounds:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Contractual necessity: To provide the immigration services you have engaged us for</li>
              <li>Legal obligation: To comply with applicable Indian laws, embassy requirements, and government mandates</li>
              <li>Legitimate interest: To manage our business operations and protect our legal rights</li>
              <li>Consent: For any processing beyond what is strictly necessary for service delivery</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground text-lg mb-2">5. Disclosure and Sharing of Information</h3>
            <p className="mb-4">We treat your information as strictly confidential. We do not sell, rent, or trade your personal data. Information may be disclosed only in the following circumstances:</p>

            <h4 className="font-medium text-foreground mb-1">5.1 Government and Regulatory Bodies</h4>
            <p className="mb-4">Your information is shared with embassies, consulates, immigration departments, and other government agencies as required for processing your visa or immigration application.</p>

            <h4 className="font-medium text-foreground mb-1">5.2 Third-Party Service Providers</h4>
            <p className="mb-4">We may engage trusted third parties (such as courier services, document verification agencies, or translation services) who assist us in delivering our services. These parties are contractually bound to maintain confidentiality.</p>

            <h4 className="font-medium text-foreground mb-1">5.3 Legal Requirements</h4>
            <p className="mb-4">We may disclose your information if required to do so by law, court order, or any competent governmental authority.</p>

            <h4 className="font-medium text-foreground mb-1">5.4 With Your Consent</h4>
            <p>We may share your information with any other party with your prior explicit written consent.</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground text-lg mb-2">6. Data Storage and Security</h3>
            <p className="mb-2">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, alteration, or disclosure. These measures include:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Secure physical storage of paper documents at our Sector 35-C, Chandigarh office</li>
              <li>Password-protected digital systems and encrypted storage</li>
              <li>Restricted access to client data on a need-to-know basis</li>
              <li>Regular review of our security practices</li>
            </ul>
            <p>Despite these safeguards, no method of transmission or storage is 100% secure. We encourage you to communicate sensitive information through our secure channels.</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground text-lg mb-2">7. Data Retention</h3>
            <p className="mb-2">We retain your personal information for as long as is necessary to fulfill the purposes outlined in this Policy, or as required by applicable law. Generally:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Active client files are retained for the duration of the engagement and up to 7 years thereafter</li>
              <li>Financial records are retained for a minimum of 7 years as required under Indian tax laws</li>
              <li>After the retention period, data is securely destroyed or anonymized</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground text-lg mb-2">8. Your Rights</h3>
            <p className="mb-2">As a client or data subject, you have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Right to Access: Request a copy of the personal data we hold about you</li>
              <li>Right to Correction: Request correction of inaccurate or incomplete information</li>
              <li>Right to Withdrawal of Consent: Withdraw consent at any time (where processing is based on consent)</li>
              <li>Right to Restriction: Request that we limit the processing of your data in certain circumstances</li>
              <li>Right to Erasure: Request deletion of your data, subject to legal retention obligations</li>
            </ul>
            <p>To exercise any of these rights, please contact us using the details provided in Section 11. We will respond to your request within 30 days.</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground text-lg mb-2">9. Digital Channels and Communications</h3>
            <p className="mb-2">If you interact with us via email, WhatsApp, or any digital platform, please be aware that:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Communications through these channels may be stored and retained as part of your client record</li>
              <li>We use standard email security practices; however, email is not always a fully secure channel</li>
              <li>You should not share highly sensitive documents (such as passport copies) via unsecured channels without our prior guidance</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground text-lg mb-2">10. Children’s Privacy</h3>
            <p>
              We recognize that some immigration applications involve minors. Information relating to children (persons below 18 years of age) is collected only as necessary for their immigration applications, under the authority and with the consent of their parent or legal guardian. We do not knowingly collect information from minors for any other purpose.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground text-lg mb-2">11. Grievance Redressal & Contact</h3>
            <p className="mb-4">If you have any concerns, complaints, or queries regarding this Privacy Policy or the handling of your personal information, please contact our Grievance Officer:</p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold">United Immigration Services</p>
              <p>Address: Sector 35-C, Chandigarh – 160035, India</p>
              <p>Email: contact@unitedimmigration.in</p>
              <p>Office Hours: Monday – Saturday, 10:00 AM – 6:00 PM</p>
            </div>
            <p className="mt-4">We are committed to resolving any concerns within 30 days of receipt.</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground text-lg mb-2">12. Changes to This Privacy Policy</h3>
            <p>
              We reserve the right to update or modify this Privacy Policy at any time. Material changes will be communicated to existing clients via email or notice at our office. The most current version will always be available at our office premises. Your continued engagement with our services following any changes constitutes your acceptance of the updated Policy.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground text-lg mb-2">13. Governing Law</h3>
            <p>
              This Privacy Policy is governed by and construed in accordance with the laws of India, including the Information Technology Act, 2000 and applicable rules thereunder. Any disputes shall be subject to the exclusive jurisdiction of the courts in Chandigarh, India.
            </p>
          </div>

          <div className="pt-6 border-t mt-8">
            <p className="font-semibold">Authorised by Management</p>
            <p>United Immigration Services</p>
            <p>Sector 35-C, Chandigarh</p>
            <p>Effective: June 2026</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
