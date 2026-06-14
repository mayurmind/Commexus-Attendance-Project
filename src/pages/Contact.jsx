import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageAnimations } from '../hooks/usePageAnimations';

function Contact() {
  usePageAnimations();
  return (
    <>
      {/* Ambient Background Glows */}
      <div className="ambient-glow top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="ambient-glow top-1/2 right-0 translate-x-1/3 -translate-y-1/2" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, rgba(255,255,255,0) 70%)" }}></div>
      
      <Navbar />

      <main className="pt-[100px] pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col gap-[64px]">
        {/* Hero Section */}
        <section className="text-center pt-16 pb-8" data-animate="fade-up">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">Connect with the Creators</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">A clean, premium hub for inquiries. Engage with the team engineering the future of enterprise attendance architecture.</p>
        </section>

        {/* Contact Hub */}
        <section className="flex flex-col items-center gap-gutter">
          {/* Left: Contact Form */}
          <div className="w-full max-w-2xl glass-card rounded-xl p-8" data-animate="fade-up" data-animate-delay="150">
            <h2 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">mail</span> Send a Message
            </h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message Transmitted Successfully!'); e.target.reset(); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 input-glow group">
                  <label className="font-label-caps text-label-caps text-outline-variant group-focus-within:text-secondary transition-colors">Name</label>
                  <input required className="bg-surface-container-lowest/50 border border-outline-variant/30 rounded-lg p-3 font-body-md text-body-md text-primary focus:outline-none transition-all" placeholder="Jane Doe" type="text" />
                </div>
                <div className="flex flex-col gap-2 input-glow group">
                  <label className="font-label-caps text-label-caps text-outline-variant group-focus-within:text-secondary transition-colors">Email</label>
                  <input required className="bg-surface-container-lowest/50 border border-outline-variant/30 rounded-lg p-3 font-body-md text-body-md text-primary focus:outline-none transition-all" placeholder="jane@company.com" type="email" />
                </div>
              </div>
              <div className="flex flex-col gap-2 input-glow group">
                <label className="font-label-caps text-label-caps text-outline-variant group-focus-within:text-secondary transition-colors">Subject</label>
                <input required className="bg-surface-container-lowest/50 border border-outline-variant/30 rounded-lg p-3 font-body-md text-body-md text-primary focus:outline-none transition-all" placeholder="Partnership Inquiry" type="text" />
              </div>
              <div className="flex flex-col gap-2 input-glow group">
                <label className="font-label-caps text-label-caps text-outline-variant group-focus-within:text-secondary transition-colors">Message</label>
                <textarea required className="bg-surface-container-lowest/50 border border-outline-variant/30 rounded-lg p-3 font-body-md text-body-md text-primary focus:outline-none transition-all resize-none" placeholder="How can we help you?" rows="4"></textarea>
              </div>
              <button className="bg-secondary text-on-secondary w-full py-3 rounded-lg font-label-caps text-label-caps hover:opacity-90 transition-all duration-300 ease-in-out shadow-[0_8px_16px_rgba(0,88,190,0.2)] hover:shadow-[0_12px_24px_rgba(0,88,190,0.3)] hover:-translate-y-1" type="submit">Transmit Message</button>
            </form>
          </div>
        </section>

        {/* Engineering Core */}
        <section className="flex flex-col gap-8">
          <h2 className="font-headline-md text-headline-md text-primary text-center" data-animate="fade-up">Engineering Core</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="glass-card rounded-xl overflow-hidden group card-shine" data-animate="fade-up" data-animate-delay="100">
              <div className="h-48 bg-surface-container-high relative overflow-hidden">
                <img alt="Professional headshot of Dr. Sarah Chen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA5gDNwg6jDH3uqmwxX6Lh9rXBd5qyLGLeQpn34SH0QPVg9PhzzyGPRLjxsxjiMRDEUIv89YHgGwW7xsse5HAtMhGiswrh6Dft0Kuw4LRd_5VFPU3PwoeEKGA_mTsnKn4Pqaz7uFload4dYIJ8ETiuAkUBCcN04YN-6eryXze_QHsbEqvqZrwHt1rpvNZfgwo2kOxM33lHrsKhzICVGt93Y59lERU_iJnXwWNDt-phZWFSeE2jX8DEea6W-jpZIEEdgXdH53AMSfms" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-6 right-6 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center backdrop-blur-md">
                  <span className="material-symbols-outlined text-[16px] text-secondary">architecture</span>
                </div>
                <h3 className="font-body-lg text-body-lg text-primary font-bold">Dr. Sarah Chen</h3>
                <p className="font-label-caps text-label-caps text-secondary mt-1">Principal Architect / Guide</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="glass-card rounded-xl overflow-hidden group card-shine" data-animate="fade-up" data-animate-delay="200">
              <div className="h-48 bg-surface-container-high relative overflow-hidden">
                <img alt="Professional headshot of Marcus Roe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXcn2uTMRwzArEeklhV_bzCH2DLfi6lIRYdHZdv49yDVIRtsmCrI_0y3wF_QgtgCMY_YW1JWJWphEGCjKOf3oVVb_1WjQGm9gixwhgx9Yu4rwjUZtz9TkDTHASELWm5dN_VtvpicAWipRbrHyg0fl0hgA0Rz62pHwE5yPLb0eUT-IdaOf713C_C1I2yH-drqdnlWq5dz2mzQQKxF-LM1tFzyWp9zKcCsrjdZDE3w2iJL-cLIi5bpRA_OVWuCvfNsJsUAwh3-TKbKPf" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-6 right-6 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center backdrop-blur-md">
                  <span className="material-symbols-outlined text-[16px] text-secondary">terminal</span>
                </div>
                <h3 className="font-body-lg text-body-lg text-primary font-bold">Marcus Roe</h3>
                <p className="font-label-caps text-label-caps text-secondary mt-1">Lead Engineer</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="glass-card rounded-xl overflow-hidden group card-shine" data-animate="fade-up" data-animate-delay="300">
              <div className="h-48 bg-surface-container-high relative overflow-hidden">
                <img alt="Professional headshot of Elena Vasquez" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoXH9DsVf8GNZ639eBE6fG5KRbvoonaWvqZm_zMMf_FOlGVhsoJ_uS8qhwSxemO_R62Y4TaB2cCpmKvXlY5UoSEg-Cfgn5zt3Z8tompytZNtsrkTzSSuXyolbs9TndKyPoMq-KPu2LaeiSbireJUPKbOJ37YX39A6GXo18KdBoAae3jpDfLnugTOcUH6ZbIPhA3e-RnKGjvIpsQEohP2WEAU1NeuINRAqoVzmr7zBVWA7T8BIzkuKHCWUWtjqXWY-iAR5zkMfIBBR4" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-6 right-6 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center backdrop-blur-md">
                  <span className="material-symbols-outlined text-[16px] text-secondary">web</span>
                </div>
                <h3 className="font-body-lg text-body-lg text-primary font-bold">Elena Vasquez</h3>
                <p className="font-label-caps text-label-caps text-secondary mt-1">Frontend Systems</p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="glass-card rounded-xl overflow-hidden group card-shine" data-animate="fade-up" data-animate-delay="400">
              <div className="h-48 bg-surface-container-high relative overflow-hidden">
                <img alt="Professional headshot of David Kim" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPqpa8-3HJ6U12R3JvwHNi-OIzlv3O_aLxSXBSiC9b1GEEJep304k0xfme86CPowBuudpSnSfChO4cevVoMiWRkMVad_m7rT4VYkYDMhABBJVhZYcacKaZ82LG15qb-IHKpOeY02e77VrFo0OrYLgoxGrEjy3w_hGDJBQJR5ZYDinSCuTV5kAfi8c-Pt5xoBqdqJ06k4VXowEPCce2QD9zKn9GlGM6H36z4zeC_9TKgd5IzWFkWD5toLLBkCSRzhVnLbdAV2dXGxlH" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-6 right-6 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center backdrop-blur-md">
                  <span className="material-symbols-outlined text-[16px] text-secondary">database</span>
                </div>
                <h3 className="font-body-lg text-body-lg text-primary font-bold">David Kim</h3>
                <p className="font-label-caps text-label-caps text-secondary mt-1">Data Infrastructure</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

export default Contact;
