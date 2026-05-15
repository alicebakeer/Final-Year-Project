import { Quote, Star } from 'lucide-react';
import { Card } from '../ui';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Freelace Designer',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'AlicePay has completely changed how I receive payments from international clients. The fees are negligible and the speed is incredible.'
  },
  {
    name: 'Michael Chen',
    role: 'Tech Entrepreneur',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'The security features give me peace of mind. I can manage my business funds knowing everything is protected by bank-level encryption.'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Digital Nomad',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    content: 'The multi-currency support is a lifesaver. I travel across Europe and Asia, and I never have to worry about exchange rates.'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
                <h2 className="text-4xl font-bold text-white">Loved by millions</h2>
                <p className="text-gray-400">Hear what our users have to say about their experience</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <Card key={i} className="flex flex-col h-full bg-white/[0.03]">
                        <Quote className="text-accent mb-6 opacity-50" size={32} />
                        <p className="text-gray-300 mb-8 italic flex-grow">"{t.content}"</p>
                        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                            <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <h4 className="text-white font-bold text-sm tracking-tight">{t.name}</h4>
                                <p className="text-gray-500 text-xs">{t.role}</p>
                            </div>
                            <div className="ml-auto flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} size={12} className="fill-accent text-accent" />
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Testimonials;
