import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/modules/layout/footer/intdex';
import Navbar from '@/modules/layout/navbar';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Koshish welfare and education society',
  description: 'Healthy Education , Healthy Society',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
