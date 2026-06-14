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
            Discover the seamless progression of SYNQUORA's offline attendance management. Engineered around the ESP32 microcontroller, our system operates completely independent of external internet infrastructure, prioritizing speed, security, and absolute reliability within the classroom environment.
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
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Teacher Initializes Session</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The instructor accesses the local web dashboard via their device to initiate a new class session. This action powers up the ESP32 module, bringing the system online and ready to accept incoming connections from the classroom.
              </p>
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
              <h3 className="font-headline-md text-headline-md text-primary mb-3">ESP32 Hosts Secure Portal</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Operating as an independent access point, the ESP32 broadcasts a secure, closed-loop local Wi-Fi network. This network acts as an intranet, requiring no external internet connection, thus ensuring absolute data privacy and immunity to external network outages.
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
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Students Access Submission Form</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Students connect their personal devices (smartphones, tablets, laptops) to the broadcasted Wi-Fi network. Upon connection, they are instantly redirected via a captive portal to a lightweight, highly responsive attendance submission form served directly from the ESP32.
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
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Concurrent Processing & Queueing</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                As students hit submit, the ESP32 core springs into action. Utilizing custom firmware, it seamlessly handles dozens of concurrent HTTP requests. Submissions are intelligently routed into a prioritized processing queue to prevent data loss or server overload during peak check-in times.
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
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Cryptographic Time-Stamping</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Every valid submission is paired with an exact, tamper-proof timestamp generated by the integrated Real-Time Clock (RTC) module. This ensures precise tracking of arrival times, critical for institutional compliance and accurate reporting, even without network time protocols.
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
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Non-Volatile Data Storage</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The finalized attendance record is safely committed to the ESP32's onboard SPIFFS (SPI Flash File System) storage. This non-volatile memory ensures that even in the event of an unexpected power loss, all collected attendance data remains secure and fully recoverable.
              </p>
            </div>
          </div>

          {/* Step 7 */}
          <div className="relative flex gap-gutter group" data-animate="fade-up" data-animate-delay="100">
            <div className="w-12 h-12 rounded-full step-icon-container flex items-center justify-center shrink-0 border-2 border-secondary bg-secondary">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
            </div>
            <div className="glass-card rounded-xl p-6 md:p-8 flex-grow border-l-4 border-l-secondary transform transition-all duration-300 group-hover:-translate-y-1">
              <div className="font-label-caps text-label-caps text-secondary mb-2">STEP 7</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Administrative Report Generation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                At the conclusion of the session, the instructor accesses the master dashboard. With a single click, the ESP32 compiles the stored data and generates perfectly formatted CSV or Excel reports, ready for immediate download and seamless integration into central administrative systems.
              </p>
            </div>
          </div>
        </section>

        {/* System in Action Section */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-20">
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary text-center mb-12" data-animate="fade-up">System in Action</h2>
          <div className="glass-card rounded-xl p-8 h-[400px] md:h-[600px] flex items-center justify-center relative overflow-hidden group" data-animate="scale-up" data-animate-delay="200">
            {/* Abstract Technical Illustration Placeholder */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary to-transparent"></div>
            <div className="text-center relative z-10">
              <span className="material-symbols-outlined text-[80px] text-secondary mb-4 opacity-50 group-hover:scale-110 transition-transform duration-500">hub</span>
              <p className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">INTERACTIVE HARDWARE TOPOLOGY VISUALIZATION</p>
              <p className="font-body-sm text-on-surface-variant mt-2 text-sm max-w-md mx-auto">Visualizing the real-time data flow between the instructor dashboard, the central ESP32 hub, and the constellation of student nodes within the local mesh network.</p>
            </div>
            {/* Decorative lines for "Action" */}
            <div className="absolute top-1/2 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>
            <div className="absolute top-1/2 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-secondary to-transparent opacity-30"></div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Working;
