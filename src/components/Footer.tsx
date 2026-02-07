import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left - Brand with Logo */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <img src={logo} alt="Spashtanga Logo" className="w-10 h-10 rounded-lg" />
                <h3 className="text-2xl font-display font-bold">Spashtanga</h3>
              </div>
              <p className="text-primary-foreground/70 text-sm">
                Confidence starts with your voice.
              </p>
            </div>

            {/* Center - Links */}
            <div className="flex justify-center gap-6 text-sm">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                About
              </a>
              <Link to="/privacy" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Terms
              </Link>
            </div>

            {/* Right - Social & Contact */}
            <div className="text-center md:text-right">
              {/* Social */}
              <div className="flex gap-4 justify-center md:justify-end mb-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              {/* Contact */}
              <h4 className="text-sm font-semibold mb-2">Contact Us</h4>
              <p className="text-sm text-primary-foreground/70">+91 8143170833</p>
              <p className="text-sm text-primary-foreground/70">Vishnuvinay.vv@gmail.com</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Spashtanga. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
