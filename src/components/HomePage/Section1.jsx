import { motion } from 'framer-motion';
import { CreditCard, Globe, PieChart, Shield, Users, Zap } from 'lucide-react';
import { Card } from '../ui';

const features = [
  {
    icon: Zap,
    title: 'Instant Transfers',
    desc: 'Send money to anyone, anywhere in the world in under 30 seconds.',
    color: 'text-yellow-400'
  },
  {
    icon: Shield,
    title: 'Bank-Level Security',
    desc: 'Your funds are protected by enterprise-grade encryption and multi-factor auth.',
    color: 'text-green-400'
  },
  {
    icon: Globe,
    title: 'Multi-Currency Support',
    desc: 'Hold and convert 40+ currencies at the real exchange rate.',
    color: 'text-blue-400'
  },
  {
    icon: CreditCard,
    title: 'Virtual Cards',
    desc: 'Generate instant virtual cards for secure online shopping.',
    color: 'text-accent'
  },
  {
    icon: PieChart,
    title: 'Real-Time Tracking',
    desc: 'Track your spending and transfers with detailed live analytics.',
    color: 'text-purple-400'
  },
  {
    icon: Users,
    title: '24/7 Support',
    desc: 'A dedicated team of experts ready to help you anytime, anywhere.',
    color: 'text-pink-400'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Powerful features for modern banking
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Everything you need to manage your money efficiently in one place.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Card 
              key={i} 
              className="group hover:border-accent/40 transition-colors duration-500"
            >
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${feature.color}`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
