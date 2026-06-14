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
      <div className="ambient-bg"></div>
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto w-full">
        {/* Hero Section */}
        <div className="relative z-10 mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8" data-animate="fade-up">
          <div>
            <span className="font-label-caps text-label-caps text-secondary mb-4 block tracking-widest">ARCHITECTURE & DEFENSE</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary max-w-2xl">
              Security Architecture
            </h1>
            <p className="text-secondary font-semibold font-label-caps text-sm tracking-wider mt-2">Secure Offline Attendance System</p>
            <p className="text-on-surface-variant mt-4 font-body-md leading-relaxed">
              SYNQUORA is designed with a security-focused approach that combines local data processing, controlled user access, and reliable attendance management.
            </p>
            <p className="text-on-surface-variant mt-2 font-body-md leading-relaxed">
              The system keeps attendance operations within the local environment, reducing dependency on external networks and improving data privacy.
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-gutter">
            
          {/* Section 1: Teacher Authentication */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32 transition-transform duration-75 ease-out" id="authentication" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>lock_person</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">1. Teacher Authentication</h2>
            </div>
            <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
              <p>SYNQUORA provides secure teacher access to prevent unauthorized attendance management.</p>
              <p className="font-semibold text-primary">Authorized teachers can:</p>
              <ul className="list-disc ml-5 space-y-2 text-on-surface-variant">
                <li>Start attendance sessions</li>
                <li>End active sessions</li>
                <li>Monitor attendance records</li>
                <li>Manage attendance data</li>
              </ul>
              <p className="font-semibold text-primary mt-4">
                Only verified users are allowed to control attendance operations.
              </p>
            </div>
          </section>

          {/* Section 2: Offline Network Security */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32 transition-transform duration-75 ease-out" id="network" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>wifi_off</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">2. Offline Network Security</h2>
            </div>
            <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
              <p>The system uses an ESP32-based local network for communication between teachers and students.</p>
              <p className="font-semibold text-primary">Benefits:</p>
              <ul className="list-disc ml-5 space-y-2 text-on-surface-variant">
                <li>No dependency on external internet</li>
                <li>Reduced exposure to external threats</li>
                <li>Local classroom-based communication</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Local Data Protection */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32 transition-transform duration-75 ease-out" id="local-data" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>save</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">3. Local Data Protection</h2>
            </div>
            <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
              <p>Attendance records are stored locally inside the ESP32 system using internal storage.</p>
              <p className="font-semibold text-primary">This ensures:</p>
              <ul className="list-disc ml-5 space-y-2 text-on-surface-variant">
                <li>Data remains within the institution's environment</li>
                <li>Attendance records are available without cloud services</li>
                <li>Information is protected from unnecessary external access</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Duplicate Attendance Prevention */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32 transition-transform duration-75 ease-out" id="duplicate" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>block</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">4. Duplicate Attendance Prevention</h2>
            </div>
            <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
              <p>SYNQUORA includes mechanisms to improve attendance accuracy.</p>
              <p className="font-semibold text-primary">The system:</p>
              <ul className="list-disc ml-5 space-y-2 text-on-surface-variant">
                <li>Detects repeated roll number submissions</li>
                <li>Prevents duplicate attendance entries</li>
                <li>Maintains accurate attendance records</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Session Protection */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32 border-l-4 border-secondary transition-transform duration-75 ease-out" id="session" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>history_toggle_off</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">5. Session Protection</h2>
            </div>
            <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
              <p>Attendance sessions are managed with controlled access.</p>
              <p className="font-semibold text-primary">Security features include:</p>
              <ul className="list-disc ml-5 space-y-2 text-on-surface-variant">
                <li>One active attendance session at a time</li>
                <li>Session ownership control</li>
                <li>Prevention of unauthorized session changes</li>
                <li>Automatic session recovery after restart or power failure</li>
              </ul>
            </div>
          </section>

          {/* Section 6: Future Security Improvements */}
          <section className="glass-card rounded-2xl p-8 md:p-12 scroll-mt-32 transition-transform duration-75 ease-out" id="future" data-animate="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>qr_code_2</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">6. Future Security Improvements</h2>
            </div>
            <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
              <p>Future enhancements planned for SYNQUORA include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 border border-outline-variant/30 rounded-lg flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-secondary mb-2" style={{ fontVariationSettings: "'FILL' 0" }}>qr_code</span>
                  <span className="font-label-caps text-label-caps">QR-based attendance verification</span>
                </div>
                <div className="p-4 border border-outline-variant/30 rounded-lg flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-secondary mb-2" style={{ fontVariationSettings: "'FILL' 0" }}>install_mobile</span>
                  <span className="font-label-caps text-label-caps">Mobile application integration</span>
                </div>
                <div className="p-4 border border-outline-variant/30 rounded-lg flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-secondary mb-2" style={{ fontVariationSettings: "'FILL' 0" }}>encrypted</span>
                  <span className="font-label-caps text-label-caps">Improved data encryption</span>
                </div>
                <div className="p-4 border border-outline-variant/30 rounded-lg flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-secondary mb-2" style={{ fontVariationSettings: "'FILL' 0" }}>dns</span>
                  <span className="font-label-caps text-label-caps">Multi-classroom management</span>
                </div>
              </div>
              <p className="italic text-sm">
                These upgrades will further improve scalability and security.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Security;
