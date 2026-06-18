import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { usePageAnimations } from '../hooks/usePageAnimations';

function Features() {

  usePageAnimations();
  return (
    <>
      <div className="ambient-bg"></div>
      <Navbar />

      {/* Main Content */}
      <main className="pt-[120px] pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Header Section */}
        <header className="text-center mb-[80px] max-w-3xl mx-auto space-y-6" data-animate="fade-up">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#06B6D4]">Smart Attendance</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Explore the advanced features that make SYNQUORA a reliable offline attendance management platform.
          </p>
        </header>

        {/* Bento Grid Layout for Features */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-min">
          {/* Feature 1: Large Span */}
          <div className="col-span-1 md:col-span-8 glass-card rounded-xl p-8 glow-effect transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between h-full min-h-[300px] overflow-hidden relative group card-shine" data-animate="fade-up" data-animate-delay="100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/5 to-[#06B6D4]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-6 shadow-sm border border-outline-variant/30 text-secondary">
                <span className="material-symbols-outlined icon-fill">wifi_off</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Offline Operation</h3>
              <div className="font-body-md text-body-md text-on-surface-variant max-w-md">
                SYNQUORA operates completely through a local ESP32-based network.
                <p className="mt-2 font-medium">Benefits:</p>
                <ul className="list-disc ml-5 mt-1">
                  <li>No internet dependency</li>
                  <li>Works during network outages</li>
                  <li>Maintains classroom privacy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 2: Tall Span */}
          <div className="col-span-1 md:col-span-4 md:row-span-2 glass-card rounded-xl p-8 glow-effect transition-transform duration-300 hover:-translate-y-1 flex flex-col relative group card-shine" data-animate="fade-right" data-animate-delay="200">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/50 pointer-events-none rounded-xl"></div>
            <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-6 shadow-sm border border-outline-variant/30 text-[#06B6D4]">
              <span className="material-symbols-outlined icon-fill">smartphone</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-3">Smartphone-Based Attendance</h3>
            <div className="font-body-md text-body-md text-on-surface-variant flex-grow">
              Students use their personal devices to submit attendance through a browser-based interface.
              <p className="mt-2 font-medium">Advantages:</p>
              <ul className="list-disc ml-5 mt-1">
                <li>No RFID cards</li>
                <li>No biometric scanners</li>
                <li>No additional hardware</li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-outline-variant/20">
              <span className="font-label-caps text-label-caps text-surface-tint">NO APP INSTALLATION REQUIRED</span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-span-1 md:col-span-4 glass-card rounded-xl p-8 glow-effect transition-transform duration-300 hover:-translate-y-1 card-shine" data-animate="fade-up" data-animate-delay="100">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-5 shadow-sm border border-outline-variant/30 text-secondary">
              <span className="material-symbols-outlined">queue</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2 text-[20px]">Queue-Based Processing</h3>
            <div className="font-body-md text-body-md text-on-surface-variant text-[15px]">
              The system manages multiple attendance submissions using a queue mechanism.
              <p className="mt-2 font-medium">This ensures:</p>
              <ul className="list-disc ml-5 mt-1">
                <li>Smooth simultaneous submissions</li>
                <li>Prevention of data loss</li>
                <li>Reliable processing</li>
              </ul>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="col-span-1 md:col-span-4 glass-card rounded-xl p-8 glow-effect transition-transform duration-300 hover:-translate-y-1 card-shine" data-animate="fade-up" data-animate-delay="200">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-5 shadow-sm border border-outline-variant/30 text-[#06B6D4]">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2 text-[20px]">RTC Time Stamping</h3>
            <div className="font-body-md text-body-md text-on-surface-variant text-[15px]">
              The DS1307 Real-Time Clock module provides accurate offline time tracking.
              <p className="mt-2 font-medium">Every attendance record includes:</p>
              <ul className="list-disc ml-5 mt-1">
                <li>Date</li>
                <li>Time</li>
                <li>Session details</li>
              </ul>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="col-span-1 md:col-span-4 glass-card rounded-xl p-8 glow-effect transition-transform duration-300 hover:-translate-y-1 card-shine" data-animate="fade-up" data-animate-delay="300">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-5 shadow-sm border border-outline-variant/30 text-secondary">
              <span className="material-symbols-outlined">settings_backup_restore</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2 text-[20px]">Session Recovery</h3>
            <div className="font-body-md text-body-md text-on-surface-variant text-[15px]">
              The system can restore attendance session information after:
              <ul className="list-disc ml-5 mt-1">
                <li>Power interruption</li>
                <li>ESP32 restart</li>
              </ul>
              <p className="mt-2">This improves reliability.</p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="col-span-1 md:col-span-4 glass-card rounded-xl p-8 glow-effect transition-transform duration-300 hover:-translate-y-1 card-shine" data-animate="fade-up" data-animate-delay="100">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-5 shadow-sm border border-outline-variant/30 text-[#06B6D4]">
              <span className="material-symbols-outlined">shield_person</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2 text-[20px]">Secure Teacher Authentication</h3>
            <div className="font-body-md text-body-md text-on-surface-variant text-[15px]">
              Authorized teachers can manage attendance sessions through secure login.
              <p className="mt-2 font-medium">Only the session creator can:</p>
              <ul className="list-disc ml-5 mt-1">
                <li>Start attendance</li>
                <li>Stop attendance</li>
                <li>Manage records</li>
              </ul>
            </div>
          </div>

          {/* Feature 7 */}
          <div className="col-span-1 md:col-span-4 glass-card rounded-xl p-8 glow-effect transition-transform duration-300 hover:-translate-y-1 card-shine" data-animate="fade-up" data-animate-delay="200">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-5 shadow-sm border border-outline-variant/30 text-secondary">
              <span className="material-symbols-outlined">sd_storage</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2 text-[20px]">Local Storage Using SPIFFS</h3>
            <div className="font-body-md text-body-md text-on-surface-variant text-[15px]">
              Attendance data is stored inside ESP32 flash memory.
              <p className="mt-2 font-medium">SPIFFS provides:</p>
              <ul className="list-disc ml-5 mt-1">
                <li>Non-volatile storage</li>
                <li>Data persistence</li>
                <li>Reliable record keeping</li>
              </ul>
            </div>
          </div>

          {/* Feature 8: Large Span */}
          <div className="col-span-1 md:col-span-6 glass-card rounded-xl p-8 glow-effect transition-transform duration-300 hover:-translate-y-1 flex items-start gap-6 card-shine" data-animate="fade-up" data-animate-delay="100">
            <div className="w-12 h-12 rounded-lg bg-surface flex-shrink-0 flex items-center justify-center shadow-sm border border-outline-variant/30 text-[#06B6D4]">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Real-Time Processing</h3>
              <div className="font-body-md text-body-md text-on-surface-variant">
                Students receive immediate attendance confirmation after submission.
                <p className="mt-2">This reduces waiting time during classroom attendance.</p>
              </div>
            </div>
          </div>

          {/* Feature 9: Large Span */}
          <div className="col-span-1 md:col-span-6 glass-card rounded-xl p-8 glow-effect transition-transform duration-300 hover:-translate-y-1 flex items-start gap-6 card-shine" data-animate="fade-up" data-animate-delay="250">
            <div className="w-12 h-12 rounded-lg bg-surface flex-shrink-0 flex items-center justify-center shadow-sm border border-outline-variant/30 text-secondary">
              <span className="material-symbols-outlined">description</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Automatic Report Generation</h3>
              <div className="font-body-md text-body-md text-on-surface-variant">
                Teachers can generate attendance reports including:
                <ul className="list-disc ml-5 mt-1">
                  <li>Lecture-wise reports</li>
                  <li>Student attendance records</li>
                  <li>CSV export</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 10: Full Width Bottom */}
          <div className="col-span-1 md:col-span-12 glass-card rounded-xl p-8 md:p-12 glow-effect transition-transform duration-300 relative overflow-hidden mt-4 border-l-4 border-l-secondary card-shine" data-animate="fade-up">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent pointer-events-none"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center shadow-sm border border-outline-variant/30 text-secondary">
                  <span className="material-symbols-outlined">architecture</span>
                </div>
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Enterprise Ready</span>
              </div>
              
              <h3 className="font-display-lg-mobile md:text-display-lg text-primary mb-4">Scalable Design</h3>
              
              <div className="font-body-lg text-body-lg text-on-surface-variant max-w-4xl">
                <p className="mb-6">
                  The architecture is built to seamlessly adapt to your institution's needs, supporting a variety of scales without requiring expensive infrastructure.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                  <div className="flex items-center gap-3 bg-surface/50 p-4 rounded-xl border border-outline-variant/30 hover:border-secondary/50 transition-colors duration-300">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                      <span className="material-symbols-outlined text-[18px]">meeting_room</span>
                    </div>
                    <span className="font-medium text-primary text-[15px]">Small Classrooms</span>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-surface/50 p-4 rounded-xl border border-outline-variant/30 hover:border-secondary/50 transition-colors duration-300">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                      <span className="material-symbols-outlined text-[18px]">domain</span>
                    </div>
                    <span className="font-medium text-primary text-[15px]">Large Lecture Halls</span>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-surface/50 p-4 rounded-xl border border-outline-variant/30 hover:border-secondary/50 transition-colors duration-300">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                      <span className="material-symbols-outlined text-[18px]">account_balance</span>
                    </div>
                    <span className="font-medium text-primary text-[15px]">Multiple Environments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Features;
