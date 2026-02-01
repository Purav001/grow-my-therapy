import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica',
  description: 'Compassionate, evidence-based therapy for adults navigating anxiety, trauma, and burnout. Licensed clinical psychologist offering in-person and telehealth sessions in Santa Monica, CA.',
  keywords: 'therapist, psychologist, Santa Monica, anxiety therapy, trauma therapy, EMDR, CBT, burnout, mental health',
  authors: [{ name: 'Dr. Maya Reynolds' }],
  openGraph: {
    title: 'Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist',
    description: 'Compassionate therapy for anxiety, trauma, and burnout in Santa Monica, CA',
    type: 'website',
    locale: 'en_US',
    siteName: 'Dr. Maya Reynolds Psychology',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist',
    description: 'Compassionate therapy for anxiety, trauma, and burnout in Santa Monica, CA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://drmayareynolds.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
