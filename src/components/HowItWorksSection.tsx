import { motion } from 'framer-motion';
import { Mic, Cpu, LineChart, Trophy } from 'lucide-react';

const steps = [
  {
    icon: Mic,
    step: '01',
    title: 'Speak into the app',
    description: 'Read prompts or answer interview questions out loud using your phone.',
  },
  {
    icon: Cpu,
    step: '02',
    title: 'Get instant AI feedback',
    description: 'Our AI analyzes your pronunciation at the word level and highlights areas to improve.',
  },
  {
    icon: LineChart,
    step: '03',
    title: 'Track your progress',
    description: 'See your fluency and accuracy scores improve day by day with detailed analytics.',
  },
  {
    icon: Trophy,
    step: '04',
    title: 'Ace your interviews',
    description: 'Walk into your next interview with clear speech and unshakeable confidence.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Your path to <span className="gradient-text">confident speaking</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, effective, and designed for busy students and professionals.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-card border-2 border-primary/20 mb-6 mx-auto shadow-soft">
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="font-display font-semibold text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
