import { 
  // Chrome,
   Eye, EyeOff, 
  // Github,
   Mail } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Input } from '../components/ui';
import { motion } from 'framer-motion';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Visual */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           className="hidden lg:flex flex-col justify-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-white leading-tight">
              Welcome back to <br />
              <span className="text-accent">AlicePay</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-sm">
              Sign in to manage your transfers and monitor your assets globally.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full -z-10" />
            <div className="glass-card p-8 border-white/10 space-y-6">
                {[
                  { label: 'Security Level', value: 'Maximum', color: 'text-green-500' },
                  { label: 'Login Protection', value: 'Active', color: 'text-blue-500' },
                  { label: 'IP Tracked', value: '192.168.1.1', color: 'text-gray-400' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center pb-4 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="text-sm text-gray-500 uppercase tracking-widest">{item.label}</span>
                    <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                  </div>
                ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.1 }}
        >
          <Card className="max-w-md mx-auto p-10 py-12">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold text-white mb-2">Sign In</h1>
                <p className="text-gray-400">Please enter your details to login.</p>
              </div>

              <div className="space-y-6">
                <Input 
                  label="Email Address" 
                  placeholder="name@company.com" 
                  type="email"
                  icon={<Mail size={18} className="text-gray-500" />}
                />
                <div className="relative">
                  <Input 
                    label="Password" 
                    placeholder="••••••••" 
                    type={showPassword ? 'text' : 'password'}
                  />
                  <button 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 bottom-3.5 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 accent-accent" />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-accent hover:underline">Forgot password?</a>
                </div>

                <Button className="w-full h-12 text-lg font-bold">Sign In</Button>
{/* 
                <div className="relative text-center py-2">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                  <span className="relative bg-[#151521] px-4 text-xs text-gray-500 uppercase tracking-widest">Or continue with</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="flex items-center justify-center gap-2 h-12 bg-white/5 border-white/10">
                    <Chrome size={18} /> Google
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center gap-2 h-12 bg-white/5 border-white/10">
                    <Github size={18} /> GitHub
                  </Button>
                </div> */}
              </div>

              <p className="text-center text-sm text-gray-400 mt-8">
                Don't have an account? <Link to="/register" className="text-accent font-bold hover:underline">Sign up for free</Link>
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;