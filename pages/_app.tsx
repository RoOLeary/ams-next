import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'



function AlgarveMusicSeries({ Component, pageProps }: AppProps): JSX.Element {

  const router = useRouter()

  useEffect(() => {

    const handleStart = () => {
      document.body.className = '';
    }

    router.events.on('routeChangeStart', handleStart)
    
    return () => {
      router.events.off('routeChangeStart', handleStart)
    }
  }, [router])

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
