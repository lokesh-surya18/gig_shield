import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Upload, X, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    platform: '',
    workerId: '',
    avgIncome: '',
    workingHours: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration
    localStorage.setItem('gigshield_user', JSON.stringify({ ...formData, status: 'pending' }));
    navigate('/verification');
  };

  return (
    <div className="min-h-screen bg-brand-green font-sans text-white">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="mb-12 text-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold text-black shadow-lg shadow-brand-gold/20">
              <Shield size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white uppercase">GigShield <span className="text-brand-gold">AI</span></span>
          </Link>
          <h1 className="text-3xl font-bold text-white uppercase tracking-tight">Worker Registration</h1>
          <p className="text-white/60 mt-2">Join thousands of delivery partners protected by GigShield.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-white/5 backdrop-blur-xl p-8 shadow-xl border border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Personal Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brand-gold border-b border-white/10 pb-2 uppercase tracking-wider">Personal Information</h3>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all text-white placeholder:text-white/20"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all text-white placeholder:text-white/20"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all text-white placeholder:text-white/20"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1">City</label>
                  <select 
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all text-white appearance-none"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  >
                    <option value="" className="bg-brand-green">Select City</option>
                    <option value="Mumbai" className="bg-brand-green">Mumbai</option>
                    <option value="Delhi" className="bg-brand-green">Delhi</option>
                    <option value="Bangalore" className="bg-brand-green">Bangalore</option>
                    <option value="Hyderabad" className="bg-brand-green">Hyderabad</option>
                    <option value="Chennai" className="bg-brand-green">Chennai</option>
                  </select>
                </div>
              </div>

              {/* Platform Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brand-gold border-b border-white/10 pb-2 uppercase tracking-wider">Platform Details</h3>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1">Delivery Platform</label>
                  <select 
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all text-white appearance-none"
                    value={formData.platform}
                    onChange={(e) => setFormData({...formData, platform: e.target.value})}
                  >
                    <option value="" className="bg-brand-green">Select Platform</option>
                    <option value="Swiggy" className="bg-brand-green">Swiggy</option>
                    <option value="Zomato" className="bg-brand-green">Zomato</option>
                    <option value="Amazon" className="bg-brand-green">Amazon</option>
                    <option value="Zepto" className="bg-brand-green">Zepto</option>
                    <option value="Blinkit" className="bg-brand-green">Blinkit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1">Worker ID</label>
                  <input 
                    required
                    type="text" 
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all text-white placeholder:text-white/20"
                    placeholder="e.g. ZOM-123456"
                    value={formData.workerId}
                    onChange={(e) => setFormData({...formData, workerId: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1">Avg. Daily Income (₹)</label>
                  <input 
                    required
                    type="number" 
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all text-white placeholder:text-white/20"
                    placeholder="e.g. 1200"
                    value={formData.avgIncome}
                    onChange={(e) => setFormData({...formData, avgIncome: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1">Working Hours Per Day</label>
                  <input 
                    required
                    type="number" 
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all text-white placeholder:text-white/20"
                    placeholder="e.g. 10"
                    value={formData.workingHours}
                    onChange={(e) => setFormData({...formData, workingHours: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Document Upload */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-brand-gold border-b border-white/10 pb-2 uppercase tracking-wider">Verification Documents</h3>
              <p className="text-sm text-white/50">Upload your Delivery Partner ID or App Screenshot for verification.</p>
              
              <div className="relative">
                {!preview ? (
                  <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer bg-white/5 hover:bg-white/10 transition-all group">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-10 h-10 text-white/20 group-hover:text-brand-gold transition-colors mb-4" />
                      <p className="mb-2 text-sm text-white/70 font-semibold">Click to upload or drag and drop</p>
                      <p className="text-xs text-white/40">PNG, JPG or PDF (MAX. 5MB)</p>
                    </div>
                    <input type="file" className="hidden" onChange={handleFileChange} accept="image/*,.pdf" />
                  </label>
                ) : (
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-white/10">
                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                    <button 
                      onClick={() => {setFile(null); setPreview(null);}}
                      className="absolute top-4 right-4 p-2 bg-black/80 rounded-full shadow-lg hover:bg-black text-rose-500"
                    >
                      <X size={20} />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-3 flex items-center gap-2">
                      <CheckCircle2 className="text-brand-gold" size={16} />
                      <span className="text-sm font-medium text-white">{file?.name}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit"
                className="w-full rounded-xl bg-brand-gold py-4 text-lg font-bold text-black shadow-xl shadow-brand-gold/20 transition-all hover:bg-brand-gold/90 hover:scale-[1.01] active:scale-[0.99]"
              >
                Create Account
              </button>
              <p className="text-center text-sm text-white/50 mt-4">
                Already have an account? <Link to="/login" className="text-brand-gold font-semibold hover:underline">Login here</Link>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;
