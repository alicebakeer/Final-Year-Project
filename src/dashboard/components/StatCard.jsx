import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { cn } from '../../lib/utils';

export const StatCard = ({ title, value, change, icon: Icon, isPositive, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="glass-card p-6 group hover:border-accent/40 transition-all duration-500 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[60px] rounded-full group-hover:bg-accent/20 transition-all duration-700" />
      
      <div className="flex justify-between items-start relative z-10">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center text-accent group-hover:scale-110 group-hover:border-accent/40 transition-all duration-500">
            <Icon size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-text-secondary">{title}</p>
            <h3 className="text-3xl font-bold text-text-primary mt-1 tracking-tight">{value}</h3>
          </div>
        </div>
        
        <div className={cn(
          "flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs font-bold",
          isPositive ? "text-green-500 bg-green-500/10" : "text-red-500 bg-red-500/10"
        )}>
          {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {change}
        </div>
      </div>

      <div className="mt-6 h-1 w-full bg-white/5 rounded-full overflow-hidden">
         <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "70%" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-full bg-accent shadow-[0_0_10px_rgba(170,59,255,0.5)]" 
         />
      </div>
    </motion.div>
  );
};
