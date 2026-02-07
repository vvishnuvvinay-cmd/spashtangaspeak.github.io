import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Privacy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: `Spashtanga collects information to provide a personalized learning experience. This includes:`,
      bullets: [
        'Profile Information: Your name, mobile number, date of birth, and gender.',
        'Audio Data: Temporary recordings of your voice during practice sessions.',
        'Usage Data: Practice history, scores, and streak information.',
      ],
    },
    {
      title: 'How We Use Your Data',
      content: 'Your data is used exclusively to:',
      bullets: [
        'Provide real-time pronunciation feedback via AI analysis.',
        'Sync your progress across devices via Supabase cloud storage.',
        'Send daily practice reminders (if enabled).',
        "Improve the Application's internal evaluation algorithms.",
      ],
    },
    {
      title: 'AI Processing & Third Parties',
      content: `We use the Google Gemini API to analyze your speech. When you record audio, it is sent securely to Google's servers for immediate processing. This data is handled in accordance with Google's Enterprise Privacy standards and is not used to train public models without your explicit consent.`,
    },
    {
      title: 'Data Storage & Security',
      content: `We use a combination of local browser storage (LocalStorage) and secure cloud databases (Supabase) to store your profile and history. We implement industry-standard security measures to protect your mobile number and DOB from unauthorized access.`,
    },
    {
      title: 'Voice Data Privacy',
      content: `Unlike many other apps, Spashtanga does not store your raw audio files permanently on our servers. Audio is processed for feedback and typically discarded once the session summary is generated, unless specific debugging is required for service improvement.`,
    },
    {
      title: 'Your Rights',
      content: `You have the right to access your data or request its deletion. You can clear all local data directly from the "Dashboard" section of the app. For cloud data deletion, please contact our support team.`,
    },
    {
      title: 'Cookies and Tracking',
      content: `We do not use tracking cookies for advertising. We only use browser storage essential for the app's functionality (e.g., keeping you signed in).`,
    },
    {
      title: 'Changes to This Policy',
      content: `We may update this policy periodically. We will notify you of any significant changes.`,
    },
    {
      title: 'Contact Us',
      content: `For privacy-related inquiries, please email privacy@spashtanga.ai`,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass shadow-soft">
        <nav className="container-tight mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-display font-bold gradient-text">
                Spashtanga
              </span>
            </Link>
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="pt-32 pb-20">
        <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-12">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>

            <div className="space-y-10">
              {sections.map((section, index) => (
                <motion.section
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <h2 className="text-xl font-semibold text-foreground mb-3">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                  {section.bullets && (
                    <ul className="mt-3 space-y-2">
                      {section.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.section>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="bg-foreground text-primary-foreground py-8">
        <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} Spashtanga. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Privacy;
