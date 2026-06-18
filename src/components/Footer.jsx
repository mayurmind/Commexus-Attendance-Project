import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full px-margin-mobile md:px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-center gap-gutter bg-surface border-t border-outline-variant/30">
      <Link to="/" className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface !font-bold">
        SYNQUORA
      </Link>
      <div className="flex flex-wrap justify-center gap-6">
        <Link className="font-code-sm text-code-sm text-on-surface-variant hover:text-secondary transition-colors duration-300" to="/privacy">Privacy Policy</Link>
        <Link className="font-code-sm text-code-sm text-on-surface-variant hover:text-secondary transition-colors duration-300" to="/terms">Terms of Service</Link>
        <Link className="font-code-sm text-code-sm text-on-surface-variant hover:text-secondary transition-colors duration-300" to="/security">Security</Link>
      </div>
      <div className="font-code-sm text-code-sm text-on-surface-variant">
        © 2026 SYNQUORA. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
