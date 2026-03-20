import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, CheckCircle2, Loader2, Smartphone, FileCheck, UserCheck, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const VerificationPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [status, setStatus] = useState<'idle' | 'verifying' | 'success' | 'failed'>('idle');

  useEffect(() => {
    if (step === 1) {
      const timer = setTimeout(() => setStep(2), 2000);
      return () => clearTimeout(timer);
    }
    if (step === 2) {
      const timer = setTimeout(() => setStep(3), 2000);
      return () => clearTimeout(timer);
    }
    if (step === 3) {
      const timer = setTimeout(() => setStep(4), 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerify = () => {
    setIsVerifying(true);
    setStatus('verifying');
    
    // Simulate API call
    setTimeout(() => {
      setIsVerifying(false);
      setStatus('success');
      
      // Update user status in local storage
      const userStr = localStorage.getItem('gigshield_user');
      if (userStr) {
        const user = JSON.parse(userStr);
        user.status = 'verified';
        localStorage.setItem('gigshield_user', JSON.stringify(user));
      }

      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    }, 2500);
  };

  const steps = [
    { id: 1, name: 'Platform Validation', icon: <Smartphone size={20} /> },
    { id: 2, name: 'Worker ID Verification', icon: <UserCheck size={20} /> },
    { id: 3, name: 'Document Upload', icon: <FileCheck size={20} /> },
    { id: 4, name: 'OTP Authentication', icon: <ShieldCheck size={20} /> }
  ];

  return (
    <div className="min-h-screen bg-brand-green font-sans text-slate-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold text-black shadow-lg shadow-brand-gold/20 mb-4">
            <Shield size={28} />
          </div>
          <h1 className="text-2xl font-bold text-white uppercase tracking-tight">Worker Authentication</h1>
          <p className="text-white/60 mt-2">We're verifying your delivery partner credentials.</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-brand-green/5">
          {/* Progress Indicator */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2"></div>
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-brand-gold -translate-y-1/2 transition-all duration-500"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            ></div>
            <div className="relative flex justify-between">
              {steps.map((s) => (
                <div key={s.id} className="flex flex-col items-center">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300
                    ${step >= s.id ? 'bg-brand-gold text-black shadow-lg shadow-brand-gold/20' : 'bg-white border-2 border-slate-100 text-slate-300'}
                  `}>
                    {step > s.id ? <CheckCircle2 size={20} /> : s.icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider mt-2 ${step >= s.id ? 'text-brand-gold' : 'text-slate-400'}`}>
                    Step {s.id}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="min-h-[200px] flex flex-col items-center justify-center text-center">
            {step < 4 ? (
              <motion.div 
                key={step}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4"
              >
                <Loader2 className="w-12 h-12 text-brand-gold animate-spin mx-auto" />
                <div>
                  <h3 className="text-lg font-bold text-brand-green">{steps[step - 1].name}</h3>
                  <p className="text-slate-500 text-sm">Please wait while we validate your data...</p>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full space-y-6"
              >
                {status === 'success' ? (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-brand-gold/20 text-brand-green rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-green">Verification Successful</h3>
                      <p className="text-slate-500">Redirecting to your dashboard...</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div>
                      <h3 className="text-lg font-bold text-brand-green">Enter OTP</h3>
                      <p className="text-slate-500 text-sm">We've sent a code to your phone</p>
                    </div>
                    <div className="flex justify-center gap-4">
                      {otp.map((digit, i) => (
                        <input 
                          key={i}
                          id={`otp-${i}`}
                          type="text"
                          maxLength={1}
                          className="w-14 h-16 text-center text-2xl font-bold rounded-xl border-2 border-slate-200 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all"
                          value={digit}
                          onChange={(e) => handleOtpChange(i, e.target.value)}
                        />
                      ))}
                    </div>
                    <button 
                      onClick={handleVerify}
                      disabled={isVerifying || otp.some(d => !d)}
                      className="w-full rounded-xl bg-brand-green py-4 text-lg font-bold text-brand-gold shadow-xl shadow-brand-green/20 transition-all hover:bg-brand-green/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isVerifying ? <Loader2 className="animate-spin" /> : 'Verify & Continue'}
                    </button>
                    <button className="text-sm font-semibold text-brand-gold hover:underline">Resend Code</button>
                  </>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
