import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageAnimations } from '../hooks/usePageAnimations';

function TermsOfService() {
  usePageAnimations();

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto w-full">
        {/* Hero Section */}
        <div className="relative z-10 mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8" data-animate="fade-up">
          <div>
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">Legal Documentation</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary max-w-2xl">
              Terms of Service
            </h1>
            <p className="text-on-surface-variant mt-4 font-body-md">Last Updated: October 24, 2024</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-gutter">
            
            {/* Section 1: Intro */}
            <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="intro" data-animate="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>info</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary">1. Introduction</h2>
              </div>
              <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
                <p>Welcome to <strong>SYNQUORA</strong>. These Terms of Service ("Terms") govern your use of our Smart Offline Attendance Management System. By accessing our local network or using the SYNQUORA interface, you agree to comply with these terms.</p>
                <p>SYNQUORA is a high-precision attendance ecosystem designed for environments where reliability and offline accessibility are paramount, leveraging distributed ESP32 nodes to maintain institutional records.</p>
              </div>
            </section>

            {/* Section 2: Purpose */}
            <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="purpose" data-animate="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-on-tertiary-container/10 flex items-center justify-center text-on-tertiary-container">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>memory</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary">2. System Purpose</h2>
              </div>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                The SYNQUORA solution is specifically architected for educational institutions. It utilizes ESP32-based hardware modules to create a robust, localized attendance tracking solution. Our mission is to eliminate network-dependency bottlenecks and provide an industrial-grade "zero-latency" recording experience for both administrators and participants.
              </p>
            </section>

            {/* Section 3: Responsibilities */}
            <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="responsibilities" data-animate="fade-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>groups</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary">3. User Responsibilities</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30">
                  <div className="flex items-center gap-2 mb-4 text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>school</span>
                    <h3 className="font-label-caps text-label-caps">For Students</h3>
                  </div>
                  <ul className="space-y-3 text-on-surface-variant text-body-md list-disc ml-4">
                    <li>Ensure correct entry of unique roll numbers/IDs.</li>
                    <li>Abstain from attempting duplicate submissions.</li>
                    <li>Use the system only during authorized sessions.</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30">
                  <div className="flex items-center gap-2 mb-4 text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>supervisor_account</span>
                    <h3 className="font-label-caps text-label-caps">For Teachers</h3>
                  </div>
                  <ul className="space-y-3 text-on-surface-variant text-body-md list-disc ml-4">
                    <li>Regularly verify record integrity after sessions.</li>
                    <li>Maintain strict confidentiality of session keys.</li>
                    <li>Protect administrative portal credentials.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 & 5 Bento Grid */}
            <div className="grid md:grid-cols-2 gap-gutter">
              {/* Account Rules */}
              <section className="glass-card rounded-2xl p-8 scroll-mt-32" id="accounts" data-animate="fade-up">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>key</span>
                  </div>
                  <h2 className="font-headline-md text-[20px] text-primary">4. Teacher Account Rules</h2>
                </div>
                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  Administrative accounts are personal and non-transferable. You are solely responsible for all activity occurring under your account. Unauthorized sharing of credentials constitutes a major security breach.
                </p>
              </section>

              {/* Attendance Rules */}
              <section className="glass-card rounded-2xl p-8 scroll-mt-32" id="attendance" data-animate="fade-up" data-animate-delay="150">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-on-tertiary-container/10 flex items-center justify-center text-on-tertiary-container">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
                  </div>
                  <h2 className="font-headline-md text-[20px] text-primary">5. Attendance Rules</h2>
                </div>
                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  Attendance windows are strictly timed. Only one active session is permitted per hardware node at any given time. System heuristics automatically flag and prevent duplicate roll number entries.
                </p>
              </section>
            </div>

            {/* Section 7 & 8 */}
            <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="availability" data-animate="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center text-error">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>settings_input_component</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary">7. System Availability</h2>
              </div>
              <div className="bg-surface-container-high/50 p-6 rounded-xl border-l-4 border-secondary">
                <p className="text-on-surface-variant font-body-md">
                  SYNQUORA operates via a <strong>local network infrastructure</strong>. Availability is contingent upon the stability of physical ESP32 nodes, local power conditions, and hardware health. We do not guarantee 100% uptime in the event of local infrastructure failures.
                </p>
              </div>
            </section>

            <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="prohibited" data-animate="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>block</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary">8. Prohibited Activities</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border border-outline-variant/30 rounded-lg flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-secondary mb-2" style={{ fontVariationSettings: "'FILL' 0" }}>lock_open</span>
                  <span className="font-label-caps text-label-caps">Unauthorized Access</span>
                </div>
                <div className="p-4 border border-outline-variant/30 rounded-lg flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-secondary mb-2" style={{ fontVariationSettings: "'FILL' 0" }}>edit_off</span>
                  <span className="font-label-caps text-label-caps">Record Modification</span>
                </div>
                <div className="p-4 border border-outline-variant/30 rounded-lg flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-secondary mb-2" style={{ fontVariationSettings: "'FILL' 0" }}>hardware</span>
                  <span className="font-label-caps text-label-caps">Hardware Tampering</span>
                </div>
              </div>
            </section>

            <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="ip" data-animate="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>copyright</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary">10. Intellectual Property</h2>
              </div>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                The <strong>SYNQUORA</strong> name, architecture diagrams, firmware logic, dashboard UI design, and all related documentation are the exclusive intellectual property of the SYNQUORA Project Team. No part of the system architecture may be replicated or reverse-engineered without explicit written authorization.
              </p>
            </section>

            <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="liability" data-animate="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>gavel</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary">11. Limitations of Liability</h2>
              </div>
              <p className="text-on-surface-variant font-body-md italic leading-relaxed">
                To the maximum extent permitted by law, SYNQUORA is provided "as is." We are not liable for attendance discrepancies arising from user input errors, local hardware malfunctions, or unexpected power surges affecting the ESP32 network controllers.
              </p>
            </section>

            <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32 border-2 border-secondary/20" id="contact" data-animate="fade-up">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <h2 className="font-headline-md text-headline-md text-primary mb-2">14. Contact Information</h2>
                  <p className="text-on-surface-variant font-body-md">Have questions regarding our terms or architecture?</p>
                </div>
                <div className="flex flex-col gap-3">
                  <a className="flex items-center gap-3 text-secondary font-bold hover:underline" href="mailto:support@synquora.io">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>mail</span>
                    support@synquora.io
                  </a>
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>help</span>
                    Engineering Support Team
                  </div>
                </div>
              </div>
            </section>

          </div>
      </main>

      <Footer />
    </div>
  );
}

export default TermsOfService;
