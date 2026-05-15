import { AnimatePresence, motion } from 'framer-motion';
import {
    Bell,
    CheckCircle,
    ChevronDown,
    HelpCircle,
    LogOut,
    Menu,
    Search,
    Settings,
    User
} from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from '../../components/layout/ThemeToggle';
import { Button } from '../../components/ui';

export const CoreNavbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-bg-primary/80 backdrop-blur-xl border-b border-border-subtle h-20 px-6 flex items-center justify-between">
      <div className="flex items-center gap-6 flex-1">
        <button 
          onClick={toggleSidebar}
          className="p-2 hover:bg-accent/10 rounded-lg text-text-primary transition-colors"
        >
          <Menu size={24} />
        </button>

        <div className="hidden md:flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl px-4 py-2 w-96 group focus-within:border-accent/40 transition-all">
          <Search size={18} className="text-text-secondary group-focus-within:text-accent" />
          <input 
            type="text" 
            placeholder="Search records, users, transactions..." 
            className="bg-transparent border-none outline-none text-sm text-text-primary w-full placeholder:text-text-secondary"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" className="hidden lg:flex items-center gap-2 text-sm text-text-secondary">
          <HelpCircle size={18} /> Support
        </Button>
        
        <div className="w-px h-6 bg-border-subtle mx-2" />

        <ThemeToggle />

        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/20 transition-all relative"
          >
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-bg-primary" />
          </button>
          
          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-4 w-80 glass-card p-4 border border-border-subtle z-50"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-text-primary">Notifications</h4>
                  <button className="text-xs text-accent hover:underline">Mark all as read</button>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <CheckCircle size={18} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-text-primary font-medium">New transfer request</p>
                        <p className="text-xs text-text-secondary">John Doe sent $1,200.00 to Europe</p>
                        <p className="text-[10px] text-gray-500 mt-1">2 mins ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User Profile */}
        <div className="relative">
          <button 
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-3 p-1.5 pr-3 rounded-xl bg-white/5 border border-white/5 hover:border-accent/20 transition-all"
          >
            <div className="relative">
              <img 
                src="https://randomuser.me/api/portraits/women/12.jpg" 
                className="w-9 h-9 rounded-lg border border-white/10" 
                alt="Admin"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-bg-primary shadow-lg" />
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold text-text-primary leading-none">Alice Bakeer</p>
              <p className="text-[10px] text-accent font-bold uppercase tracking-wider mt-0.5">Super Admin</p>
            </div>
            <ChevronDown size={14} className="text-text-secondary" />
          </button>

          <AnimatePresence>
            {showProfile && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-4 w-56 glass-card p-2 border border-border-subtle z-50 overflow-hidden"
              >
                <div className="p-3 border-b border-border-subtle mb-1">
                  <p className="text-xs text-text-secondary">Logged in as</p>
                  <p className="text-sm font-bold text-text-primary">alice@pay.com</p>
                </div>
                <div className="space-y-1">
                {[
                  { label: 'Profile Settings', icon: User },
                  { label: 'Team Accounts', icon: Settings },
                  { label: 'Support Center', icon: HelpCircle },
                ].map((item, i) => (
                  <button key={i} className="w-full flex items-center gap-3 p-2 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors">
                    <item.icon size={16} /> {item.label}
                  </button>
                ))}
                </div>
                <div className="mt-1 pt-1 border-t border-border-subtle">
                  <button className="w-full flex items-center gap-3 p-2 rounded-lg text-sm text-red-500 hover:bg-red-500/10 transition-colors">
                    <LogOut size={16} /> Sign Out
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};
