import './globals.css'; // We'll create this next
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Example font

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BoredUI Docs',
  description: 'Documentation for the BoredUI component library',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
