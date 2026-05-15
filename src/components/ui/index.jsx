import { cn } from "../../lib/utils";
import { motion } from 'framer-motion';
export const Button = ({ className, variant = 'primary', ...props }) => {
  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'p-2 hover:bg-white/5 rounded-lg transition-colors',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(variants[variant], className)}
      {...props}
    />
  );
};

export const Card = ({ className, children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn('glass-card p-6', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const Input = ({ label, error, ...props }) => {
  return (
    <div className="space-y-2">
      {label && <label className="text-sm font-medium text-gray-400 ml-1">{label}</label>}
      <input
        className={cn(
          "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none transition-all",
          "focus:border-accent/50 focus:ring-1 focus:ring-accent/20",
          error && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500 mt-1 ml-1">{error}</p>}
    </div>
  );
};

export const Reveal = ({ children, direction = 'up', delay = 0 }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

