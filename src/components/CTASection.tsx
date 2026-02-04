import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "You're on the list! 🎉",
      description: "We'll notify you when early access opens.",
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl opacity-50" />

      <div className="container-tight mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Limited Early Access
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Start Speaking with{' '}
            <span className="gradient-text">Confidence</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of Indian students and professionals already improving their spoken English. Get early access and start your journey today.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 px-4 text-base"
              required
            />
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="h-12 whitespace-nowrap"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Joining...'
              ) : (
                <>
                  Get Early Access
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            Free to start. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
