import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageAnimations } from '../hooks/usePageAnimations';

function Working() {
  usePageAnimations();
  return (
    <>
      {/* Ambient Glow Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-secondary opacity-5 blur-[120px] animate-blob-drift"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#06B6D4] opacity-5 blur-[150px] animate-blob-drift-reverse"></div>
      </div>

      <Navbar />

      <main className="flex-grow pt-[100px] md:pt-[120px]">
        {/* Hero Section */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12 md:py-20 text-center" data-animate="fade-up">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">Operational Workflow</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            SYNQUORA follows a simple and efficient workflow for offline attendance management.
          </p>
        </section>

        {/* Step-by-Step Timeline */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-[800px] mx-auto py-12 relative">
          {/* Step 1 */}
          <div className="relative flex gap-gutter mb-16 group" data-animate="fade-up" data-animate-delay="100">
            <div className="step-line hidden md:block"></div>
            <div className="w-12 h-12 rounded-full step-icon-container flex items-center justify-center shrink-0 border-2 border-secondary">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>power_settings_new</span>
            </div>
            <div className="glass-card rounded-xl p-6 md:p-8 flex-grow transform transition-all duration-300 group-hover:-translate-y-1">
              <div className="font-label-caps text-label-caps text-secondary mb-2">STEP 1</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Teacher Starts Attendance Session</h3>
              <div className="font-body-md text-body-md text-on-surface-variant">
                The teacher logs into the dashboard and creates a new attendance session by entering:
                <ul className="list-disc ml-5 mt-2">
                  <li>Subject</li>
                  <li>Lecture details</li>
                  <li>Attendance duration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex gap-gutter mb-16 group" data-animate="fade-up" data-animate-delay="100">
            <div className="step-line hidden md:block"></div>
            <div className="w-12 h-12 rounded-full step-icon-container flex items-center justify-center shrink-0 border-2 border-secondary">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>wifi_tethering</span>
            </div>
            <div className="glass-card rounded-xl p-6 md:p-8 flex-grow transform transition-all duration-300 group-hover:-translate-y-1">
              <div className="font-label-caps text-label-caps text-secondary mb-2">STEP 2</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">ESP32 Creates Local Network</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The ESP32 starts its local Wi-Fi environment and prepares the attendance system.<br /><br />
                No internet connection is required.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex gap-gutter mb-16 group" data-animate="fade-up" data-animate-delay="100">
            <div className="step-line hidden md:block"></div>
            <div className="w-12 h-12 rounded-full step-icon-container flex items-center justify-center shrink-0 border-2 border-secondary">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>devices</span>
            </div>
            <div className="glass-card rounded-xl p-6 md:p-8 flex-grow transform transition-all duration-300 group-hover:-translate-y-1">
              <div className="font-label-caps text-label-caps text-secondary mb-2">STEP 3</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Students Connect and Submit Attendance</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Students connect their smartphones to the local network.<br /><br />
                A web-based attendance form allows them to submit their roll numbers instantly.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex gap-gutter mb-16 group" data-animate="fade-up" data-animate-delay="100">
            <div className="step-line hidden md:block"></div>
            <div className="w-12 h-12 rounded-full step-icon-container flex items-center justify-center shrink-0 border-2 border-secondary">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>dynamic_feed</span>
            </div>
            <div className="glass-card rounded-xl p-6 md:p-8 flex-grow transform transition-all duration-300 group-hover:-translate-y-1">
              <div className="font-label-caps text-label-caps text-secondary mb-2">STEP 4</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Attendance Request Processing</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The ESP32 receives multiple submissions and processes them through a queue system.<br /><br />
                This prevents overload and ensures every request is handled correctly.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative flex gap-gutter mb-16 group" data-animate="fade-up" data-animate-delay="100">
            <div className="step-line hidden md:block"></div>
            <div className="w-12 h-12 rounded-full step-icon-container flex items-center justify-center shrink-0 border-2 border-secondary">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
            </div>
            <div className="glass-card rounded-xl p-6 md:p-8 flex-grow transform transition-all duration-300 group-hover:-translate-y-1">
              <div className="font-label-caps text-label-caps text-secondary mb-2">STEP 5</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Timestamp Generation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Each valid attendance entry receives an accurate timestamp from the DS1307 RTC module.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="relative flex gap-gutter mb-16 group" data-animate="fade-up" data-animate-delay="100">
            <div className="step-line hidden md:block"></div>
            <div className="w-12 h-12 rounded-full step-icon-container flex items-center justify-center shrink-0 border-2 border-secondary">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>sd_storage</span>
            </div>
            <div className="glass-card rounded-xl p-6 md:p-8 flex-grow transform transition-all duration-300 group-hover:-translate-y-1">
              <div className="font-label-caps text-label-caps text-secondary mb-2">STEP 6</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Data Storage</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The attendance record is saved into ESP32 SPIFFS storage.<br /><br />
                The data remains safe even after restart or power interruption.
              </p>
            </div>
          </div>

          {/* Step 7 */}
          <div className="relative flex gap-gutter group" data-animate="fade-up" data-animate-delay="100">
            <div className="w-12 h-12 rounded-full step-icon-container flex items-center justify-center shrink-0 border-2 border-secondary">
              <span className="material-symbols-outlined text-[#004395]" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
            </div>
            <div className="glass-card rounded-xl p-6 md:p-8 flex-grow border-l-4 border-l-secondary transform transition-all duration-300 group-hover:-translate-y-1">
              <div className="font-label-caps text-label-caps text-secondary mb-2">STEP 7</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Report Generation</h3>
              <div className="font-body-md text-body-md text-on-surface-variant">
                Teachers can access stored attendance data and generate reports.<br /><br />
                Available formats:
                <ul className="list-disc ml-5 mt-2">
                  <li>CSV</li>
                  <li>Excel-compatible files</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* System in Action Section */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-20">
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary text-center mb-12" data-animate="fade-up">System Visualization</h2>
          <div className="glass-card rounded-xl p-8 md:p-12 relative overflow-hidden group" data-animate="scale-up" data-animate-delay="200">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary to-transparent"></div>
            
            <div className="text-center relative z-10 mb-8">
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Real-Time Hardware Data Flow</h3>
            </div>
            
            <div className="relative z-10 flex flex-col items-center justify-center gap-4">
              <div className="glass-panel px-6 py-4 rounded-xl text-center font-headline-md text-primary border border-secondary/30 min-w-[250px]">
                Teacher Dashboard
              </div>
              
              <span className="material-symbols-outlined text-secondary text-[32px] animate-pulse">arrow_downward</span>
              
              <div className="glass-panel px-6 py-4 rounded-xl text-center font-headline-md text-primary border border-secondary/30 min-w-[250px]">
                ESP32 Attendance Server
              </div>
              
              <span className="material-symbols-outlined text-secondary text-[32px] animate-pulse">arrow_downward</span>
              
              <div className="glass-panel px-6 py-4 rounded-xl text-center font-headline-md text-primary border border-secondary/30 min-w-[250px]">
                Local Wi-Fi Network
              </div>
              
              <span className="material-symbols-outlined text-secondary text-[32px] animate-pulse">arrow_downward</span>
              
              <div className="glass-panel px-6 py-4 rounded-xl text-center font-headline-md text-primary border border-secondary/30 min-w-[250px]">
                Student Smartphones
              </div>
              
              <span className="material-symbols-outlined text-secondary text-[32px] animate-pulse">arrow_downward</span>
              
              <div className="glass-panel px-6 py-4 rounded-xl text-center font-headline-md text-primary border border-secondary/30 min-w-[250px]">
                SPIFFS Attendance Storage
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Working;
