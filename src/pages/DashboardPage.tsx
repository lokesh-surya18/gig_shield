import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, AlertCircle, CheckCircle2, Clock, ShieldCheck, ArrowRight, CloudRain, ShieldPlus, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { formatCurrency } from '../lib/utils';
import { MOCK_CLAIMS } from '../types';
import DashboardLayout from '../components/DashboardLayout';

const DashboardPage = () => {
  const stats = [
    { label: 'Active Policy', value: 'Premium Plan', icon: <ShieldCheck className="text-brand-gold" />, trend: 'Expires in 5 days' },
    { label: 'Weekly Premium', value: '₹40', icon: <ShieldPlus className="text-brand-gold" />, trend: 'Paid on Monday' },
    { label: 'Protected Earnings', value: '₹12,400', icon: <TrendingUp className="text-brand-gold" />, trend: '+12% from last week' },
    { label: 'Total Claims', value: '3', icon: <FileText className="text-brand-gold" />, trend: '2 Approved, 1 Pending' },
  ];

  return (
    <DashboardLayout title="Welcome back, Rahul!" subtitle="Your income is currently protected in Mumbai West.">
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-brand-green/5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-brand-green/5 rounded-lg">{stat.icon}</div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Live</span>
              </div>
              <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold text-brand-green mb-2">{stat.value}</h3>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                {stat.trend.includes('Pending') ? <Clock size={12} /> : <CheckCircle2 size={12} className="text-brand-gold" />}
                {stat.trend}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Recent Claims */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-brand-green/5 overflow-hidden">
            <div className="p-6 border-b border-brand-green/5 flex items-center justify-between">
              <h3 className="text-lg font-bold text-brand-green">Recent Claims</h3>
              <Link to="/claims" className="text-sm font-semibold text-brand-gold hover:underline">View All</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-brand-green/5 text-brand-green/60 text-xs font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Claim ID</th>
                    <th className="px-6 py-4">Event Type</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-green/5">
                  {MOCK_CLAIMS.map((claim) => (
                    <tr key={claim.id} className="hover:bg-brand-green/5 transition-all cursor-pointer">
                      <td className="px-6 py-4 font-bold text-brand-green">{claim.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {claim.eventType === 'Heavy Rain' ? <CloudRain size={16} className="text-brand-gold" /> : <AlertCircle size={16} className="text-brand-gold" />}
                          <span className="text-sm text-slate-600">{claim.eventType}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-brand-green">{formatCurrency(claim.amount)}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          claim.status === 'Approved' ? 'bg-brand-gold/20 text-brand-green' :
                          claim.status === 'Pending' ? 'bg-amber-100 text-amber-600' :
                          'bg-rose-100 text-rose-600'
                        }`}>
                          {claim.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{claim.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Weather Widget */}
          <div className="space-y-8">
            <div className="bg-brand-green rounded-2xl p-6 text-white shadow-lg shadow-brand-green/20 border border-white/5">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-white/60 text-sm font-medium">Mumbai, Maharashtra</p>
                  <h3 className="text-3xl font-bold text-brand-gold">28°C</h3>
                </div>
                <CloudRain size={48} className="text-brand-gold" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Rain Probability</span>
                  <span className="font-bold text-brand-gold">85%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full">
                  <div className="h-full w-[85%] bg-brand-gold rounded-full"></div>
                </div>
                <p className="text-xs text-white/40 italic">High risk of disruption detected. Payouts may be triggered automatically.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-green/5">
              <h3 className="text-lg font-bold text-brand-green mb-4">Quick Actions</h3>
              <div className="grid gap-4">
                <button className="flex items-center justify-between p-4 rounded-xl border border-brand-green/5 hover:border-brand-gold hover:bg-brand-gold/5 transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-green/5 text-brand-green rounded-lg group-hover:bg-brand-gold group-hover:text-black transition-all">
                      <ShieldPlus size={20} />
                    </div>
                    <span className="font-bold text-slate-700">Upgrade Plan</span>
                  </div>
                  <ArrowRight size={18} className="text-slate-400" />
                </button>
                <button className="flex items-center justify-between p-4 rounded-xl border border-brand-green/5 hover:border-brand-gold hover:bg-brand-gold/5 transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-green/5 text-brand-green rounded-lg group-hover:bg-brand-gold group-hover:text-black transition-all">
                      <TrendingUp size={20} />
                    </div>
                    <span className="font-bold text-slate-700">Earnings Report</span>
                  </div>
                  <ArrowRight size={18} className="text-slate-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
