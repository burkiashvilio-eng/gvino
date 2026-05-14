import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Burkiashvili Wine Cellar',
  description: 'Burkiashvili Wine Cellar — Georgian wine, coming soon.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ka">
      <body>{children}</body>
    </html>
  );
}
