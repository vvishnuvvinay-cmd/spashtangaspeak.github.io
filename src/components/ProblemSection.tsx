import { motion } from 'framer-motion';
import { AlertCircle, Mic, MessageSquare, Clock } from 'lucide-react';

const problems = [
  {
    icon: AlertCircle,
    title: 'Fear of speaking English in interviews',
    description: 'Anxiety kicks in during important conversations, affecting your performance.',
  },
  {
    icon: Mic,
    title: 'Mispronunciation despite knowing English',
    description: 'You understand English well but struggle with clear pronunciation.',
  },
  {
    icon: Clock,
    title: 'Lack of daily speaking practice',
    description: 'No consistent opportunity to practice speaking in a safe environment.',
  },
  {
    icon: MessageSquare,
    title: 'No real-time feedback or guidance',
    description: 'Without instant corrections, bad habits become permanent.',
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Why communication holds you back
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Great technical skills mean nothing if you can't express yourself confidently in interviews and workplace conversations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-destructive/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
