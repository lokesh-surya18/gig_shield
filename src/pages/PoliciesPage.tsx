import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Shield, Check, ArrowRight, PartyPopper } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MOCK_POLICIES, Policy } from '../types';
import { formatCurrency } from '../lib/utils';

const PoliciesPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<Policy | null>(null);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBuyPlan = (policy: Policy) => {
    setIsPurchasing(true);
    // Simulate API call
    setTimeout(() => {
      setSelectedPlan(policy);
      setIsPurchasing(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  return (
    <DashboardLayout title="Insurance Plans" subtitle="Choose the best protection for your daily delivery work.">
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-8 bg-brand-gold/10 border border-brand-gold/20 p-4 rounded-2xl flex items-center gap-4 text-brand-green"
          >
            <div className="bg-brand-gold/20 p-2 rounded-full text-brand-gold">
              <PartyPopper size={20} />
            </div>
            <div>
              <p className="font-bold">Plan Activated!</p>
              <p className="text-sm">You are now covered under the {selectedPlan?.name}. Protection starts immediately.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-8 md:grid-cols-3">
        {MOCK_POLICIES.map((policy, i) => {
          const isCurrent = selectedPlan?.id === policy.id;
          
          return (
            <motion.div 
              key={policy.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 border-2 transition-all hover:scale-[1.02] ${
                isCurrent 
                  ? 'border-brand-gold bg-brand-gold/5' 
                  : policy.id === 'p2' 
                    ? 'border-brand-green bg-white shadow-xl shadow-brand-green/5' 
                    : 'border-slate-100 bg-white shadow-sm'
              }`}
            >
              {isCurrent && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Active Plan
                </div>
              )}
              {policy.id === 'p2' && !isCurrent && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-green text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-brand-green mb-2">{policy.name}</h3>
                <p className="text-slate-500 text-sm">{policy.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-brand-green">{formatCurrency(policy.premium)}</span>
                  <span className="text-slate-500 font-medium">/week</span>
                </div>
                <p className="text-sm text-brand-gold font-semibold mt-2">Coverage: {formatCurrency(policy.coverage)}/day</p>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {[
                  'Rain Disruption Coverage',
                  'Heatwave Protection',
                  'Automatic AI Payouts',
                  policy.id !== 'p1' ? 'Pollution Alert Coverage' : null,
                  policy.id === 'p3' ? 'Curfew Compensation' : null,
                ].filter(Boolean).map((benefit, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleBuyPlan(policy)}
                disabled={isCurrent || isPurchasing}
                className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isCurrent
                    ? 'bg-brand-gold/20 text-brand-green'
                    : policy.id === 'p2' 
                      ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20 hover:bg-brand-green/90' 
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {isPurchasing ? 'Processing...' : isCurrent ? 'Current Plan' : 'Buy Plan'} 
                {!isCurrent && !isPurchasing && <ArrowRight size={18} />}
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Comparison Table */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Detailed Comparison</h3>
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="p-6 text-sm font-bold text-slate-900 border-b border-slate-200">Features</th>
                <th className="p-6 text-sm font-bold text-slate-900 border-b border-slate-200">Basic</th>
                <th className="p-6 text-sm font-bold text-slate-900 border-b border-slate-200">Standard</th>
                <th className="p-6 text-sm font-bold text-slate-900 border-b border-slate-200">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-6 text-sm text-slate-600 border-b border-slate-100">Weekly Premium</td>
                <td className="p-6 text-sm font-semibold text-slate-900 border-b border-slate-100">₹15</td>
                <td className="p-6 text-sm font-semibold text-slate-900 border-b border-slate-100">₹25</td>
                <td className="p-6 text-sm font-semibold text-slate-900 border-b border-slate-100">₹40</td>
              </tr>
              <tr>
                <td className="p-6 text-sm text-slate-600 border-b border-slate-100">Daily Coverage</td>
                <td className="p-6 text-sm font-semibold text-slate-900 border-b border-slate-100">₹300</td>
                <td className="p-6 text-sm font-semibold text-slate-900 border-b border-slate-100">₹500</td>
                <td className="p-6 text-sm font-semibold text-slate-900 border-b border-slate-100">₹800</td>
              </tr>
              <tr>
                <td className="p-6 text-sm text-slate-600 border-b border-slate-100">Rain Threshold</td>
                <td className="p-6 text-sm text-slate-900 border-b border-slate-100">15mm</td>
                <td className="p-6 text-sm text-slate-900 border-b border-slate-100">10mm</td>
                <td className="p-6 text-sm text-slate-900 border-b border-slate-100">5mm</td>
              </tr>
              <tr>
                <td className="p-6 text-sm text-slate-600 border-b border-slate-100">Heat Threshold</td>
                <td className="p-6 text-sm text-slate-900 border-b border-slate-100">42°C</td>
                <td className="p-6 text-sm text-slate-900 border-b border-slate-100">40°C</td>
                <td className="p-6 text-sm text-slate-900 border-b border-slate-100">38°C</td>
              </tr>
              <tr>
                <td className="p-6 text-sm text-slate-600 border-b border-slate-100">Pollution Alert</td>
                <td className="p-6 text-slate-400 border-b border-slate-100">—</td>
                <td className="p-6 text-brand-gold border-b border-slate-100"><Check size={16} /></td>
                <td className="p-6 text-brand-gold border-b border-slate-100"><Check size={16} /></td>
              </tr>
              <tr>
                <td className="p-6 text-sm text-slate-600 border-b border-slate-100">Curfew/Strike</td>
                <td className="p-6 text-slate-400 border-b border-slate-100">—</td>
                <td className="p-6 text-slate-400 border-b border-slate-100">—</td>
                <td className="p-6 text-brand-gold border-b border-slate-100"><Check size={16} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* How it Works */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">How GigShield Works</h3>
        <div className="grid gap-8 md:grid-cols-4">
          {[
            { step: "01", title: "Choose Plan", desc: "Select the coverage that fits your daily earnings." },
            { step: "02", title: "Connect App", desc: "Link your Zomato, Swiggy or Uber account." },
            { step: "03", title: "Weather Alert", desc: "AI monitors weather data in your specific city." },
            { step: "04", title: "Instant Pay", desc: "Payouts hit your wallet as soon as thresholds are met." }
          ].map((item, i) => (
            <div key={i} className="relative p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
              <span className="text-4xl font-black text-slate-100 absolute top-4 right-6">{item.step}</span>
              <h4 className="font-bold text-slate-900 mb-2 relative z-10">{item.title}</h4>
              <p className="text-slate-500 text-sm relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">Trusted by 50,000+ Partners</h3>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            { name: "Arjun K.", role: "Zomato Partner, Mumbai", text: "Last monsoon, I lost 10 days of work. This year, GigShield paid me ₹5,000 automatically when it poured. It's a lifesaver.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" },
            { name: "Saritha V.", role: "Swiggy Star, Bangalore", text: "The heat in Bangalore was unbearable last month. I couldn't ride between 12-4 PM. GigShield covered my gap perfectly.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" }
          ].map((t, i) => (
            <div key={i} className="bg-slate-900 text-white p-8 rounded-3xl flex gap-6 items-start">
              <img src={t.img} alt={t.name} className="w-16 h-16 rounded-2xl object-cover grayscale" referrerPolicy="no-referrer" />
              <div>
                <p className="text-slate-300 italic mb-4">"{t.text}"</p>
                <p className="font-bold">{t.name}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h3>
        <div className="grid gap-4 max-w-3xl mx-auto">
          {[
            { q: "How do I get paid?", a: "Payouts are automatic. When weather data hits the threshold in your city, we send the money directly to your linked wallet within 2 hours." },
            { q: "Do I need to upload photos of rain?", a: "No! GigShield uses real-time satellite and weather station data. We know when it's raining, so you don't have to prove anything." },
            { q: "Can I cancel anytime?", a: "Yes, our plans are weekly. You can stop your subscription at the end of any week with no cancellation fees." },
            { q: "What cities are covered?", a: "Currently we cover all major metros including Mumbai, Delhi, Bangalore, Hyderabad, and Pune. More cities coming soon!" }
          ].map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 bg-brand-green/5 rounded-3xl p-8 border border-brand-green/10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-green text-brand-gold shadow-lg shadow-brand-green/20">
          <Shield size={32} />
        </div>
        <div>
          <h4 className="text-xl font-bold text-brand-green mb-2">How Parametric Insurance Works</h4>
          <p className="text-slate-600">Unlike traditional insurance, we don't ask for proof of loss. We use local weather data. If it rains more than 10mm in your area, your payout is automatically triggered. No questions asked.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PoliciesPage;
