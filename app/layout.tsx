import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Driver Drowsiness Detection | Real-Time AI Research Project',
  description: 'Real-Time Driver Drowsiness Detection Using Non-Intrusive Multispectral Vision and Physio-Behavioural Cues. Undergraduate research project achieving 93.2% drowsiness accuracy.',
  keywords: 'driver drowsiness detection, AI, computer vision, drowsiness monitoring, fatigue detection, automotive safety',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}