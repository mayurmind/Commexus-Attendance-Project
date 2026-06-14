import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageAnimations } from '../hooks/usePageAnimations';

function PrivacyPolicy() {
  usePageAnimations();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f9f9fb] group/design-root overflow-x-hidden font-body-md selection:bg-secondary/20">
      <style>
        {`
          .scroll-mt-header {
              scroll-margin-top: 100px;
          }
        `}
      </style>

      <Navbar />

      <main className="flex flex-1 flex-col max-w-4xl mx-auto w-full px-6 md:px-12 pt-28 pb-10">
          {/* Hero Section */}
          <section className="mb-16" data-animate="fade-up">
            <div className="relative overflow-hidden rounded-xl bg-primary-container p-8 md:p-12 text-on-primary">
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-secondary text-[10px] font-label-caps tracking-widest uppercase rounded-full mb-4">Official Documentation</span>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">Privacy Policy</h1>
                <p className="text-on-primary-container font-label-caps text-sm">Last Updated: October 2023 | Version 1.2.4 (Enterprise Edition)</p>
              </div>
              <div className="absolute right-[-10%] top-[-10%] opacity-20 pointer-events-none">
                <svg className="w-[500px] h-[500px]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.5,81.4,29,73.1,41.4C64.8,53.8,53.7,64.1,40.8,71.5C27.9,78.8,13.9,83.1,-0.6,84.1C-15.1,85.1,-30.2,82.8,-43.3,75.6C-56.3,68.4,-67.4,56.3,-75,42.5C-82.6,28.6,-86.7,14.3,-86.4,0.2C-86,-13.9,-81.3,-27.8,-73.4,-39.9C-65.5,-52,-54.3,-62.4,-41.2,-70.2C-28.1,-78,-14.1,-83.1,0.5,-84C15.1,-84.8,30.2,-83.5,44.7,-76.4Z" fill="#ffffff" transform="translate(100 100)"></path>
                </svg>
              </div>
            </div>
          </section>

          {/* Sections */}
          <div className="space-y-20 pb-20">
            {/* 1. Introduction */}
            <section className="scroll-mt-header" id="intro" data-animate="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-1 bg-secondary rounded-full"></div>
                <h2 className="text-2xl font-bold tracking-tight text-primary">1. Introduction</h2>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <p className="text-on-surface leading-relaxed mb-4">
                  SYNQUORA – Smart Offline Attendance Management System respects user privacy and is committed to protecting the personal information of students and faculty within the institutional environment.
                </p>
                <p className="text-on-surface leading-relaxed">
                  Our platform is designed with a "Privacy-by-Architecture" approach, ensuring that sensitive attendance and identity data remain strictly within the physical boundaries of your institution.
                </p>
              </div>
            </section>

            {/* 2. Information We Collect */}
            <section className="scroll-mt-header" id="collect" data-animate="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-1 bg-secondary rounded-full"></div>
                <h2 className="text-2xl font-bold tracking-tight text-primary">2. Information We Collect</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-surface-container rounded-lg border border-outline-variant">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>person</span>
                    <h3 className="font-bold text-primary">Student Data</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-on-surface-variant">
                    <li className="flex gap-2"><span>•</span> Full Name</li>
                    <li className="flex gap-2"><span>•</span> Roll Number / UID</li>
                    <li className="flex gap-2"><span>•</span> Department & Batch</li>
                    <li className="flex gap-2"><span>•</span> Attendance Status Logs</li>
                  </ul>
                </div>
                <div className="p-6 bg-surface-container rounded-lg border border-outline-variant">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>school</span>
                    <h3 className="font-bold text-primary">Faculty Data</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-on-surface-variant">
                    <li className="flex gap-2"><span>•</span> Instructor Name</li>
                    <li className="flex gap-2"><span>•</span> Staff ID & Credentials</li>
                    <li className="flex gap-2"><span>•</span> Course/Subject Assignments</li>
                    <li className="flex gap-2"><span>•</span> Session Creation Timestamps</li>
                  </ul>
                </div>
                <div className="p-6 bg-surface-container rounded-lg border border-outline-variant md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>settings_input_component</span>
                    <h3 className="font-bold text-primary">System Information</h3>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-2">We automatically log hardware-level interaction data:</p>
                  <ul className="space-y-2 text-sm text-on-surface-variant">
                    <li className="flex gap-2"><span>•</span> Device MAC address (for identification within the local LAN)</li>
                    <li className="flex gap-2"><span>•</span> SPIFFS storage status and ESP32 system health metrics</li>
                    <li className="flex gap-2"><span>•</span> RTC sync logs for precise attendance timestamps</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. How We Use Information */}
            <section className="scroll-mt-header" id="use" data-animate="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-1 bg-secondary rounded-full"></div>
                <h2 className="text-2xl font-bold tracking-tight text-primary">3. How We Use Information</h2>
              </div>
              <div className="glass-card p-8 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>edit_note</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Recording</h4>
                      <p className="text-sm text-on-surface-variant">Real-time recording of attendance during classroom sessions.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>description</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Reporting</h4>
                      <p className="text-sm text-on-surface-variant">Generating institutional reports for academic compliance.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>shield</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Verification</h4>
                      <p className="text-sm text-on-surface-variant">Preventing attendance proxies and verifying student identity.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>analytics</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Optimization</h4>
                      <p className="text-sm text-on-surface-variant">Analyzing attendance trends for institutional improvement.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Offline Data Processing */}
            <section className="scroll-mt-header" id="offline" data-animate="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-1 bg-secondary rounded-full"></div>
                <h2 className="text-2xl font-bold tracking-tight text-primary">4. Offline Data Processing</h2>
              </div>
              <div className="bg-primary-container text-on-primary p-8 rounded-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>lan</span> Local-First Architecture
                  </h3>
                  <p className="text-on-primary-container leading-relaxed mb-6">
                    Unlike traditional SaaS models, SYNQUORA operates entirely within your local network environment. All data processing occurs on the edge device—no data is transmitted to external cloud servers, third-party databases, or over the public internet. 
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-label-caps border border-white/20">No Cloud Sync</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-label-caps border border-white/20">Zero WAN Egress</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-label-caps border border-white/20">Intranet-Only access</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Data Storage */}
            <section className="scroll-mt-header" id="storage" data-animate="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-1 bg-secondary rounded-full"></div>
                <h2 className="text-2xl font-bold tracking-tight text-primary">5. Data Storage</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 border border-outline-variant rounded-lg flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-secondary text-3xl mb-3" style={{ fontVariationSettings: "'FILL' 0" }}>folder_zip</span>
                  <h4 className="font-bold text-primary">SPIFFS</h4>
                  <p className="text-xs text-on-surface-variant mt-2">Data is stored using Serial Peripheral Interface Flash File System.</p>
                </div>
                <div className="p-6 border border-outline-variant rounded-lg flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-secondary text-3xl mb-3" style={{ fontVariationSettings: "'FILL' 0" }}>memory</span>
                  <h4 className="font-bold text-primary">ESP32 Flash</h4>
                  <p className="text-xs text-on-surface-variant mt-2">Local volatile and non-volatile memory for session state.</p>
                </div>
                <div className="p-6 border border-outline-variant rounded-lg flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-secondary text-3xl mb-3" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
                  <h4 className="font-bold text-primary">DS1307 RTC</h4>
                  <p className="text-xs text-on-surface-variant mt-2">Precision hardware clock integration for timestamp integrity.</p>
                </div>
              </div>
            </section>

            {/* 6. Data Security */}
            <section className="scroll-mt-header" id="security" data-animate="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-1 bg-secondary rounded-full"></div>
                <h2 className="text-2xl font-bold tracking-tight text-primary">6. Data Security</h2>
              </div>
              <div className="glass-card p-6 rounded-lg border-l-4 border-secondary">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary mt-1" style={{ fontVariationSettings: "'FILL' 0" }}>vpn_key</span>
                    <div>
                      <h4 className="font-bold text-primary">Faculty Authentication</h4>
                      <p className="text-sm text-on-surface-variant">Administrative controls require local password validation before any data modification or export.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary mt-1" style={{ fontVariationSettings: "'FILL' 0" }}>lock</span>
                    <div>
                      <h4 className="font-bold text-primary">Session Isolation</h4>
                      <p className="text-sm text-on-surface-variant">Each attendance window is strictly time-bound and isolated from concurrent requests.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Combined for Layout Flow */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* 7. Data Sharing */}
              <section className="scroll-mt-header" id="sharing">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>share</span> 7. Data Sharing
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  We do not sell, trade, or share your data with external commercial entities. All information remains within the institution's localized hardware.
                </p>
              </section>

              {/* 8. Cookies */}
              <section className="scroll-mt-header" id="cookies">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>cookie</span> 8. Cookies
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  We only use essential technical session tokens for faculty dashboard stability. We do not use tracking or advertising cookies.
                </p>
              </section>

              {/* 9. User Rights */}
              <section className="scroll-mt-header" id="rights">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>rule</span> 9. User Rights
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Users have the right to request a review of their attendance records through their respective institutional department.
                </p>
              </section>

              {/* 10. Data Retention */}
              <section className="scroll-mt-header" id="retention">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>event_repeat</span> 10. Data Retention
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Data is retained on-device as per institutional academic cycles. Periodic backups to institutional offline servers may be conducted.
                </p>
              </section>

              {/* 11. Third-Party Services */}
              <section className="scroll-mt-header" id="thirdparty">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>settings_ethernet</span> 11. Third-Party
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  SYNQUORA is an independent system with no reliance on external cloud, biometric, or proprietary RFID services.
                </p>
              </section>

              {/* 12. Children's Privacy */}
              <section className="scroll-mt-header" id="children">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>family_restroom</span> 12. Children's Privacy
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Necessary academic attendance info is collected for educational purposes in compliance with institutional guidelines for students.
                </p>
              </section>
            </div>

            {/* 13. Changes */}
            <section className="scroll-mt-header border-t border-outline-variant pt-12" id="changes">
              <h2 className="text-2xl font-bold tracking-tight text-primary mb-4">13. Changes to This Policy</h2>
              <p className="text-on-surface leading-relaxed">
                We may update this Privacy Policy periodically to reflect hardware upgrades or institutional policy changes. Users are encouraged to review this page via the local dashboard periodically.
              </p>
            </section>

            {/* 14. Contact */}
            <section className="scroll-mt-header bg-surface-container-high p-8 rounded-xl text-center" id="contact">
              <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 text-center">14. Contact Information</h2>
              <div className="flex flex-col md:flex-row gap-8 justify-center">
                <div className="flex-1">
                  <p className="font-label-caps text-label-caps text-secondary mb-2">PROJECT TEAM</p>
                  <p className="text-primary font-bold">Synquora Core Development</p>
                  <p className="text-on-surface-variant text-sm">Hardware & Firmware Research Wing</p>
                </div>
              </div>
            </section>

          </div>
      </main>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
