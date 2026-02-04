import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const benefits = [
  'Practice speaking every day with AI prompts',
  'Get word-level pronunciation feedback instantly',
  'Build confidence through consistent practice',
  'Track your fluency progress over time',
  'Prepare specifically for interview scenarios',
];

const SolutionSection = () => {
  return (
    <section className="section-padding">
      <div className="container-tight mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
              {/* Mock Phone UI */}
              <div className="max-w-xs mx-auto">
                <div className="bg-card rounded-3xl shadow-elevated p-4 border border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="font-display font-semibold text-sm">Spashtanga AI</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-secondary text-sm">
                      "Tell me about your project experience."
                    </div>
                    
                    <div className="p-3 rounded-xl bg-primary/10 text-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                        <span className="text-xs text-muted-foreground">You said:</span>
                      </div>
                      "I worked on a <span className="px-1 py-0.5 rounded bg-success/20 text-success font-medium">database</span> <span className="px-1 py-0.5 rounded bg-destructive/20 text-destructive font-medium">managment</span> system..."
                    </div>
                    
                    <div className="p-3 rounded-xl bg-secondary/50 text-sm">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                        <Sparkles className="w-3 h-3" /> AI Feedback
                      </div>
                      <span className="text-destructive font-medium">managment</span> → 
                      <span className="text-success font-medium"> management</span>
                      <div className="text-xs text-muted-foreground mt-1">
                        Tip: Notice the "e" before "ment"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              The Solution
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-3 mb-6">
              Meet Spashtanga – <br />
              <span className="gradient-text">Your AI Speaking Coach</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Spashtanga uses advanced AI to listen to your speech, identify pronunciation issues at the word level, and help you practice until you get it right. It's like having a patient English tutor available 24/7.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
