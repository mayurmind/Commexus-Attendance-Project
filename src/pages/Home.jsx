import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { usePageAnimations } from '../hooks/usePageAnimations';

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
              Seamless offline attendance through ESP32 and smartphones. Precision engineering for modern educational institutions, bypassing network unreliability.
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
            <img alt="3D ESP32 network illustration" className="w-full h-auto object-contain relative z-10 drop-shadow-2xl rounded-xl transition-transform duration-500 hover:scale-[1.02]" src="https://lh3.googleusercontent.com/aida/AP1WRLuXZzlx5mnHERE1d-Weiobk9PmwBpgkfdQQ9HJr1sgLot2HQJWIJq3q74oUJVk9sbcJ6V9s1X3akZUKmzpZN7OrjDeLTkqwBsD95fO5-ujhzX3kIo6OvHLxj-nyNs04IAw3wN-aL9R2b6mvxS7xK4LwEj68iulCAfr7f92BZDCvBvWKeSENphZXCV7MnvdesK3neklfEcJTNx9AdT0KQhMKrCZ9Yb-BygDTbooYV4kXRN-jZjmQZ5APLNsl" />
          </div>
        </section>
        
        {/* Problem/Solution Section */}
        <section className="w-full flex flex-col items-center gap-12 mt-8">
          <div className="text-center max-w-3xl flex flex-col gap-4" data-animate="fade-up">
            <h2 className="font-headline-md text-headline-md text-primary">The Flaws of Legacy Systems</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Manual roll calls consume valuable instructional time. RFID systems require expensive hardware maintenance. Biometric scanners suffer from slow throughput and hygiene concerns. Most modern digital solutions fail the moment the campus network drops.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Solution Card 1 */}
            <div className="glass-card rounded-2xl p-8 flex flex-col items-start gap-4 hover:-translate-y-2 transition-transform duration-300 card-shine" data-animate="fade-up" data-animate-delay="100">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>wifi_off</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-primary">Offline-First Resiliency</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                SYNQUORA operates entirely independently of external internet infrastructure, guaranteeing 100% uptime during local network outages.
              </p>
            </div>
            {/* Solution Card 2 */}
            <div className="glass-card rounded-2xl p-8 flex flex-col items-start gap-4 hover:-translate-y-2 transition-transform duration-300 card-shine" data-animate="fade-up" data-animate-delay="250">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-primary">Rapid Transaction</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Process an entire classroom's attendance in seconds, not minutes. The decentralized ESP32 hub handles concurrent connections effortlessly.
              </p>
            </div>
            {/* Solution Card 3 */}
            <div className="glass-card rounded-2xl p-8 flex flex-col items-start gap-4 hover:-translate-y-2 transition-transform duration-300 card-shine" data-animate="fade-up" data-animate-delay="400">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>devices</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-primary">BYOD Architecture</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Leverages the computing power already in students' pockets. No dedicated physical tokens or scanning stations required.
              </p>
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
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                    The ESP32 acts as an autonomous localized access point and server. Data is stored locally on SPIFFS storage and syncs to the central database only when an upstream connection is re-established.
                  </p>
                </div>
              </div>
            </div>
            {/* Bento Item 2: Small Feature */}
            <div className="md:col-span-2 md:row-span-1 glass-card rounded-2xl p-8 flex flex-row items-center justify-between group card-shine" data-animate="fade-up" data-animate-delay="250">
              <div className="flex flex-col gap-2 max-w-[60%]">
                <h3 className="font-headline-md text-headline-md text-primary">Smartphone-Based</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Students connect via a lightweight mobile app, eliminating hardware costs and queues.
                </p>
              </div>
              <div className="w-20 h-20 rounded-full bg-surface flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>smartphone</span>
              </div>
            </div>
            {/* Bento Item 3: Small Feature */}
            <div className="md:col-span-2 md:row-span-1 glass-card rounded-2xl p-8 flex flex-row items-center justify-between group card-shine" data-animate="fade-up" data-animate-delay="400">
              <div className="flex flex-col gap-2 max-w-[60%]">
                <h3 className="font-headline-md text-headline-md text-primary">Tamper-Proof Time</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Integrated RTC module ensures log integrity, preventing device-level time manipulation.
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
