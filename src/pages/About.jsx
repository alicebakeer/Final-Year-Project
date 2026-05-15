import { motion } from 'framer-motion';
import { MessageCircle, Target, Zap } from 'lucide-react';
import { Button, Card } from '../components/ui';

const stats = [
  { label: 'Founded', value: '2022' },
  { label: 'Global Users', value: '10M+' },
  { label: 'Countries', value: '150+' },
  { label: 'Transaction Vol.', value: '$2B+' },
];

const About = () => {
  return (
    <div className="space-y-32 py-20 overflow-hidden">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 text-center space-y-8">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4"
        >
          <Target size={14} />
          <span>Our Mission</span>
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl mx-auto leading-tight">
          Redefining the <span className="text-accent">Future of Money</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We're on a mission to make global financial services accessible, instant, and transparent for everyone, everywhere.
        </p>
      </section>

      {/* Stats Grid */}
      <section className="bg-white/[0.02] border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                {stats.map((s, i) => (
                    <div key={i} className="text-center space-y-2">
                        <p className="text-4xl md:text-5xl font-bold text-white tracking-tight">{s.value}</p>
                        <p className="text-gray-500 uppercase text-xs tracking-widest font-bold">{s.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
                <h2 className="text-4xl font-bold text-white">The AlicePay Story</h2>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                    <p>
                        Founded by digital nomads who were frustrated by the slow, expensive, and opaque nature of international banking, AlicePay was born out of a desire for something better.
                    </p>
                    <p>
                        We believed that in an era of instant global communication, money should move just as fast. We set out to build a platform that leverages cutting-edge technology to bypass traditional banking inefficiencies.
                    </p>
                    <p>
                        Today, AlicePay is one of the fastest-growing fintech companies in the world, serving millions of individuals and businesses who demand a better way to manage their finances.
                    </p>
                </div>
            </div>
            <div className="relative">
                <div className="absolute inset-0 bg-accent/30 blur-[100px] rounded-full -z-10" />
                <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                    alt="Team work" 
                    className="w-full h-[400px] object-cover rounded-[3rem] border border-white/10 shadow-2xl"
                />
            </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
                <h2 className="text-4xl font-bold text-white mb-4">The Team Behind the Mission</h2>
                <p className="text-gray-400">World-class engineers, designers, and financial experts.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: 'Alice Bakeer', role: 'Founder & CEO', img: 'https://randomuser.me/api/portraits/women/12.jpg' },
                    { name: 'David Smith', role: 'CTO', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
                    { name: 'Sarah Chen', role: 'Head of Product', img: 'https://randomuser.me/api/portraits/women/33.jpg' }
                ].map((member, i) => (
                    <Card key={i} className="group text-center space-y-6 pt-12">
                        <div className="relative mx-auto w-32 h-32">
                            <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
                            <img src={member.img} alt={member.name} className="relative w-full h-full rounded-full object-cover border-4 border-white/5" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white">{member.name}</h4>
                            <p className="text-gray-500">{member.role}</p>
                        </div>
                        <div className="flex justify-center gap-3">
                             <Button variant="ghost" size="sm">LinkedIn</Button>
                             <Button variant="ghost" size="sm">Twitter</Button>
                        </div>
                    </Card>
                ))}
            </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold text-white text-center mb-16">Frequently Asked Questions</h2>
            <div className="space-y-6">
                {[
                    { q: 'Is my money safe with AlicePay?', a: 'Yes, your funds are held in segregated accounts at leading global banks. We are also regulated by the FCA.' },
                    { q: 'How fast are global transfers?', a: 'Over 80% of our transfers arrive in under 30 seconds. Some bank-to-bank transfers may take up to 24 hours.' },
                    { q: 'What are the fees?', a: 'We offer the real exchange rate with a small, transparent fee starting from 0.41%.' },
                    { q: 'Can I use AlicePay for business?', a: 'Absolutely. We have specialized accounts for startups and enterprises with multi-level approvals.' }
                ].map((faq, i) => (
                    <div key={i} className="glass-card p-6 border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-center mb-2">
                             <h4 className="text-white font-bold">{faq.q}</h4>
                             <Zap size={16} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-gray-500 text-sm">{faq.a}</p>
                    </div>
                ))}
            </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
            <Card className="bg-accent/5 border-accent/20 p-12 md:p-20 text-center space-y-8">
                <MessageCircle className="text-accent mx-auto" size={48} />
                <h2 className="text-4xl font-bold text-white">Have more questions?</h2>
                <p className="text-gray-400 text-lg">Our support team is available 24/7 to help you with any queries.</p>
                <div className="flex justify-center gap-4">
                    <Button className="h-14 px-10 text-lg">Contact Support</Button>
                    <Button variant="outline" className="h-14 px-10 text-lg">Help Center</Button>
                </div>
            </Card>
      </section>
    </div>
  );
};

export default About;
