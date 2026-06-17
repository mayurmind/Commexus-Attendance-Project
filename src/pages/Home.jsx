import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { usePageAnimations } from '../hooks/usePageAnimations';
import esp32Photo from './Photos components/ESP32 Photo.jpeg';

function Home() {
  const navigate = useNavigate();
  usePageAnimations();
  return (
    <>
      <Navbar />

      <main className="flex-grow flex flex-col items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-[64px] pb-[64px] pt-[100px] md:pt-[120px]">
        {/* Hero Section */}
        <section className="w-full pt-16 md:pt-24 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 flex flex-col items-start gap-6" data-animate="fade-up">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-gradient leading-tight">
              SYNQUORA<br />
              <span className="text-headline-md font-headline-md text-on-surface-variant block mt-2">Smart Offline Attendance Management System</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Next-generation offline attendance solution powered by ESP32 and smartphones. SYNQUORA enables fast, secure, and reliable classroom attendance without depending on internet connectivity, cloud services, or expensive biometric hardware.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto" data-animate="fade-up" data-animate-delay="200">
              <button onClick={() => navigate('/features')} className="bg-secondary text-white px-8 py-3 rounded-full font-label-caps tracking-wider uppercase hover:shadow-[0px_10px_20px_rgba(0,88,190,0.3)] transition-all duration-300 ease-in-out hover:-translate-y-1">
                Explore Features
              </button>
              <button onClick={() => navigate('/architecture')} className="glass-card px-8 py-3 rounded-full font-label-caps tracking-wider uppercase text-secondary hover:bg-white/50 transition-all duration-300 ease-in-out hover:-translate-y-1">
                System Architecture
              </button>
            </div>
          </div>
          <div className="flex-1 w-full relative group" data-animate="fade-right" data-animate-delay="300">
            <div className="absolute inset-0 bg-secondary/10 blur-3xl rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-700"></div>
            <img alt="ESP32 Photo" className="w-full h-auto object-contain relative z-10 drop-shadow-2xl rounded-xl transition-transform duration-500 hover:scale-[1.02]" src={esp32Photo} />
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="w-full flex flex-col items-center gap-12 mt-8">
          <div className="text-left md:text-center max-w-4xl flex flex-col gap-6" data-animate="fade-up">
            <h2 className="font-headline-md text-headline-md text-primary">The Problems With Traditional Attendance Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left w-full mt-4">
              <div className="glass-card p-6 rounded-2xl border border-error/10 hover:border-error/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>person_edit</span>
                  </div>
                  <strong className="text-primary font-headline-md text-[18px]">Manual Roll Calls</strong>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-variant/50 text-on-surface-variant px-3 py-1.5 rounded-lg text-[13px] font-medium border border-outline-variant/30 flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px] text-error">timer</span> Consume valuable lecture time</span>
                  <span className="bg-surface-variant/50 text-on-surface-variant px-3 py-1.5 rounded-lg text-[13px] font-medium border border-outline-variant/30 flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px] text-error">error</span> Increase chances of human errors</span>
                  <span className="bg-surface-variant/50 text-on-surface-variant px-3 py-1.5 rounded-lg text-[13px] font-medium border border-outline-variant/30 flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px] text-error">groups</span> Difficult to manage large classes</span>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl border border-error/10 hover:border-error/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>credit_card</span>
                  </div>
                  <strong className="text-primary font-headline-md text-[18px]">RFID-Based Systems</strong>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-variant/50 text-on-surface-variant px-3 py-1.5 rounded-lg text-[13px] font-medium border border-outline-variant/30 flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px] text-error">memory</span> Dedicated hardware needed</span>
                  <span className="bg-surface-variant/50 text-on-surface-variant px-3 py-1.5 rounded-lg text-[13px] font-medium border border-outline-variant/30 flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px] text-error">build</span> High maintenance & installation costs</span>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-error/10 hover:border-error/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>fingerprint</span>
                  </div>
                  <strong className="text-primary font-headline-md text-[18px]">Biometric Systems</strong>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-variant/50 text-on-surface-variant px-3 py-1.5 rounded-lg text-[13px] font-medium border border-outline-variant/30 flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px] text-error">hourglass_bottom</span> Slower processing speed</span>
                  <span className="bg-surface-variant/50 text-on-surface-variant px-3 py-1.5 rounded-lg text-[13px] font-medium border border-outline-variant/30 flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px] text-error">touch_app</span> Requires physical contact</span>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-error/10 hover:border-error/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_off</span>
                  </div>
                  <strong className="text-primary font-headline-md text-[18px]">Cloud-Based Systems</strong>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-variant/50 text-on-surface-variant px-3 py-1.5 rounded-lg text-[13px] font-medium border border-outline-variant/30 flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px] text-error">wifi</span> Dependent on internet</span>
                  <span className="bg-surface-variant/50 text-on-surface-variant px-3 py-1.5 rounded-lg text-[13px] font-medium border border-outline-variant/30 flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px] text-error">portable_wifi_off</span> Fails during network outages</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Solution Card 1 */}
            <div className="glass-card rounded-2xl p-8 flex flex-col items-start gap-4 hover:-translate-y-2 transition-transform duration-300 card-shine" data-animate="fade-up" data-animate-delay="100">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>wifi_off</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-primary">Offline-First Reliability</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                SYNQUORA is designed to work independently inside the classroom environment.<br /><br />
                The ESP32 creates a local attendance network, allowing students and teachers to use the system even without internet connectivity.
              </p>
            </div>
            {/* Solution Card 2 */}
            <div className="glass-card rounded-2xl p-8 flex flex-col items-start gap-4 hover:-translate-y-2 transition-transform duration-300 card-shine" data-animate="fade-up" data-animate-delay="250">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-primary">Instant Attendance Processing</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Mark attendance for an entire classroom within seconds.<br /><br />
                The ESP32 handles multiple student requests simultaneously through an optimized queue-based processing system, ensuring smooth attendance collection without data loss.
              </p>
            </div>
            {/* Solution Card 3 */}
            <div className="glass-card rounded-2xl p-8 flex flex-col items-start gap-4 hover:-translate-y-2 transition-transform duration-300 card-shine" data-animate="fade-up" data-animate-delay="400">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>devices</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-primary">BYOD Architecture</h3>
              <div className="font-body-md text-body-md text-on-surface-variant">
                SYNQUORA uses devices students already own.
                <p className="mt-2">Students can mark attendance using:</p>
                <ul className="list-disc ml-5 mt-1 mb-2">
                  <li>Smartphones</li>
                  <li>Tablets</li>
                  <li>Laptops</li>
                </ul>
                No RFID cards, biometric devices, or additional hardware are required.
              </div>
            </div>
          </div>
        </section>

        {/* Feature Preview (Bento Grid) */}
        <section className="w-full flex flex-col items-center gap-8 mt-12">
          <div className="text-center mb-4" data-animate="fade-up">
            <h2 className="font-headline-md text-headline-md text-primary">Core Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 w-full h-auto md:h-[500px]">
            {/* Bento Item 1: Large Feature */}
            <div className="md:col-span-2 md:row-span-2 glass-card rounded-2xl p-8 flex flex-col relative overflow-hidden group card-shine" data-animate="fade-up" data-animate-delay="100">
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>router</span>
              </div>
              <div className="z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_off</span>
                  </div>
                  <h3 className="font-display-lg-mobile text-display-lg-mobile text-primary mb-4">True Offline Operation</h3>
                  <div className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                    The ESP32 works as a standalone attendance server by:
                    <ul className="list-disc ml-5 mt-2 mb-4">
                      <li>Creating a local Wi-Fi network</li>
                      <li>Hosting the attendance webpage</li>
                      <li>Processing attendance requests</li>
                      <li>Storing records locally using SPIFFS storage</li>
                    </ul>
                    The system continues working without internet access.
                  </div>
                </div>
              </div>
            </div>
            {/* Bento Item 2: Small Feature */}
            <div className="md:col-span-2 md:row-span-1 glass-card rounded-2xl p-8 flex flex-row items-center justify-between group card-shine" data-animate="fade-up" data-animate-delay="250">
              <div className="flex flex-col gap-2 max-w-[60%]">
                <h3 className="font-headline-md text-headline-md text-primary">Smartphone-Based Attendance</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Students connect to the local network and access a lightweight browser-based attendance interface. This reduces hardware dependency and makes attendance faster and easier.
                </p>
              </div>
              <div className="w-20 h-20 rounded-full bg-surface flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>smartphone</span>
              </div>
            </div>
            {/* Bento Item 3: Small Feature */}
            <div className="md:col-span-2 md:row-span-1 glass-card rounded-2xl p-8 flex flex-row items-center justify-between group card-shine" data-animate="fade-up" data-animate-delay="400">
              <div className="flex flex-col gap-2 max-w-[60%]">
                <h3 className="font-headline-md text-headline-md text-primary">Accurate Time Tracking</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  The integrated DS1307 RTC module provides accurate date and time information. Each attendance record is stored with a reliable timestamp without requiring internet time synchronization.
                </p>
              </div>
              <div className="w-20 h-20 rounded-full bg-surface flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
