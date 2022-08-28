import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion'

function AlgarveMusicSeries({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AnimatePresence
        mode='wait'
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default AlgarveMusicSeries
