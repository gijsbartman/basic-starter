import './globals.css';
import { Italiana, Ubuntu } from '@next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const italiana = Italiana({
  subsets: ['latin'],
  variable: '--font-italiana',
  display: 'swap',
  weight: '400',
});
const ubuntu = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${italiana.variable} ${ubuntu.variable}`}>
      <head />
      <body>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
