import { AnimatePresence, motion } from 'framer-motion';
import {
    Activity,
    ArrowLeftRight,
    BarChart3,
    ChevronDown, ChevronRight,
    History,
    Key,
    LayoutDashboard,
    Lock,
    LogOut,
    Settings,
    ShieldAlert,
    ShieldPlus,
    UserPlus,
    Users
} from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';

const sidebarData = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    items: [
      { name: 'Overview', path: '/dashboard', icon: Activity },
      { name: 'Analytics', path: '/dashboard/analytics', icon: BarChart3 },
    ]
  },
  {
    title: 'User Management',
    icon: Users,
    items: [
      { name: 'User List', path: '/dashboard/users', icon: Users },
      { name: 'Add User', path: '/dashboard/users/add', icon: UserPlus },
      { name: 'Block User', path: '/dashboard/users/block', icon: ShieldAlert },
    ]
  },
  {
    title: 'Admin Management',
    icon: ShieldPlus,
    items: [
      { name: 'Admin Roles', path: '/dashboard/admins', icon: Key },
      { name: 'Permissions', path: '/dashboard/admins/permissions', icon: Lock },
    ]
  },
  {
    title: 'Transactions',
    icon: ArrowLeftRight,
    items: [
      { name: 'History', path: '/dashboard/transactions', icon: History },
      { name: 'Pending', path: '/dashboard/transactions/pending', icon: Activity },
    ]
  },
  {
    title: 'Authentication',
    icon: Lock,
    items: [
      { name: 'Security Logs', path: '/dashboard/auth/logs', icon: ShieldAlert },
      { name: '2FA Management', path: '/dashboard/auth/2fa', icon: Key },
    ]
  },
  {
    title: 'Settings',
    icon: Settings,
    items: [
      { name: 'Account', path: '/dashboard/settings', icon: Settings },
      { name: 'Logout', path: '/login', icon: LogOut, isLogout: true },
    ]
  }
];

export const Sidebar = ({ isOpen, toggleSidebar, isMobile }) => {
  const location = useLocation();
  const [expandedGroups, setExpandedGroups] = useState(['Dashboard']);

  const toggleGroup = (title) => {
    setExpandedGroups(prev => 
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  const sidebarVariants = {
    open: { width: 280, x: 0 },
    closed: { width: 80, x: isMobile ? -280 : 0 },
  };

  return (
    <motion.aside
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
      className={cn(
        "fixed left-0 top-0 h-screen z-50 transition-all duration-300",
        "bg-bg-primary border-r border-border-subtle backdrop-blur-xl",
        "flex flex-col overflow-hidden"
      )}
    >
      {/* Sidebar Header */}
      <div className="h-20 flex items-center px-6 gap-4 border-b border-border-subtle">
        <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-accent/20">
          <ShieldPlus className="text-white w-6 h-6" />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="text-xl font-bold tracking-tight text-text-primary whitespace-nowrap"
            >
              ALICE<span className="text-accent">ADMIN</span>
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-6 px-4 space-y-2">
        {sidebarData.map((section) => (
          <div key={section.title} className="space-y-1">
            <button
              onClick={() => toggleGroup(section.title)}
              className={cn(
                "w-full flex items-center px-3 py-3 rounded-xl transition-all duration-200 group hover:bg-accent/5",
                expandedGroups.includes(section.title) ? "text-accent" : "text-text-secondary"
              )}
            >
              <section.icon size={22} className={cn("shrink-0", expandedGroups.includes(section.title) ? "text-accent" : "group-hover:text-text-primary")} />
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-1 items-center justify-between ml-3 overflow-hidden"
                >
                  <span className="text-sm font-semibold whitespace-nowrap">{section.title}</span>
                  {expandedGroups.includes(section.title) ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </motion.div>
              )}
            </button>

            <AnimatePresence>
              {expandedGroups.includes(section.title) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1 ml-4 overflow-hidden"
                >
                  {section.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={cn(
                        "flex items-center px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
                        location.pathname === item.path 
                          ? "text-accent bg-accent/10 font-bold" 
                          : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                      )}
                    >
                      {location.pathname === item.path && (
                        <motion.div 
                          layoutId="active-pill" 
                          className="absolute left-0 w-1 h-6 bg-accent rounded-full" 
                        />
                      )}
                      <item.icon size={18} className={cn("shrink-0", isOpen ? "ml-1" : "mx-auto")} />
                      {(isOpen || isMobile) && (
                        <span className="ml-3 text-sm whitespace-nowrap">{item.name}</span>
                      )}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-border-subtle bg-bg-primary/50">
        <button
          className={cn(
            "w-full flex items-center px-4 py-3 rounded-xl text-red-500 hover:bg-red-500/10 transition-colors group",
            !isOpen && "justify-center"
          )}
        >
          <LogOut size={20} className="shrink-0" />
          {isOpen && <span className="ml-3 text-sm font-semibold">Logout</span>}
        </button>
      </div>
    </motion.aside>
  );
};
