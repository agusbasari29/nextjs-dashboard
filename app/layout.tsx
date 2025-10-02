import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | XCode - Next.js Dashboard',
    default: 'XCode - Next.js Dashboard',
  },
  description: 'A simple dashboard built with Next.js, TypeScript, and Tailwind CSS.',
  metadataBase: new URL('https://xcode-dashboard.vercel.app'),
  icons: {
    icon: '/apple-icon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
