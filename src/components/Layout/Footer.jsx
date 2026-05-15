import { Globe, Mail, MessageSquare, ShieldCheck, User } from 'lucide-react';

import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-bg-primary border-t border-border-subtle relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <ShieldCheck className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-text-primary">Alice<span className="text-accent">Pay</span></span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed">
              Global money transfers made simple, secure, and instant. The future of digital banking is here.
            </p>
            <div className="flex gap-4">
              {[Globe, MessageSquare, User, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-colors text-text-secondary">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-accent transition-colors">Individual</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Business</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border-subtle gap-4">
          <p className="text-text-secondary text-xs">
            © 2026 AlicePay Inc. All rights reserved. Registered in the UK No. 12345678.
          </p>
          <div className="flex gap-8 text-xs text-text-secondary">
            <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-accent" /> PCI-DSS Compliant</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-accent" /> ISO 27001 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

