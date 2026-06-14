import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageAnimations } from '../hooks/usePageAnimations';

function Architecture() {
  usePageAnimations();
  return (
    <>
      {/* Ambient Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] animate-blob-drift"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-tertiary-fixed-dim/5 rounded-full blur-[120px] animate-blob-drift-reverse"></div>
      </div>

      <Navbar />

      {/* Main Content Canvas */}
      <main className="flex-grow pt-[100px] pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center gap-stack-unit mb-24 animate-[fadeIn_0.8s_ease-out]">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20" data-animate="fade-up">System Blueprint</span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight mb-4" data-animate="fade-up" data-animate-delay="100">Architecture Deep Dive</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12" data-animate="fade-up" data-animate-delay="200">Explore the offline, high-availability hardware topography powering the SYNQUORA Smart Attendance System.</p>
          <div className="w-full rounded-xl overflow-hidden glass-panel p-2 md:p-6 relative group" data-animate="scale-up" data-animate-delay="300">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-tertiary-fixed-dim/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <img alt="Architecture Diagram" className="w-full h-auto rounded-lg shadow-sm border border-outline-variant/20 object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLvrGW2GRo1qU3b-MHIyYIzukR82wLTm45HPHw89YOxshVgxR-rBBo_GMIYUqR7WKJ3Bof5SE6dJjI5fFhiz3jioUNYXDCNcbPw5WxGa8jXVb7t7Wb3sDmeAAR9FIb_-kyobzIbXsnDJELUDDFb6Iw5sTbsP4VtJsRe8kpKA2O1Jt7bbBE8BR3wzNY6c9kbVojf73lRUpQTjySG4gQ7zdYZ9fCstI0PyqS50ds7eJRnkrl2WnNgMvcViO8c" />
          </div>
        </section>

        {/* Component Breakdown (Bento Grid) */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8 px-2" data-animate="fade-up">
            <span className="material-symbols-outlined text-secondary text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>developer_board</span>
            <h2 className="font-headline-md text-headline-md text-primary">Hardware Nodes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* ESP32 (Spans 8 cols) */}
            <div className="md:col-span-8 glass-panel rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group card-shine" data-animate="fade-up" data-animate-delay="100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full blur-2xl group-hover:bg-secondary/20 transition-colors duration-500"></div>
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-surface border border-outline-variant/30 flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-[32px]">memory</span>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-variant/50 px-3 py-1 rounded-full">Core Server</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 relative z-10">ESP32 Microcontroller</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-lg relative z-10">The central processing unit that orchestrates the entire localized ecosystem. It simultaneously manages the Wi-Fi Access Point, serves the captive web portal to student devices, and processes incoming attendance payloads with sub-second latency.</p>
            </div>

            {/* RTC (Spans 4 cols) */}
            <div className="md:col-span-4 glass-panel rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group card-shine" data-animate="fade-up" data-animate-delay="250">
              <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary-fixed-dim/10 rounded-bl-full blur-xl group-hover:bg-tertiary-fixed-dim/20 transition-colors duration-500"></div>
              <div className="w-12 h-12 rounded-xl bg-surface border border-outline-variant/30 flex items-center justify-center shadow-sm mb-6">
                <span className="material-symbols-outlined text-secondary text-[28px]">schedule</span>
              </div>
              <h3 className="font-headline-md text-[20px] font-semibold text-primary mb-2">DS1307 RTC</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Provides rigorous, offline real-time clock synchronization. Ensures every attendance log is cryptographically stamped with accurate temporal data, independent of internet connectivity.</p>
            </div>

            {/* SPIFFS (Spans 5 cols) */}
            <div className="md:col-span-5 glass-panel rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group card-shine" data-animate="fade-up" data-animate-delay="100">
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary-container/5 rounded-tl-full blur-xl group-hover:bg-primary-container/10 transition-colors duration-500"></div>
              <div className="w-12 h-12 rounded-xl bg-surface border border-outline-variant/30 flex items-center justify-center shadow-sm mb-6">
                <span className="material-symbols-outlined text-secondary text-[28px]">storage</span>
              </div>
              <h3 className="font-headline-md text-[20px] font-semibold text-primary mb-2">SPIFFS Storage</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Embedded flash-based file system. Securely stores HTML/CSS/JS assets for the captive portal and acts as the highly reliable, non-volatile database for raw attendance records before syncing.</p>
            </div>

            {/* Wi-Fi Hub (Spans 7 cols) */}
            <div className="md:col-span-7 glass-panel rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group card-shine" data-animate="fade-up" data-animate-delay="250">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/5 rounded-tl-full blur-3xl group-hover:bg-secondary/10 transition-colors duration-500"></div>
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-surface border border-outline-variant/30 flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-[28px]">wifi_tethering</span>
                </div>
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="w-2 h-2 rounded-full bg-secondary/50"></span>
                  <span className="w-2 h-2 rounded-full bg-secondary/20"></span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 relative z-10">Localized Wi-Fi Hub</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md relative z-10">A dedicated, closed-loop Access Point (AP) generated by the ESP32. It creates a geofenced digital perimeter, allowing only physically present student devices to connect and transmit attendance data securely.</p>
            </div>
          </div>
        </section>

        {/* Data Flow Visualization */}
        <section>
          <div className="flex items-center gap-3 mb-8 px-2" data-animate="fade-up">
            <span className="material-symbols-outlined text-secondary text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>sync_alt</span>
            <h2 className="font-headline-md text-headline-md text-primary">Data Topology & Flow</h2>
          </div>
          <div className="glass-panel rounded-xl p-8 md:p-12 relative" data-animate="fade-up" data-animate-delay="150">
            {/* Abstract connecting line background for desktop */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent -translate-y-1/2 z-0"></div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 relative z-10">
              {/* Step 1: Teacher App */}
              <div className="flex flex-col items-center text-center w-full md:w-1/3">
                <div className="w-20 h-20 rounded-2xl bg-surface border border-outline-variant/50 shadow-md flex items-center justify-center mb-6 relative group cursor-default">
                  <div className="absolute inset-0 rounded-2xl bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                  <span className="material-symbols-outlined text-primary text-[36px] relative z-10">tablet_mac</span>
                </div>
                <h4 className="font-headline-md text-[18px] font-bold text-primary mb-2">Teacher App</h4>
                <p className="font-body-md text-sm text-on-surface-variant px-4">Initiates the session. Sends configuration parameters and starts the localized AP on the server node.</p>
              </div>

              {/* Arrow 1 */}
              <div className="hidden md:flex flex-col items-center text-secondary/50">
                <span className="material-symbols-outlined text-[32px] animate-pulse">arrow_forward</span>
              </div>
              {/* Mobile Arrow */}
              <div className="md:hidden flex items-center justify-center text-secondary/50">
                <span className="material-symbols-outlined text-[32px]">arrow_downward</span>
              </div>

              {/* Step 2: ESP32 Node */}
              <div className="flex flex-col items-center text-center w-full md:w-1/3">
                <div className="w-24 h-24 rounded-full bg-secondary border-[4px] border-surface shadow-lg flex items-center justify-center mb-6 relative group cursor-default glow-accent">
                  <div className="absolute inset-0 rounded-full bg-secondary opacity-50 blur-xl animate-pulse"></div>
                  <span className="material-symbols-outlined text-on-secondary text-[40px] relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>router</span>
                </div>
                <h4 className="font-headline-md text-[18px] font-bold text-primary mb-2">ESP32 Core</h4>
                <p className="font-body-md text-sm text-on-surface-variant px-4">Acts as the nexus. Broadcasts SSID, hosts the captive portal, and logs timestamps via RTC to SPIFFS.</p>
              </div>

              {/* Arrow 2 */}
              <div className="hidden md:flex flex-col items-center text-secondary/50">
                <span className="material-symbols-outlined text-[32px] animate-pulse">arrow_forward</span>
              </div>
              {/* Mobile Arrow */}
              <div className="md:hidden flex items-center justify-center text-secondary/50">
                <span className="material-symbols-outlined text-[32px]">arrow_downward</span>
              </div>

              {/* Step 3: Student Nodes */}
              <div className="flex flex-col items-center text-center w-full md:w-1/3">
                <div className="relative w-24 h-20 mb-6 flex justify-center items-end">
                  <div className="absolute left-0 bottom-0 w-14 h-14 rounded-xl bg-surface border border-outline-variant/50 shadow-sm flex items-center justify-center translate-x-2 translate-y-2 opacity-60">
                    <span className="material-symbols-outlined text-primary text-[24px]">smartphone</span>
                  </div>
                  <div className="absolute right-0 bottom-0 w-14 h-14 rounded-xl bg-surface border border-outline-variant/50 shadow-sm flex items-center justify-center -translate-x-2 translate-y-2 opacity-60">
                    <span className="material-symbols-outlined text-primary text-[24px]">smartphone</span>
                  </div>
                  <div className="relative w-16 h-16 rounded-xl bg-surface border border-outline-variant/80 shadow-md flex items-center justify-center z-10 bg-gradient-to-b from-surface to-surface-variant">
                    <span className="material-symbols-outlined text-primary text-[28px]">smartphone</span>
                  </div>
                </div>
                <h4 className="font-headline-md text-[18px] font-bold text-primary mb-2">Student Nodes</h4>
                <p className="font-body-md text-sm text-on-surface-variant px-4">Connect to the localized hub, submit unique credentials, and receive confirmation without external internet.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Architecture;
