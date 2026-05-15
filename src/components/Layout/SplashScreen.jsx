import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
export const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-bg-primary/95 backdrop-blur-2xl flex flex-col items-center justify-center transition-colors duration-300"
    >
      <div className="relative">
        {/* Moving circle around the icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-6 border-2 border-dashed border-accent/30 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-10 border border-accent/10 rounded-full"
        />
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-24 h-24 bg-accent rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(170,59,255,0.4)] relative z-10"
        >
          <ShieldCheck className="text-white w-14 h-14" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold text-text-primary tracking-[0.2em] mt-12"
      >
        ALICE<span className="text-accent">PAY</span>
      </motion.div>

      <div className="mt-8 w-48 h-1 bg-accent/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-full bg-accent shadow-[0_0_15px_rgba(170,59,255,0.8)]"
        />
      </div>
    </motion.div>

  );
};
