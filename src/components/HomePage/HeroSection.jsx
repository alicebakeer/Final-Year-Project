import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Globe, Play, Zap } from 'lucide-react';
import { Button } from '../ui';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
            <Zap size={14} />
            <span>v2.0 is now live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white">
            Fast & Secure <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
              Money Transfers
            </span> <br />
            Worldwide
          </h1>
          
          <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
            Send, receive, and manage payments instantly with enterprise-grade security and seamless digital banking experience.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="h-14 px-8 text-lg flex items-center gap-2 group">
              Get Started <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="h-14 px-8 text-lg flex items-center gap-2">
              <Play size={20} fill="currentColor" /> Learn More
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-white/5">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-bg-dark bg-gray-800" />
              ))}
            </div>
            <p className="text-sm text-gray-500">
              <span className="text-white font-semibold">10M+</span> users trust AlicePay globally
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative perspective-1000"
        >
          {/* Mockup UI */}
          <div className="relative z-10 glass-card p-2 p-1 border-white/10 shadow-2xl">
              <div className="bg-[#1a1a2e] rounded-xl p-8 space-y-8">
                  <div className="flex justify-between items-center">
                      <div className="space-y-1">
                          <p className="text-xs text-gray-500 uppercase tracking-widest">Send Money</p>
                          <h3 className="text-2xl font-bold text-white">Transfer Funds</h3>
                      </div>
                      <div className="bg-accent/20 p-2 rounded-lg">
                          <Globe className="text-accent" />
                      </div>
                  </div>

                  <div className="space-y-4">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                          <p className="text-xs text-gray-500 mb-2">You send</p>
                          <div className="flex justify-between items-center">
                              <span className="text-2xl font-bold text-white">1,000.00</span>
                              <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                                  <div className="w-5 h-5 bg-blue-600 rounded-full" />
                                  <span className="font-semibold text-white">USD</span>
                              </div>
                          </div>
                      </div>

                      <div className="flex justify-center -my-6 relative z-20">
                          <div className="w-10 h-10 bg-accent rounded-full border-4 border-[#1a1a2e] flex items-center justify-center text-white">
                              <ArrowRight size={20} className="rotate-90" />
                          </div>
                      </div>

                      <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                          <p className="text-xs text-gray-500 mb-2">Recipient receives</p>
                          <div className="flex justify-between items-center">
                              <span className="text-2xl font-bold text-white">924.50</span>
                              <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                                  <div className="w-5 h-5 bg-yellow-500 rounded-full" />
                                  <span className="font-semibold text-white">EUR</span>
                              </div>
                          </div>
                      </div>
                  </div>

                  <Button className="w-full h-14 font-bold text-lg">Send Money Now</Button>
                  
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className={`h-full bg-accent ${i === 1 ? 'w-full' : 'w-0'}`} />
                        </div>
                    ))}
                  </div>
              </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/30 blur-[80px] -z-10 rounded-full" />
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 glass-card p-4 border-white/10"
          >
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-green-500" size={20} />
                </div>
                <div>
                    <p className="text-xs text-gray-500">Fast Transaction</p>
                    <p className="text-sm font-bold text-white">Completed in 2s</p>
                </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
