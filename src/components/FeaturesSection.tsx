import { motion } from 'framer-motion';
import { Calendar, Mic2, TrendingUp, Briefcase } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Daily Speaking Practice',
    description: 'Structured daily exercises to build a consistent speaking habit that sticks.',
    color: 'primary',
  },
  {
    icon: Mic2,
    title: 'Real-Time AI Feedback',
    description: 'Get instant, word-by-word pronunciation analysis as you speak.',
    color: 'accent',
  },
  {
    icon: TrendingUp,
    title: 'Confidence Tracking',
    description: 'Monitor your fluency, accuracy, and speaking confidence over time.',
    color: 'success',
  },
  {
    icon: Briefcase,
    title: 'Interview Exercises',
    description: 'Practice common interview questions with AI-powered mock sessions.',
    color: 'primary',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-secondary/30">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Everything you need to{' '}
            <span className="gradient-text">speak better</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed specifically for Indian learners preparing for English-speaking environments.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:shadow-elevated transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                  feature.color === 'primary' ? 'bg-primary/10' :
                  feature.color === 'accent' ? 'bg-accent/10' :
                  'bg-success/10'
                }`}>
                  <feature.icon className={`w-7 h-7 ${
                    feature.color === 'primary' ? 'text-primary' :
                    feature.color === 'accent' ? 'text-accent' :
                    'text-success'
                  }`} />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
