import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Mail, Lock, Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      if (email === 'admin@gigshield.ai') {
        navigate('/admin');
      } else if (email.includes('@')) {
        const userStr = localStorage.getItem('gigshield_user');
        if (userStr) {
          const user = JSON.parse(userStr);
          if (user.status === 'verified') {
            navigate('/dashboard');
          } else {
            navigate('/verification');
          }
        } else {
          // Default mock user
          navigate('/dashboard');
        }
      } else {
        setError('Invalid email or password. Please try again.');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-green font-sans text-white flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold text-black shadow-lg shadow-brand-gold/20 mb-4">
            <Shield size={28} />
          </Link>
          <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
          <p className="text-white/60 mt-2">Login to manage your protection.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/10"
        >
          {error && (
            <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center gap-3 text-rose-500 text-sm">
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input 
                  required
                  type="email" 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all text-white placeholder:text-white/20"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label className="block text-sm font-medium text-white/70">Password</label>
                <button type="button" className="text-xs font-semibold text-brand-gold hover:underline">Forgot Password?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input 
                  required
                  type="password" 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all text-white placeholder:text-white/20"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-brand-gold py-4 text-lg font-bold text-black shadow-xl shadow-brand-gold/20 transition-all hover:bg-brand-gold/90 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : 'Login'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-white/50">
              Don't have an account? <Link to="/register" className="text-brand-gold font-semibold hover:underline">Register now</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
