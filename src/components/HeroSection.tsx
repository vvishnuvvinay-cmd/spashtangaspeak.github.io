import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-illustration.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />

      <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Now in Early Access
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Speak Clearly.{' '}
              <span className="gradient-text">Get Confident.</span>{' '}
              Get Hired.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              AI-powered spoken English and interview practice designed for Indian students and early professionals.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://spashtanga-250087027666.us-west1.run.app/" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="group">
                  Join Early Access
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Button variant="heroOutline" size="xl" className="group">
                <Play size={18} className="mr-1" />
                See How It Works
              </Button>
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-background flex items-center justify-center text-xs font-semibold text-primary"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">100+</span> students already practicing
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Student using Spashtanga AI speaking coach on mobile"
                className="w-full h-auto"
              />
              {/* Overlay Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                  <span className="text-sm font-medium">AI analyzing pronunciation...</span>
                </div>
                <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '78%' }}
                    transition={{ delay: 1, duration: 1.5, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">Pronunciation score: 78%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
