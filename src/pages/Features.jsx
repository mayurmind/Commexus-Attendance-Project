import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { usePageAnimations } from '../hooks/usePageAnimations';

function Features() {
  const navigate = useNavigate();
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
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#06B6D4]">Precision</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Explore the advanced features that make SYNQUORA the definitive local-network attendance tracking system.
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
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Functions entirely without internet via a local ESP32-generated network. Ensures continuous operation even in connectivity dead zones.
              </p>
            </div>
          </div>

          {/* Feature 2: Tall Span */}
          <div className="col-span-1 md:col-span-4 md:row-span-2 glass-card rounded-xl p-8 glow-effect transition-transform duration-300 hover:-translate-y-1 flex flex-col relative group card-shine" data-animate="fade-right" data-animate-delay="200">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/50 pointer-events-none rounded-xl"></div>
            <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-6 shadow-sm border border-outline-variant/30 text-[#06B6D4]">
              <span className="material-symbols-outlined icon-fill">smartphone</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-3">Smartphone-Based Attendance</h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
              Eliminates the need for specialized hardware or student ID cards. Leverages devices students already possess through a streamlined, browser-based captive portal interface.
            </p>
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
            <p className="font-body-md text-body-md text-on-surface-variant text-[15px]">
              Efficient handling of concurrent submissions, preventing data loss during peak check-in times.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="col-span-1 md:col-span-4 glass-card rounded-xl p-8 glow-effect transition-transform duration-300 hover:-translate-y-1 card-shine" data-animate="fade-up" data-animate-delay="200">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-5 shadow-sm border border-outline-variant/30 text-[#06B6D4]">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2 text-[20px]">RTC Time Stamping</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-[15px]">
              Precise, hardware-backed time logging using the DS1307 RTC module, independent of network time protocols.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="col-span-1 md:col-span-4 glass-card rounded-xl p-8 glow-effect transition-transform duration-300 hover:-translate-y-1 card-shine" data-animate="fade-up" data-animate-delay="300">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-5 shadow-sm border border-outline-variant/30 text-secondary">
              <span className="material-symbols-outlined">settings_backup_restore</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2 text-[20px]">Session Recovery</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-[15px]">
              Intelligent recovery of active session data in the event of unexpected power loss or hardware resets.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="col-span-1 md:col-span-4 glass-card rounded-xl p-8 glow-effect transition-transform duration-300 hover:-translate-y-1 card-shine" data-animate="fade-up" data-animate-delay="100">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-5 shadow-sm border border-outline-variant/30 text-[#06B6D4]">
              <span className="material-symbols-outlined">shield_person</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2 text-[20px]">Secure Teacher Auth</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-[15px]">
              Password-protected session management ensures only authorized personnel can initiate or conclude attendance.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="col-span-1 md:col-span-4 glass-card rounded-xl p-8 glow-effect transition-transform duration-300 hover:-translate-y-1 card-shine" data-animate="fade-up" data-animate-delay="200">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-5 shadow-sm border border-outline-variant/30 text-secondary">
              <span className="material-symbols-outlined">sd_storage</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2 text-[20px]">Local Storage (SPIFFS)</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-[15px]">
              Reliable, persistent data storage utilizing the ESP32's internal SPI Flash File System architecture.
            </p>
          </div>

          {/* Feature 8: Large Span */}
          <div className="col-span-1 md:col-span-6 glass-card rounded-xl p-8 glow-effect transition-transform duration-300 hover:-translate-y-1 flex items-start gap-6 card-shine" data-animate="fade-up" data-animate-delay="100">
            <div className="w-12 h-12 rounded-lg bg-surface flex-shrink-0 flex items-center justify-center shadow-sm border border-outline-variant/30 text-[#06B6D4]">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Real-Time Processing</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Instant, sub-second feedback on attendance submission, reducing bottlenecks at entry points and confirming successful registry immediately.
              </p>
            </div>
          </div>

          {/* Feature 9: Large Span */}
          <div className="col-span-1 md:col-span-6 glass-card rounded-xl p-8 glow-effect transition-transform duration-300 hover:-translate-y-1 flex items-start gap-6 card-shine" data-animate="fade-up" data-animate-delay="250">
            <div className="w-12 h-12 rounded-lg bg-surface flex-shrink-0 flex items-center justify-center shadow-sm border border-outline-variant/30 text-secondary">
              <span className="material-symbols-outlined">description</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Automatic Report Gen</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Seamless CSV/Excel export directly from the system interface. Eliminates manual data entry and integrates easily with existing SIS platforms.
              </p>
            </div>
          </div>

          {/* Feature 10: Full Width Bottom */}
          <div className="col-span-1 md:col-span-12 glass-card rounded-xl p-8 md:p-12 glow-effect transition-transform duration-300 flex flex-col md:flex-row items-center justify-between gap-8 mt-4 border-l-4 border-l-secondary" data-animate="fade-up">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-secondary">architecture</span>
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Enterprise Ready</span>
              </div>
              <h3 className="font-display-lg-mobile text-display-lg-mobile text-primary mb-4">Scalable Architecture</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Designed meticulously to support varying classroom densities, from small seminars to large lecture halls, maintaining high performance and stability regardless of concurrent load.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <button onClick={() => navigate('/architecture')} className="w-full md:w-auto px-8 py-4 bg-transparent border border-outline-variant/50 text-primary font-body-md font-medium rounded-lg hover:bg-surface-variant transition-colors duration-200 flex items-center justify-center gap-2">
                View Technical Specs
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Features;
