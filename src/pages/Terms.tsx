import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Terms = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By accessing or using Spashtanga ("the Application"), you agree to be bound by these Terms & Conditions. If you do not agree to all of these terms, do not use the Application. These Terms constitute a legally binding agreement between you and Spashtanga.`,
    },
    {
      title: 'Eligibility and User Accounts',
      content: `You must be at least 13 years of age to use this Application. By creating an account (via mobile number and date of birth), you represent that all information provided is accurate. You are solely responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account.`,
    },
    {
      title: 'AI Service Disclaimer',
      content: `Spashtanga utilizes advanced Artificial Intelligence (including Google Gemini API) to provide pronunciation and accent feedback. You acknowledge that AI-generated feedback is provided for educational purposes and may not always be 100% accurate. The Application does not guarantee specific linguistic outcomes or fluency.`,
    },
    {
      title: 'User Responsibilities and Conduct',
      content: 'You agree not to use the Application to:',
      bullets: [
        'Reverse engineer, decompile, or attempt to extract the source code of the Application or its AI models.',
        'Submit audio content that is unlawful, harmful, threatening, or infringing on third-party intellectual property.',
        'Interfere with or disrupt the integrity or performance of the Application.',
      ],
    },
    {
      title: 'Intellectual Property Rights',
      content: `All rights, title, and interest in the Application, including its user interface, branding, mascot, and underlying logic, are the exclusive property of Spashtanga. Your use of the Application grants you a personal, non-exclusive, non-transferable license to use the service for personal, non-commercial use only.`,
    },
    {
      title: 'User-Generated Content (Audio)',
      content: `Spashtanga records and processes your voice to provide feedback. You retain ownership of your audio data. However, by using the service, you grant Spashtanga a worldwide, royalty-free license to process this data solely for the purpose of providing, improving, and securing the Application's services.`,
    },
    {
      title: 'Data Usage and Privacy',
      content: `Your privacy is important to us. Our data collection and usage practices are governed by our Privacy Policy. By using Spashtanga, you consent to the collection and use of your information as outlined therein, including the synchronization of your progress to our secure cloud databases.`,
    },
    {
      title: 'Limitation of Liability',
      content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, SPASHTANGA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA RESULTING FROM YOUR USE OF THE APPLICATION.`,
    },
    {
      title: 'Termination',
      content: `We reserve the right to suspend or terminate your access to the Application at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users or the Application's interests.`,
    },
    {
      title: 'Governing Law',
      content: `These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the Application owner operates, without regard to its conflict of law provisions.`,
    },
    {
      title: 'Modifications to Terms',
      content: `We may modify these Terms at any time. We will notify users of material changes by posting the new Terms on this page. Your continued use of the Application after such changes constitutes acceptance of the new Terms.`,
    },
    {
      title: 'Contact Information',
      content: `If you have any questions about these Terms, please contact us at: legal@spashtanga.ai`,
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
              Terms & Conditions
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

export default Terms;
