import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { SplashScreen } from './SplashScreen';

export const PageLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <AnimatePresence>
        {isLoading && <SplashScreen />}
      </AnimatePresence>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};
