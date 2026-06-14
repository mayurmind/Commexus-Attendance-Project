import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageAnimations } from '../hooks/usePageAnimations';

function Security() {
  const containerRef = useRef(null);

  usePageAnimations();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 10 - 5;
      const y = (e.clientY / window.innerHeight) * 10 - 5;
      
      if (containerRef.current) {
        const cards = containerRef.current.querySelectorAll('.glass-card');
        cards.forEach(card => {
          card.style.transform = `translate(${x}px, ${y}px)`;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-secondary-fixed selection:text-on-secondary-fixed min-h-screen flex flex-col overflow-x-hidden" ref={containerRef}>
      <style>
        {`
          .glow-accent {
              box-shadow: 0px 20px 40px rgba(59, 130, 246, 0.08);
          }
          .cyan-glow:focus-within {
              box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.2);
              border-color: #06B6D4;
          }
          @keyframes pulse-subtle {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.7; }
          }
          .animate-pulse-subtle {
              animation: pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}
      </style>

      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2" data-animate="fade-left">
              <span className="font-label-caps text-label-caps text-secondary mb-4 block tracking-widest">ARCHITECTURE & DEFENSE</span>
              <h1 className="font-display-lg text-display-lg text-primary mb-6">Fortified Intelligence for Modern Institutions</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                SYNQUORA's security-first philosophy integrates local processing, hardware-level record verification, and a zero-cloud architecture to ensure absolute data sovereignty.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>verified_user</span>
                  <span className="font-label-caps text-secondary">Local-First Engine</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-on-tertiary-container/10 rounded-full border border-on-tertiary-container/20">
                  <span className="material-symbols-outlined text-on-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>lan</span>
                  <span className="font-label-caps text-on-tertiary-container">Air-Gapped Ready</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative" data-animate="fade-right" data-animate-delay="200">
              <div className="aspect-square rounded-[2rem] overflow-hidden glass-card glow-accent p-8 flex items-center justify-center transition-transform duration-75 ease-out">
                <div className="relative z-10 w-full aspect-video bg-primary-container rounded-xl overflow-hidden shadow-2xl border border-outline/20">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH58gV_MfW0Wg5PY1idteTQ-SNpIpMyFhquYctudp5Atl76cHUoIOYEmH7_ZG7w6tLzQqFH6JwvDk9XZfMWZQCbXyTIQWHG6VRH2RH3m_g13kEagQVYA5h0x8XoZWpcIglyivR5KDu0BmuPSko-AGoi4WtvlxTHYbXWjVTL7R2BhslqZvkvmiCAvhG6CkiZZRuoEuSN71vY6ltWZQPici2ZpSW2fCCX17L87VuZWActSS-oU95u1XhP-f1nQUmGgMzrbcx3ypOGerC" alt="Security visualization" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Featured Grid */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            
            {/* Secure Login */}
            <div className="md:col-span-2 lg:col-span-2 glass-card p-8 rounded-3xl flex flex-col justify-between hover:shadow-xl transition-all duration-300 group ease-out card-shine" data-animate="fade-up" data-animate-delay="100">
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>lock_person</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">Secure Authentication</h3>
                <p className="text-on-surface-variant font-body-md">Robust teacher login system with authorized access and role-based permissions to ensure only validated personnel manage classroom data.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant/30 flex justify-between items-center">
                <span className="font-label-caps text-secondary">RBAC ENABLED</span>
                <span className="material-symbols-outlined text-outline" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>arrow_forward</span>
              </div>
            </div>

            {/* Offline Network */}
            <div className="glass-card p-8 rounded-3xl hover:shadow-xl transition-all duration-300 ease-out card-shine" data-animate="fade-up" data-animate-delay="200">
              <div className="w-12 h-12 rounded-xl bg-on-tertiary-container/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>wifi_off</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Offline Network</h3>
              <p className="text-on-surface-variant font-body-md text-sm">Local Wi-Fi architecture eliminates internet exposure, preventing external intrusion attempts.</p>
            </div>

            {/* Local Storage */}
            <div className="glass-card p-8 rounded-3xl hover:shadow-xl transition-all duration-300 ease-out card-shine" data-animate="fade-up" data-animate-delay="300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>save</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Local SPIFFS</h3>
              <p className="text-on-surface-variant font-body-md text-sm">On-device storage on ESP32 flash memory means your data never leaves the hardware perimeter.</p>
            </div>

            {/* RTC Security */}
            <div className="glass-card p-8 rounded-3xl hover:shadow-xl transition-all duration-300 ease-out card-shine" data-animate="fade-up" data-animate-delay="100">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>history_toggle_off</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">RTC Accuracy</h3>
              <p className="text-on-surface-variant font-body-md text-sm">DS1307 hardware module provides tamper-resistant timestamps for every single attendance entry.</p>
            </div>

            {/* Duplicate Prevention */}
            <div className="md:col-span-2 lg:col-span-2 glass-card p-8 rounded-3xl flex flex-col justify-between hover:shadow-xl transition-all duration-300 group ease-out card-shine" data-animate="fade-up" data-animate-delay="200">
              <div className="flex gap-8">
                <div className="hidden sm:block w-1/3 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMo-CHYpfcEYBG72Jhpr3W6sQGPd-qf-lRKdk8D__TkurUpwpytvevEYejPzBslExpQMFCu7GNotimD5Dq0njvHjOUJCmsi6LtPpvnObEnjJ-BNvGzsSPcFJt0DTKkYTndZfmwr0v2U3Y78i2bv72KpOVVK95VR8Km8IbFiNgoXlBXhKPqA3kHKud_BgjmpiYnXwbeKqtscm50FoSXEuqGCnB5WT4htr28Gl6feurgQU7lyAc-CTDXIRT1fKQIp-c1Af8oiE0jeBpH" alt="Circuit board macro" className="h-full w-full object-cover" />
                </div>
                <div className="w-full sm:w-2/3">
                  <div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>block</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Duplicate Prevention</h3>
                  <p className="text-on-surface-variant font-body-md">Hardware-level same roll number protection. Automatic detection filters out fraudulent or repeated submissions in real-time.</p>
                </div>
              </div>
            </div>

            {/* Recovery & Monitoring */}
            <div className="glass-card p-8 rounded-3xl hover:shadow-xl transition-all duration-300 ease-out card-shine" data-animate="fade-up" data-animate-delay="300">
              <div className="w-12 h-12 rounded-xl bg-on-secondary-fixed-variant/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-secondary-fixed-variant" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>settings_backup_restore</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Auto Recovery</h3>
              <p className="text-on-surface-variant font-body-md text-sm">Resilient session recovery handles power failures without losing a single record.</p>
            </div>

          </div>
        </section>

        {/* Deep Dive Sections */}
        <section className="max-w-container-max mx-auto px-margin-desktop space-y-32">
          
          {/* Session Security */}
          <div className="flex flex-col md:flex-row gap-12 items-start" data-animate="fade-up">
            <div className="md:w-1/3 border-l-4 border-secondary pl-8 py-4">
              <h2 className="font-display-lg text-headline-md text-primary mb-4">Attendance Session Security</h2>
              <p className="text-on-surface-variant">The architecture enforces a strict "One Session, One Owner" policy to prevent unauthorized data manipulation.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/30">
                <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>check_circle</span>
                  Exclusive Access
                </h4>
                <p className="text-on-surface-variant text-sm">Only the initiator of a session has the authority to close it or modify its parameters, preventing hijacking.</p>
              </div>
              <div className="p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/30">
                <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>lock_clock</span>
                  Single Instance
                </h4>
                <p className="text-on-surface-variant text-sm">System logic prohibits multiple concurrent sessions on a single device, maintaining data integrity.</p>
              </div>
            </div>
          </div>

          {/* Monitoring & Data Protection */}
          <div className="glass-card rounded-[2.5rem] p-12 overflow-hidden relative ease-out" data-animate="fade-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px] -mr-32 -mt-32"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <span className="font-label-caps text-secondary mb-4 block">SURVEILLANCE</span>
                <h2 className="font-display-lg text-headline-md text-primary mb-8">Activity Monitoring & Protection</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">1</div>
                    <div>
                      <h5 className="font-bold text-primary">Granular Logs</h5>
                      <p className="text-on-surface-variant text-sm">Continuous logging of teacher logins, session starts, and all administrative modifications for full auditability.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">2</div>
                    <div>
                      <h5 className="font-bold text-primary">Limited Collection</h5>
                      <p className="text-on-surface-variant text-sm">We only collect essential roll numbers and timestamps. No biometric or personal identifiable data is ever processed.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">3</div>
                    <div>
                      <h5 className="font-bold text-primary">Regular Backups</h5>
                      <p className="text-on-surface-variant text-sm">Automated synchronization triggers periodic snapshots to secondary partitions on the local storage.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary-container rounded-3xl p-8 text-on-primary shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
                <h4 className="font-headline-md text-headline-md mb-6">Hardware Integrity</h4>
                <p className="text-on-primary-container mb-8">Physical security is as vital as digital. We recommend protected device placement and provide hardware mounting specs to prevent physical tampering.</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <span className="font-medium">Chassis Intrusion Detection</span>
                    <span className="text-secondary font-bold">ACTIVE</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <span className="font-medium">Physical Port Blocking</span>
                    <span className="text-on-primary-container/60">CONFIGURED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Roadmap */}
          <div className="max-w-4xl mx-auto text-center space-y-12" data-animate="fade-up">
            <div>
              <h2 className="font-display-lg text-headline-md text-primary mb-4">Future Security Improvements</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Our security team is constantly iterating. The following features are currently in engineering and slated for Q4 release.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-8 border border-outline-variant/30 rounded-2xl hover:border-secondary transition-colors">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>qr_code_2</span>
                <h5 className="font-bold text-primary mb-2">QR Auth</h5>
                <p className="text-on-surface-variant text-xs">Dynamic QR codes for contactless, cryptographically signed student check-ins.</p>
              </div>
              <div className="p-8 border border-outline-variant/30 rounded-2xl hover:border-secondary transition-colors">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>encrypted</span>
                <h5 className="font-bold text-primary mb-2">P2P Encryption</h5>
                <p className="text-on-surface-variant text-xs">Enhanced AES-256 encryption for internal communication between node clusters.</p>
              </div>
              <div className="p-8 border border-outline-variant/30 rounded-2xl hover:border-secondary transition-colors">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>phonelink_lock</span>
                <h5 className="font-bold text-primary mb-2">MFA Support</h5>
                <p className="text-on-surface-variant text-xs">Optional secondary device verification for sensitive administration panels.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Security;
