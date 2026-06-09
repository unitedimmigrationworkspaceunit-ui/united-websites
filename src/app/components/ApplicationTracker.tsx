import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Circle, Search, Building2, FileCheck, Loader2, AlertCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { findApplication, type ApplicationStage, type ApplicationRecord, type StageStatus } from '../data/applications';

function StatusIcon({ status }: { status: StageStatus }) {
  if (status === 'completed') return <CheckCircle2 className="w-7 h-7 text-emerald-500 flex-shrink-0" />;
  if (status === 'active') return (
    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.8 }}>
      <Loader2 className="w-7 h-7 text-[#D4A24C] flex-shrink-0 animate-spin" />
    </motion.div>
  );
  return <Circle className="w-7 h-7 text-gray-300 flex-shrink-0" />;
}

function TrackerColumn({ title, icon: Icon, stages, accentColor }: { title: string; icon: React.ElementType; stages: ApplicationStage[]; accentColor: string }) {
  const completed = stages.filter((s) => s.status === 'completed').length;
  const progress = (completed / stages.length) * 100;

  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md" style={{ background: accentColor }}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-[#0B1F3A] text-sm leading-tight">{title}</h3>
          <p className="text-xs text-gray-500">{completed}/{stages.length} steps completed</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-xs mb-1.5">
          <span className="text-gray-500 font-medium">Overall Progress</span>
          <span className="font-bold" style={{ color: accentColor }}>{Math.round(progress)}%</span>
        </div>
        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${accentColor}80, ${accentColor})` }}
          />
        </div>
      </div>

      <div className="space-y-0">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.name}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
            className="flex gap-3"
          >
            <div className="flex flex-col items-center">
              <StatusIcon status={stage.status} />
              {index < stages.length - 1 && (
                <div
                  className="w-0.5 h-8 mt-1 rounded-full transition-colors"
                  style={{ background: stage.status === 'completed' ? '#86efac' : '#e5e7eb' }}
                />
              )}
            </div>

            <div className="pb-6 flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h4 className={`text-sm font-semibold leading-tight ${
                  stage.status === 'completed' ? 'text-[#0B1F3A]' :
                  stage.status === 'active' ? 'text-[#D4A24C]' : 'text-gray-400'
                }`}>
                  {stage.name}
                </h4>
                {stage.status === 'active' && (
                  <span className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: '#D4A24C20', color: '#D4A24C' }}>
                    Live
                  </span>
                )}
                {stage.status === 'completed' && (
                  <span className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full font-semibold bg-emerald-50 text-emerald-600">
                    Done
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400 mt-0.5">{stage.date}</p>
              {stage.detail && stage.status !== 'pending' && (
                <p className="text-xs text-gray-500 mt-1.5 bg-gray-50 rounded-lg px-2.5 py-1.5 leading-relaxed">
                  {stage.detail}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function statusLabel(status: ApplicationRecord['status']) {
  if (status === 'approved') return { text: 'Visa Approved', color: 'bg-emerald-400' };
  if (status === 'under_review') return { text: 'Under Review', color: 'bg-amber-400' };
  return { text: 'Application Active', color: 'bg-green-400' };
}

function ApplicationResult({ application }: { application: ApplicationRecord }) {
  const status = statusLabel(application.status);

  return (
    <motion.div
      key={application.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#1a3a5c] rounded-2xl p-5 mb-6 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#D4A24C] rounded-xl flex items-center justify-center flex-shrink-0">
            <FileCheck className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-white font-bold">Application ID: {application.id}</p>
            <p className="text-white/60 text-xs">{application.applicantName} · {application.visaType}</p>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className={`w-2.5 h-2.5 rounded-full ${status.color}`}
          />
          <span className="text-white/80 text-sm font-medium">{status.text}</span>
        </div>
      </div>

      <Card className="p-6 lg:p-8 border-[#D4A24C]/15 shadow-xl rounded-2xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <TrackerColumn
            title="United Immigration — Internal Status"
            icon={Building2}
            stages={application.internalStages}
            accentColor="#D4A24C"
          />

          <div className="hidden lg:flex flex-col items-center">
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
            <div className="my-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-xs font-bold">&</span>
            </div>
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
          </div>
          <div className="lg:hidden h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          <TrackerColumn
            title="Embassy / Government Portal Status"
            icon={Building2}
            stages={application.embassyStages}
            accentColor="#3b82f6"
          />
        </div>
      </Card>

      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {[
          { icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" />, label: 'Completed' },
          { icon: <div className="w-4 h-4 rounded-full border-2 border-[#D4A24C] border-t-transparent animate-spin" />, label: 'In Progress' },
          { icon: <Circle className="w-4 h-4 text-gray-300" />, label: 'Pending' },
        ].map(({ icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-sm text-gray-600">
            {icon} {label}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function ApplicationTracker() {
  const [applicationId, setApplicationId] = useState('');
  const [searchedId, setSearchedId] = useState('');
  const [notFound, setNotFound] = useState(false);

  const application = searchedId ? findApplication(searchedId) : undefined;

  const handleTrack = (e?: FormEvent) => {
    e?.preventDefault();
    const query = applicationId.trim();
    if (!query) return;
    setSearchedId(query);
    setNotFound(!findApplication(query));
  };

  return (
    <section id="tracker" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A24C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 bg-[#F5EFE6] text-[#D4A24C] rounded-full text-sm font-semibold mb-4">
            Real-Time Tracking
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-4">
            Track Your Application
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Enter your application number to view live status from our office and the embassy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <Card className="p-5 bg-gradient-to-br from-[#F5EFE6] to-white border-[#D4A24C]/20 shadow-lg">
            <p className="text-sm font-semibold text-[#0B1F3A] mb-3">Enter your Application ID</p>
            <form onSubmit={handleTrack} className="flex gap-3">
              <Input
                placeholder="e.g. UIS-2026-48291"
                value={applicationId}
                onChange={(e) => setApplicationId(e.target.value.toUpperCase())}
                className="flex-1 border-[#D4A24C]/30 focus:border-[#D4A24C] bg-white uppercase"
              />
              <Button type="submit" className="bg-[#D4A24C] hover:bg-[#B8892E] text-white px-5 gap-2">
                <Search className="w-4 h-4" /> Track
              </Button>
            </form>
            <p className="text-xs text-gray-400 mt-2">
              Try demo IDs: UIS-2026-48291 · UIS-2026-39104 · UIS-2026-55820
            </p>
          </Card>
        </motion.div>

        <AnimatePresence mode="wait">
          {notFound && searchedId && (
            <motion.div
              key="not-found"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-xl mx-auto mb-8"
            >
              <Card className="p-6 border-red-200 bg-red-50/50 flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0B1F3A]">Application not found</p>
                  <p className="text-sm text-gray-600 mt-1">
                    No application matches <span className="font-mono font-semibold">{searchedId.toUpperCase()}</span>.
                    Please check your ID or contact us at +91 77107 05551.
                  </p>
                </div>
              </Card>
            </motion.div>
          )}

          {application && (
            <ApplicationResult key={application.id} application={application} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
