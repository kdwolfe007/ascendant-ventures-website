import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Subject Access Request',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DSARLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
