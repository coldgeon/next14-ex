import { Metadata } from 'next';
import Navigation from '../components/navigation';

export const metadata: Metadata = {
  title: {
    template: '%s | example app',
    default: 'example app',
  },
  description: '설명설명설명설명',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation></Navigation>

        {children}
      </body>
    </html>
  );
}
