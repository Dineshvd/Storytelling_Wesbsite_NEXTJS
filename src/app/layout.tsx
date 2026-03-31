import type { Metadata } from 'next';
import { Orbitron, Rajdhani } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron'
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani'
});

export const metadata: Metadata = {
  title: 'Dinesh | Full Stack Developer',
  description: 'Full stack developer specializing in React, FastAPI, and AI applications',
  openGraph: {
    title: 'Dinesh V | Full Stack Developer',
    description: 'Portfolio of Dinesh V, specializing in modern web development and AI-driven systems.',
    url: 'https://dineshvd.vercel.app', // Update with actual domain
    siteName: 'Dinesh V Portfolio',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${rajdhani.variable} antialiased selection:bg-accent-metal selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
