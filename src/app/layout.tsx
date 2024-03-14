import Providers from '@/components/providers/ThemeRegistry';
import { Container } from '@mui/material';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'React Form Test',
  description: 'React Form Test'
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='de' suppressHydrationWarning>
    <body>
      <Providers>
        <Container>{children}</Container>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
