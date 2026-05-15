import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Input } from '../components/ui';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
    else setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-8"
        >
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/20">
            <CheckCircle2 className="text-green-500 w-12 h-12" />
          </div>
          <h2 className="text-4xl font-bold text-white">Registration Successful!</h2>
          <p className="text-gray-400">Welcome to AlicePay. Your account has been created and is ready to use.</p>
          <Link to="/login">
            <Button className="w-full h-14 mt-4">Go to Dashboard</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Steps Indicator */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           className="hidden lg:flex flex-col justify-center space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-white leading-tight">
              Create your <br />
              <span className="text-accent">Free Account</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-sm">
              Join the world's most advanced digital banking platform today.
            </p>
          </div>
          
          <div className="space-y-8 relative">
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-white/5" />
              {[
                { s: 1, t: 'Personal Details', d: 'Enter your basic contact information' },
                { s: 2, t: 'Security Setup', d: 'Create a password and secure your account' }
              ].map((s) => (
                <div key={s.s} className={`flex gap-6 relative z-10 transition-opacity duration-300 ${step === s.s ? 'opacity-100' : 'opacity-40'}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 ${step >= s.s ? 'bg-accent border-accent text-white shadow-lg shadow-accent/20' : 'border-white/10 text-gray-500 bg-bg-dark'}`}>
                        {step > s.s ? <CheckCircle2 size={24} /> : s.s}
                    </div>
                    <div>
                        <h4 className="text-white font-bold">{s.t}</h4>
                        <p className="text-gray-500 text-sm">{s.d}</p>
                    </div>
                </div>
              ))}
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
        >
          <Card className="max-w-md mx-auto p-10 py-12">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold text-white mb-2">Get Started</h1>
                    <p className="text-gray-400">Step 1: Profile Information</p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <Input label="First Name" placeholder="Alice" />
                        <Input label="Last Name" placeholder="Bakeer" />
                    </div>
                    <Input label="Email Address" placeholder="alice@example.com" type="email" />
                    <Input label="Phone Number" placeholder="+1 234 567 890" />

                    <Button onClick={handleNext} className="w-full h-12 text-lg font-bold">Continue</Button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold text-white mb-2">Secure Account</h1>
                    <p className="text-gray-400">Step 2: Password and Verification</p>
                  </div>

                  <div className="space-y-6">
                    <div className="relative">
                      <Input label="Password" placeholder="••••••••" type={showPassword ? 'text' : 'password'} />
                      <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 bottom-3.5 text-gray-400">
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-3">
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Password Strength</p>
                        <div className="flex gap-1 h-1.5">
                            <div className="flex-1 bg-green-500 rounded-full" />
                            <div className="flex-1 bg-green-500 rounded-full" />
                            <div className="flex-1 bg-white/10 rounded-full" />
                            <div className="flex-1 bg-white/10 rounded-full" />
                        </div>
                        <p className="text-xs text-green-500">Strong password</p>
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 accent-accent" />
                      <span className="text-xs text-gray-500 leading-relaxed group-hover:text-white transition-colors">
                        I agree to the <a href="#" className="text-accent underline">Terms of Service</a> and <a href="#" className="text-accent underline">Privacy Policy</a>.
                      </span>
                    </label>

                    <Button onClick={handleNext} className="w-full h-12 text-lg font-bold">Create Account</Button>
                    <button onClick={() => setStep(1)} className="w-full text-sm text-gray-400 hover:text-white">Back to previous step</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-center text-sm text-gray-400 mt-8">
              Already have an account? <Link to="/login" className="text-accent font-bold hover:underline">Sign in</Link>
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
