import { motion } from 'framer-motion';
import { Lock, ShieldCheck } from 'lucide-react';
import { Button } from '../ui';

const Section3 = () => {
  return (
    <div className="space-y-32 py-24 pb-48">
      {/* Security Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full -z-10" />
          <div className="glass-card p-12 border-white/10 space-y-8">
            <Lock size={48} className="text-accent mb-4" />
            <h2 className="text-4xl font-bold text-white">Trust is our <br /> top priority</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We use the same encryption standards as leading global banks. Your data and funds are protected by multiple layers of security.
            </p>
            <ul className="space-y-4">
              {[
                '256-bit AES encryption',
                'Multi-factor authentication',
                'Regular security audits',
                'Biometric login support'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90">
                  <ShieldCheck className="text-green-500" size={20} />
                  <span>{item}</span>
                </li>

              ))}
            </ul>
          </div>
        </motion.div>

        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Regulated and Licensed</h3>
            <p className="text-gray-400 capitalize">We are regulated by the Financial Conduct Authority (FCA) and comply with all international anti-money laundering regulations.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-4xl font-bold text-white mb-2">99.9%</p>
              <p className="text-gray-500 text-sm italic">System Uptime</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">0.01%</p>
              <p className="text-gray-500 text-sm italic">Fraud Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-accent to-purple-800 rounded-[3rem] p-12 md:p-24 overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[100%] bg-white/10 blur-[120px] rounded-full rotate-45" />
          
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Ready to experience the future?
            </h2>
            <p className="text-white/80 text-lg">
              Join over 10 million people who are already using AlicePay to manage their money better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-white text-accent hover:bg-gray-100 h-14 px-10 text-lg">
                Create Free Account
              </Button>
              <Button variant="outline" className="border-white/50 text-white hover:bg-white/10 h-14 px-10 text-lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Section3;
