import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageAnimations } from '../hooks/usePageAnimations';

function PrivacyPolicy() {
  usePageAnimations();

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden min-h-screen flex flex-col">
      <div className="ambient-bg"></div>
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto w-full">
        {/* Hero Section */}
        <div className="relative z-10 mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8" data-animate="fade-up">
          <div>
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">Official Documentation</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary max-w-2xl">
              Privacy Policy
            </h1>
            <p className="text-on-surface-variant mt-4 font-body-md">Last Updated: June 2026</p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-gutter">
          
          {/* 1. Introduction */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="intro" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>info</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">1. Introduction</h2>
            </div>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              <strong>SYNQUORA – Smart Offline Attendance Management System</strong> is designed to provide secure and reliable attendance management while protecting student and faculty information. The system follows a local-first approach where attendance data is processed and stored within the institution's environment using ESP32-based hardware.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="collect" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>inventory_2</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">2. Information We Collect</h2>
            </div>
            <p className="text-on-surface-variant font-body-md leading-relaxed mb-6">
              SYNQUORA collects only the necessary information required for attendance management.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>person</span>
                  <h3 className="font-label-caps text-label-caps text-primary">Student Information</h3>
                </div>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li className="flex gap-2"><span>•</span> Student name</li>
                  <li className="flex gap-2"><span>•</span> Roll number / Student ID</li>
                  <li className="flex gap-2"><span>•</span> Attendance status</li>
                  <li className="flex gap-2"><span>•</span> Attendance session records</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>school</span>
                  <h3 className="font-label-caps text-label-caps text-primary">Teacher Information</h3>
                </div>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li className="flex gap-2"><span>•</span> Teacher login credentials</li>
                  <li className="flex gap-2"><span>•</span> Session details</li>
                  <li className="flex gap-2"><span>•</span> Subject and lecture information</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>settings_input_component</span>
                  <h3 className="font-label-caps text-label-caps text-primary">System Information</h3>
                </div>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li className="flex gap-2"><span>•</span> Attendance timestamps</li>
                  <li className="flex gap-2"><span>•</span> Device and storage status</li>
                  <li className="flex gap-2"><span>•</span> System activity logs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. How We Use Information */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="use" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>insights</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">3. How We Use Information</h2>
            </div>
            <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
              <p>Collected information is used only for academic and attendance-related purposes.</p>
              <p className="font-semibold text-primary">The data helps in:</p>
              <ul className="list-disc ml-5 space-y-2 text-on-surface-variant">
                <li>Recording student attendance</li>
                <li>Generating attendance reports</li>
                <li>Maintaining lecture records</li>
                <li>Preventing duplicate attendance entries</li>
                <li>Improving system reliability</li>
              </ul>
            </div>
          </section>

          {/* 4. Offline Data Processing & Storage */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="offline" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>wifi_off</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">4. Offline Data Processing & Storage</h2>
            </div>
            <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
              <p>SYNQUORA operates using an offline local network created by the ESP32 system.</p>
              <div className="bg-primary-container text-on-primary p-6 rounded-xl space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Attendance data is processed locally.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>No external cloud server is required.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Records are stored securely using ESP32 SPIFFS storage.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>RTC module provides accurate date and time information for each record.</span>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Data Security & Protection */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32 border-l-4 border-secondary" id="security" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>shield</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">5. Data Security & Protection</h2>
            </div>
            <div className="space-y-6 text-on-surface-variant font-body-md leading-relaxed">
              <p>SYNQUORA implements security measures to protect attendance records.</p>
              <p className="font-semibold text-primary">Security features include:</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                  <span>Teacher authentication</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                  <span>Controlled attendance sessions</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                  <span>Duplicate attendance prevention</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                  <span>Local data storage protection</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                  <span>Session recovery after system restart</span>
                </li>
              </ul>
              <div className="text-sm font-semibold text-primary bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>lock</span>
                <span>Only authorized users can access and manage attendance information.</span>
              </div>
            </div>
          </section>

          {/* 6. Data Sharing & User Privacy */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="sharing" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>visibility_off</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">6. Data Sharing & User Privacy</h2>
            </div>
            <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
              <p>
                SYNQUORA does not sell, share, or transfer attendance information to external organizations or third-party services.
              </p>
              <p className="font-semibold text-primary">
                All attendance records remain within the institution's local system and are used only for educational management purposes.
              </p>
            </div>
          </section>

          {/* 7. Data Retention & Policy Updates */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32" id="updates" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>update</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">7. Data Retention & Policy Updates</h2>
            </div>
            <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
              <p>
                Attendance records are stored according to institutional requirements and academic policies.
              </p>
              <p className="font-semibold text-primary">The system may receive future updates to improve:</p>
              <ul className="list-disc ml-5 space-y-2 text-on-surface-variant">
                <li>Security</li>
                <li>Performance</li>
                <li>Data management</li>
              </ul>
              <p className="italic text-sm pt-2">
                Users are encouraged to review this policy whenever system updates are introduced.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
