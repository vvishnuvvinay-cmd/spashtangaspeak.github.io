import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Final Year B.Tech Student',
    content: 'I used to freeze during placement interviews. After 2 weeks with Spashtanga, I could speak much more clearly and confidently.',
    rating: 5,
  },
  {
    name: 'Rahul Menon',
    role: 'Recent MBA Graduate',
    content: 'The word-level feedback is incredible. It showed me exactly where I was going wrong with pronunciation.',
    rating: 5,
  },
  {
    name: 'Anjali Verma',
    role: 'Software Developer',
    content: 'Finally, a speaking practice app that understands Indian English learners. Highly recommend for interview prep!',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Early User Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            What our <span className="gradient-text">early users</span> say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Currently in pilot stage with students and fresh graduates across India.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-card border border-border hover:shadow-soft transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            MVP ready with real users actively testing
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
