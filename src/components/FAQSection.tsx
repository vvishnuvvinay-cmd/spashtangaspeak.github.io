import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'What does the name "Spashtanga" mean?',
      answer: 'The name is derived from the Sanskrit word Spashta (meaning "clear" or "distinct") and Anga (meaning "part" or "limb"). Together, it symbolizes the "limbs of clear speech," representing our mission to help you break down and master every part of your spoken English.',
    },
    {
      question: 'What is the difference between "Clarity" and "Accent" modes?',
      answer: 'Clarity Mode focuses purely on whether your words are intelligible and pronounced correctly. It ignores regional accents and focuses on being understood. Accent Mode is a more advanced level where the AI evaluates how closely your intonation and vowel sounds match a specific regional standard (like a US or UK accent).',
    },
    {
      question: 'Can I practice specific sentences for an interview or presentation?',
      answer: 'Yes! In the Practice Room, you can switch from "Random Sentence" to "Type My Own." This allows you to input any text (up to 15-20 words) and get immediate feedback on how you pronounce it.',
    },
    {
      question: 'What are "Practice Goals"?',
      answer: 'You can set your focus to Daily Conversation or Interview Prep. The AI will then generate practice sentences that are contextually relevant to that specific goal.',
    },
    {
      question: 'Can I reset my progress?',
      answer: 'If you wish to start over, go to the Dashboard and select "Reset All Progress." Please note that this action is permanent and will clear your streak and session history.',
    },
    {
      question: 'I found a bug or have a suggestion. How can I contact you?',
      answer: 'We love feedback! You can reach out to our team at hello@spashtanga.ai.',
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Spashtanga
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border/50 px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
