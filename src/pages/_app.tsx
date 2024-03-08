import { Toaster } from '@/components/ui/toaster';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-[100wh] h-[100vh]">
      <Component {...pageProps} />
      <Toaster />
    </div>
  );
}
