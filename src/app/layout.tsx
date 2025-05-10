import type { Metadata } from 'next';
import { FluentThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Your App',
  description: 'Description of your app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <FluentThemeProvider>
          {children}
        </FluentThemeProvider>
      </body>
    </html>
  );
}
