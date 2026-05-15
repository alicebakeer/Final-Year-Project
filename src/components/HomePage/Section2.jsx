import { motion } from 'framer-motion';
import { CheckCircle2, Send, UserPlus, Wallet } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Account',
    desc: 'Sign up in minutes with just your email and basic info.'
  },
  {
    icon: Wallet,
    title: 'Link Bank / Card',
    desc: 'Securely connect your funding source using bank-grade API.'
  },
  {
    icon: Send,
    title: 'Send Money',
    desc: 'Enter recipient details and amount. Confirm and send.'
  },
  {
    icon: CheckCircle2,
    title: 'Instant Delivery',
    desc: 'The funds arrive instantly at the recipient account.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white/[0.02] border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">How it works</h2>
          <p className="text-gray-400">Simple 4-step process to get started with AlicePay</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center group"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full border-t border-dashed border-white/10 -z-10" />
              )}
              <div className="w-20 h-20 bg-bg-dark border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(170,59,255,0.2)] transition-all duration-500">
                <step.icon size={32} className="text-accent" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full text-white font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
