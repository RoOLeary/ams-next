import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import { AnimatePresence } from 'framer-motion'

function AlgarveMusicSeries({ Component, pageProps }) {
  return (
    <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default AlgarveMusicSeries
