import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageAnimations } from '../hooks/usePageAnimations';

function TermsOfService() {
  usePageAnimations();

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden min-h-screen flex flex-col">
      <div className="ambient-bg"></div>
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto w-full">
        {/* Hero Section */}
        <div className="relative z-10 mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8" data-animate="fade-up">
          <div>
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">Legal Documentation</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary max-w-2xl">
              Terms of Service
            </h1>
            <p className="text-on-surface-variant mt-4 font-body-md">Last Updated: October 2026</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-gutter">
            
          {/* Section 1: System Purpose */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="purpose" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>info</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">1. System Purpose</h2>
            </div>
            <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
              <p><strong>SYNQUORA – Smart Offline Attendance Management System</strong> is an ESP32-based offline attendance platform designed for educational institutions.</p>
              <p>The system provides a reliable method for managing classroom attendance through a local network without requiring internet connectivity, cloud services, or additional attendance hardware.</p>
            </div>
          </section>

          {/* Section 2: User Responsibilities */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="responsibilities" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>groups</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">2. User Responsibilities</h2>
            </div>
            <p className="text-on-surface-variant font-body-md leading-relaxed mb-8">
              Users are responsible for using the system correctly and maintaining the security of attendance records.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>school</span>
                  <h3 className="font-label-caps text-label-caps">Students</h3>
                </div>
                <p className="text-on-surface-variant font-semibold text-sm mb-2">Students must:</p>
                <ul className="space-y-3 text-on-surface-variant text-body-md list-disc ml-4">
                  <li>Enter correct roll numbers or student details.</li>
                  <li>Use the system only during authorized attendance sessions.</li>
                  <li>Avoid duplicate or incorrect submissions.</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>supervisor_account</span>
                  <h3 className="font-label-caps text-label-caps">Teachers</h3>
                </div>
                <p className="text-on-surface-variant font-semibold text-sm mb-2">Teachers must:</p>
                <ul className="space-y-3 text-on-surface-variant text-body-md list-disc ml-4">
                  <li>Keep login credentials secure.</li>
                  <li>Verify attendance records after each session.</li>
                  <li>Use the dashboard responsibly for attendance management.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Attendance Rules */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="rules" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">3. Attendance Rules</h2>
            </div>
            <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
              <p className="font-semibold text-primary">To maintain accuracy and reliability:</p>
              <ul className="list-disc ml-5 space-y-2 text-on-surface-variant">
                <li>Only one attendance session can be active at a time.</li>
                <li>Students can submit attendance only during the allowed session period.</li>
                <li>Duplicate attendance entries are automatically prevented.</li>
                <li>Attendance records should not be modified without proper authorization.</li>
              </ul>
            </div>
          </section>

          {/* Section 4: System Availability */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="availability" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>settings_input_component</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">4. System Availability</h2>
            </div>
            <div className="space-y-6 text-on-surface-variant font-body-md leading-relaxed">
              <p>SYNQUORA depends on the proper operation of:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 border border-outline-variant/30 rounded-lg flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-secondary mb-2" style={{ fontVariationSettings: "'FILL' 0" }}>memory</span>
                  <span className="font-label-caps text-label-caps">ESP32 hardware module</span>
                </div>
                <div className="p-4 border border-outline-variant/30 rounded-lg flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-secondary mb-2" style={{ fontVariationSettings: "'FILL' 0" }}>power</span>
                  <span className="font-label-caps text-label-caps">Local power supply</span>
                </div>
                <div className="p-4 border border-outline-variant/30 rounded-lg flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-secondary mb-2" style={{ fontVariationSettings: "'FILL' 0" }}>wifi</span>
                  <span className="font-label-caps text-label-caps">Local Wi-Fi environment</span>
                </div>
                <div className="p-4 border border-outline-variant/30 rounded-lg flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-secondary mb-2" style={{ fontVariationSettings: "'FILL' 0" }}>storage</span>
                  <span className="font-label-caps text-label-caps">Components and storage</span>
                </div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30">
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  The system is designed for reliable offline operation; however, hardware failures, power interruptions, or physical damage may affect availability.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Prohibited Activities */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="prohibited" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>block</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">5. Prohibited Activities</h2>
            </div>
            <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
              <p className="font-semibold text-primary">Users must not:</p>
              <ul className="list-disc ml-5 space-y-2 text-on-surface-variant">
                <li>Access unauthorized attendance sessions.</li>
                <li>Attempt to modify or delete attendance records without permission.</li>
                <li>Share teacher login credentials.</li>
                <li>Damage, tamper with, or misuse the hardware system.</li>
                <li>Use the platform for purposes other than attendance management.</li>
              </ul>
            </div>
          </section>

          {/* Section 6: Data Responsibility */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="data" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>folder_shared</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">6. Data Responsibility</h2>
            </div>
            <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
              <p>Attendance data generated by SYNQUORA should be handled according to institutional rules.</p>
              <p className="font-semibold text-primary">
                Teachers and administrators are responsible for maintaining confidentiality and ensuring proper usage of attendance information.
              </p>
            </div>
          </section>

          {/* Section 7: Policy Updates */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="updates" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>update</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">7. Policy Updates</h2>
            </div>
            <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
              <p>
                SYNQUORA may update these Terms of Service to improve system performance, security, and functionality.
              </p>
              <p className="italic text-sm pt-2">
                Users should review updated terms whenever new features or system improvements are introduced.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default TermsOfService;
