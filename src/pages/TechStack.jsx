import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageAnimations } from '../hooks/usePageAnimations';

function TechStack() {
  usePageAnimations();
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-[100px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full pb-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 text-center max-w-3xl mx-auto" data-animate="fade-up">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">The SYNQUORA Stack</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Precision engineering across hardware and software layers for seamless offline performance.</p>
        </section>

        {/* Hardware Section */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-8 border-b border-surface-variant pb-4">
            <span className="material-symbols-outlined text-secondary" data-icon="memory">memory</span>
            <h2 className="font-headline-md text-headline-md text-primary">Hardware Architecture</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* ESP32 Card */}
            <div className="glass-card rounded-xl p-8 hover:shadow-[0px_30px_60px_rgba(59,130,246,0.12)] transition-shadow duration-300 card-shine" data-animate="fade-up" data-animate-delay="100">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-secondary/10 p-3 rounded-lg text-secondary">
                  <span className="material-symbols-outlined text-3xl" data-icon="developer_board">developer_board</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">ESP32 Dual-Core Microcontroller</h3>
              <p className="text-on-surface-variant mb-6 font-body-md text-body-md">The high-performance core driving processing and connectivity.</p>
              <ul className="space-y-3 font-code-sm text-code-sm text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm" data-icon="check_circle">check_circle</span> 240MHz Processing Power</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm" data-icon="check_circle">check_circle</span> Integrated Wi-Fi/BT</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm" data-icon="check_circle">check_circle</span> Low Power Consumption</li>
              </ul>
            </div>

            {/* RTC Card */}
            <div className="glass-card rounded-xl p-8 hover:shadow-[0px_30px_60px_rgba(59,130,246,0.12)] transition-shadow duration-300 card-shine" data-animate="fade-up" data-animate-delay="250">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-secondary/10 p-3 rounded-lg text-secondary">
                  <span className="material-symbols-outlined text-3xl" data-icon="schedule">schedule</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">DS1307 RTC Module</h3>
              <p className="text-on-surface-variant mb-6 font-body-md text-body-md">Ensuring absolute temporal accuracy offline.</p>
              <ul className="space-y-3 font-code-sm text-code-sm text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm" data-icon="check_circle">check_circle</span> Real-time synchronization</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm" data-icon="check_circle">check_circle</span> Battery-backed reliability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Software Section */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-8 border-b border-surface-variant pb-4" data-animate="fade-up">
            <span className="material-symbols-outlined text-secondary" data-icon="code">code</span>
            <h2 className="font-headline-md text-headline-md text-primary">Software Ecosystem</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="glass-card rounded-xl p-6" data-animate="fade-up" data-animate-delay="100">
              <h3 className="font-label-caps text-label-caps text-secondary mb-4 tracking-wider">CORE LOGIC</h3>
              <h4 className="font-headline-md text-headline-md text-primary mb-2">C++</h4>
              <p className="text-on-surface-variant font-code-sm text-code-sm">Arduino Framework for bare-metal performance.</p>
            </div>
            <div className="glass-card rounded-xl p-6" data-animate="fade-up" data-animate-delay="200">
              <h3 className="font-label-caps text-label-caps text-secondary mb-4 tracking-wider">NETWORK</h3>
              <h4 className="font-headline-md text-headline-md text-primary mb-2">Async Web Server</h4>
              <p className="text-on-surface-variant font-code-sm text-code-sm">Non-blocking request handling for high throughput.</p>
            </div>
            <div className="glass-card rounded-xl p-6" data-animate="fade-up" data-animate-delay="300">
              <h3 className="font-label-caps text-label-caps text-secondary mb-4 tracking-wider">INTERFACE</h3>
              <h4 className="font-headline-md text-headline-md text-primary mb-2">HTML5 / JS</h4>
              <p className="text-on-surface-variant font-code-sm text-code-sm">Modern, responsive student interface rendering.</p>
            </div>
          </div>
        </section>

        {/* Storage Section */}
        <section>
          <div className="flex items-center gap-2 mb-8 border-b border-surface-variant pb-4">
            <span className="material-symbols-outlined text-secondary" data-icon="database">database</span>
            <h2 className="font-headline-md text-headline-md text-primary">Storage Architecture</h2>
          </div>
          <div className="glass-card rounded-xl p-8 relative overflow-hidden" data-animate="fade-up" data-animate-delay="100">
            <div className="absolute right-0 top-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">SPIFFS</h3>
            <p className="font-label-caps text-label-caps text-secondary mb-6">Serial Peripheral Interface Flash File System</p>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <p className="text-on-surface-variant font-body-md text-body-md mb-4">
                  SPIFFS provides lightweight, reliable non-volatile local storage directly on the microcontroller. It is designed specifically for SPI NOR flash devices, ensuring data integrity even during power loss.
                </p>
              </div>
              <div className="flex-1 bg-surface rounded-lg p-6 border border-surface-variant flex flex-col items-center text-center justify-center">
                <ul className="space-y-4 font-code-sm text-code-sm flex flex-col items-center text-center justify-center">
                  <li className="flex items-start gap-3 flex-col items-center">
                    <span className="material-symbols-outlined text-secondary text-lg" data-icon="storage">storage</span>
                    <div>
                      <span className="font-bold text-primary block">Wear Leveling</span>
                      <span className="text-on-surface-variant">Extends flash memory lifespan across write cycles.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 flex-col items-center">
                    <span className="material-symbols-outlined text-secondary text-lg" data-icon="offline_pin">offline_pin</span>
                    <div>
                      <span className="font-bold text-primary block">Offline Persistence</span>
                      <span className="text-on-surface-variant">Stores attendance records until sync is available.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default TechStack;
