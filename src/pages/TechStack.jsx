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
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">SYNQUORA STACK</h1>
          <p className="font-label-caps text-label-caps text-secondary mb-4 tracking-wider">Hardware + Software Architecture</p>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">SYNQUORA combines embedded hardware and lightweight software technologies to create a reliable offline attendance system.</p>
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
              <h3 className="font-headline-md text-headline-md text-primary mb-2">ESP32 Microcontroller</h3>
              <p className="text-on-surface-variant mb-6 font-body-md text-body-md">The main processing unit of SYNQUORA.</p>
              <p className="font-label-caps text-label-caps text-secondary mb-2 tracking-wider">Features:</p>
              <ul className="space-y-3 font-code-sm text-code-sm text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm" data-icon="check_circle">check_circle</span> Dual-core processing</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm" data-icon="check_circle">check_circle</span> Built-in Wi-Fi connectivity</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm" data-icon="check_circle">check_circle</span> Handles attendance requests</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm" data-icon="check_circle">check_circle</span> Hosts the local web server</li>
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
              <p className="text-on-surface-variant mb-6 font-body-md text-body-md">Provides accurate offline time tracking.</p>
              <p className="font-label-caps text-label-caps text-secondary mb-2 tracking-wider">Used for:</p>
              <ul className="space-y-3 font-code-sm text-code-sm text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm" data-icon="check_circle">check_circle</span> Attendance timestamps</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm" data-icon="check_circle">check_circle</span> Session timing</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm" data-icon="check_circle">check_circle</span> Record accuracy</li>
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
              <h3 className="font-label-caps text-label-caps text-secondary mb-4 tracking-wider">FIRMWARE</h3>
              <h4 className="font-headline-md text-[18px] text-primary mb-2">C++ with Arduino Framework</h4>
              <p className="font-label-caps text-[10px] text-secondary mb-2 tracking-wider">Used for:</p>
              <ul className="text-on-surface-variant font-code-sm text-code-sm list-disc ml-4 space-y-1">
                <li>ESP32 programming</li>
                <li>Attendance processing</li>
                <li>Hardware control</li>
              </ul>
            </div>
            <div className="glass-card rounded-xl p-6" data-animate="fade-up" data-animate-delay="200">
              <h3 className="font-label-caps text-label-caps text-secondary mb-4 tracking-wider">WEB INTERFACE</h3>
              <h4 className="font-headline-md text-[18px] text-primary mb-2">HTML, CSS, JavaScript</h4>
              <p className="font-label-caps text-[10px] text-secondary mb-2 tracking-wider">Provides:</p>
              <ul className="text-on-surface-variant font-code-sm text-code-sm list-disc ml-4 space-y-1">
                <li>Student attendance form</li>
                <li>Teacher dashboard</li>
                <li>Real-time updates</li>
              </ul>
            </div>
            <div className="glass-card rounded-xl p-6" data-animate="fade-up" data-animate-delay="300">
              <h3 className="font-label-caps text-label-caps text-secondary mb-4 tracking-wider">NETWORK SYSTEM</h3>
              <h4 className="font-headline-md text-[18px] text-primary mb-2">ESP32 Local Web Server</h4>
              <p className="text-on-surface-variant font-code-sm text-code-sm">Creates a local Wi-Fi environment where students connect and submit attendance without internet.</p>
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
            <h3 className="font-headline-md text-headline-md text-primary mb-4">SPIFFS Storage</h3>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <p className="text-on-surface-variant font-body-md text-body-md mb-4">
                  Local flash storage used for saving:
                </p>
                <ul className="list-disc ml-5 font-body-md text-on-surface-variant space-y-1 mb-4">
                  <li>Attendance records</li>
                  <li>Session data</li>
                  <li>Web files</li>
                </ul>
              </div>
              <div className="flex-1 bg-surface rounded-lg p-6 border border-surface-variant flex flex-col justify-center">
                <h4 className="font-label-caps text-secondary mb-4 tracking-wider text-center">Benefits</h4>
                <ul className="space-y-4 font-code-sm text-code-sm">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg" data-icon="storage">storage</span>
                    <span className="text-on-surface-variant font-bold">Non-volatile storage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg" data-icon="offline_pin">offline_pin</span>
                    <span className="text-on-surface-variant font-bold">Data remains after restart</span>
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
