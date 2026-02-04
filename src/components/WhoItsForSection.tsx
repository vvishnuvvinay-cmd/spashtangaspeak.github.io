import { motion } from 'framer-motion';
import { GraduationCap, UserCheck, Search, Briefcase } from 'lucide-react';

const audiences = [
  {
    icon: GraduationCap,
    title: 'College Students',
    description: 'Build communication skills early and stand out in campus placements.',
  },
  {
    icon: UserCheck,
    title: 'Fresh Graduates',
    description: 'Bridge the gap between academic knowledge and interview readiness.',
  },
  {
    icon: Search,
    title: 'Job Seekers',
    description: 'Prepare for technical and HR rounds with confidence in your speech.',
  },
  {
    icon: Briefcase,
    title: 'Early-Career Professionals',
    description: 'Improve workplace communication for better opportunities.',
  },
];

const WhoItsForSection = () => {
  return (
    <section id="who-its-for" className="section-padding bg-secondary/30">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Who It's For
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Built for <span className="gradient-text">ambitious Indians</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're starting your career or looking for the next big opportunity, Spashtanga is your speaking coach.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 hover:shadow-elevated transition-all duration-300"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <audience.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {audience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
