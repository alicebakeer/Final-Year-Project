import { AnimatePresence } from 'framer-motion';
import { Bell, Camera, ChevronRight, CreditCard, Lock, LogOut, Palette, Save, Smartphone, User } from 'lucide-react';
import { useState } from 'react';
import { Button, Card, Input } from '../components/ui';
import { motion } from 'framer-motion';
const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'security', label: 'Security', icon: Lock },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'appearance', label: 'Appearance', icon: Palette },
  { id: 'payment', label: 'Payments', icon: CreditCard },
];

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your account preferences and security settings.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <div className="w-full lg:w-64 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === tab.id 
                ? 'bg-accent text-white shadow-lg shadow-accent/20 font-bold' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <tab.icon size={20} />
              <span className="flex-grow text-left">{tab.label}</span>
              {activeTab === tab.id && <ChevronRight size={16} />}
            </button>
          ))}
          
          <div className="pt-8 mt-8 border-t border-white/5">
            <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-red-500 hover:bg-red-500/10 transition-colors">
                <LogOut size={20} />
                <span>Log Out</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'profile' && (
                  <div className="space-y-8">
                    <Card>
                      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                        <div className="relative group">
                            <div className="w-24 h-24 rounded-full bg-accent/20 border-2 border-accent border-dashed flex items-center justify-center overflow-hidden">
                                <User size={40} className="text-accent" />
                            </div>
                            <button className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                <Camera className="text-white" size={20} />
                            </button>
                        </div>
                        <div className="flex-grow space-y-6 w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="Full Name" defaultValue="Alice Bakeer" />
                                <Input label="Email" defaultValue="alice@example.com" />
                                <Input label="Username" defaultValue="alice_bk" />
                                <Input label="Phone" defaultValue="+1 (555) 000-0000" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Bio</label>
                                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent/50 min-h-[100px]" defaultValue="Digital nomad and fintech enthusiast." />
                            </div>
                        </div>
                      </div>
                    </Card>
                    <div className="flex justify-end">
                        <Button className="flex items-center gap-2">
                            <Save size={18} /> Save Changes
                        </Button>
                    </div>
                  </div>
                )}

                {activeTab === 'security' && (
                  <div className="space-y-6">
                    <Card className="space-y-6">
                        <h3 className="text-xl font-bold text-white">Password Settings</h3>
                        <div className="space-y-4">
                            <Input label="Current Password" type="password" />
                            <Input label="New Password" type="password" />
                            <Input label="Confirm New Password" type="password" />
                        </div>
                        <Button variant="outline">Reset Password</Button>
                    </Card>

                    <Card>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-accent/10 rounded-xl text-accent"><Smartphone /></div>
                                <div>
                                    <h4 className="text-white font-bold">Two-Factor Authentication</h4>
                                    <p className="text-sm text-gray-500">Secure your account with an extra layer.</p>
                                </div>
                            </div>
                            <div className="w-12 h-6 bg-accent rounded-full relative cursor-pointer pt-0.5 px-0.5">
                                <div className="w-5 h-5 bg-white rounded-full absolute right-0.5" />
                            </div>
                        </div>
                    </Card>
                  </div>
                )}

                {activeTab === 'appearance' && (
                  <Card className="space-y-8">
                     <div>
                        <h3 className="text-xl font-bold text-white mb-6">Theme Preference</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="aspect-video bg-[#0b0b12] border-2 border-accent rounded-xl p-4 flex flex-col justify-between">
                                <div className="space-y-2">
                                    <div className="h-2 w-12 bg-white/10 rounded" />
                                    <div className="h-2 w-20 bg-white/10 rounded" />
                                </div>
                                <span className="text-xs text-white bg-accent px-2 py-0.5 rounded-full self-start">Active</span>
                            </div>
                            <div className="aspect-video bg-gray-100 border border-white/5 rounded-xl p-4 flex flex-col justify-between opacity-50 cursor-not-allowed">
                                <div className="space-y-2">
                                    <div className="h-2 w-12 bg-gray-300 rounded" />
                                    <div className="h-2 w-20 bg-gray-300 rounded" />
                                </div>
                                <span className="text-xs text-gray-500">Light</span>
                            </div>
                        </div>
                     </div>

                     <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">Accent Color</h3>
                        <div className="flex gap-4">
                            {['#aa3bff', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'].map((color) => (
                                <button
                                    key={color}
                                    className={`w-10 h-10 rounded-full border-4 ${color === '#aa3bff' ? 'border-white/20 shadow-lg shadow-accent/40' : 'border-transparent'}`}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                     </div>
                  </Card>
                )}

                {activeTab === 'notifications' && (

                  <Card className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-6">Notification Preferences</h3>
                    {[
                      { t: 'Email Notifications', d: 'Receive updates via email about your account activity.' },
                      { t: 'Push Notifications', d: 'Receive real-time alerts on your mobile device.' },
                      { t: 'Marketing emails', d: 'Receive news about AlicePay products and features.' },
                    ].map((n, i) => (
                      <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                        <div>
                          <h4 className="text-white font-medium">{n.t}</h4>
                          <p className="text-sm text-gray-500">{n.d}</p>
                        </div>
                        <div className="w-10 h-5 bg-accent/20 rounded-full relative cursor-pointer">
                            <div className="w-4 h-4 bg-accent rounded-full absolute right-0.5 top-0.5" />
                        </div>
                      </div>
                    ))}
                  </Card>
                )}

                {activeTab === 'payment' && (
                  <div className="space-y-6">
                    <Card className="space-y-6">
                        <h3 className="text-xl font-bold text-white">Saved Payment Methods</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-[10px] font-bold text-white italic">VISA</div>
                                    <div>
                                        <p className="text-white font-medium">•••• •••• •••• 4242</p>
                                        <p className="text-xs text-gray-500">Expires 12/28</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm" className="text-red-500">Remove</Button>
                            </div>
                        </div>
                        <Button variant="outline" className="w-full border-dashed border-white/20 hover:border-accent">
                            + Add New Payment Method
                        </Button>
                    </Card>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Settings;
