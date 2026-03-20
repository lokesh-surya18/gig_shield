import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Check, X, Search, Filter, Download, AlertCircle, CloudRain, ThermometerSun } from 'lucide-react';
import { MOCK_CLAIMS, Claim } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { formatCurrency } from '../lib/utils';

const AdminClaimsPage = () => {
  const [claims, setClaims] = useState<Claim[]>(MOCK_CLAIMS);
  const [searchTerm, setSearchTerm] = useState('');

  const handleStatus = (id: string, newStatus: any) => {
    setClaims(claims.map(c => c.id === id ? { ...c, status: newStatus } : c));
  };

  return (
    <DashboardLayout title="Claims Management" subtitle="Review, approve, and process insurance payouts." role="admin">
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        {[
          { label: 'Pending Review', value: '42', color: 'bg-brand-gold' },
          { label: 'Auto-Approved', value: '1,204', color: 'bg-brand-green' },
          { label: 'Flagged/Fraud', value: '12', color: 'bg-rose-500' },
          { label: 'Total Payouts', value: '₹4.2L', color: 'bg-brand-gold' },
        ].map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl border border-brand-green/5 shadow-sm">
            <div className={`h-1 w-12 ${item.color} rounded-full mb-3`}></div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.label}</p>
            <p className="text-2xl font-bold text-brand-green">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-brand-green/5 overflow-hidden">
        <div className="p-6 border-b border-brand-green/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by Claim ID or Worker Name..." 
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:border-brand-gold transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-bold text-brand-green hover:bg-brand-green/5">
              <Filter size={16} /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-bold text-brand-green hover:bg-brand-green/5">
              <Download size={16} /> Export
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-brand-green/5 text-brand-green text-xs font-bold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Claim ID</th>
                <th className="px-6 py-4">Worker</th>
                <th className="px-6 py-4">Event & City</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-green/5">
              <AnimatePresence>
                {claims.filter(c => c.workerName.toLowerCase().includes(searchTerm.toLowerCase()) || c.id.toLowerCase().includes(searchTerm.toLowerCase())).map((claim) => (
                  <motion.tr 
                    key={claim.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-brand-green/5 transition-all"
                  >
                    <td className="px-6 py-4 font-bold text-brand-green">{claim.id}</td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-bold text-brand-green">{claim.workerName}</p>
                        <p className="text-xs text-slate-500">ID: {claim.workerId}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {claim.eventType === 'Heavy Rain' ? <CloudRain size={16} className="text-brand-gold" /> : <ThermometerSun size={16} className="text-brand-gold" />}
                        <div>
                          <p className="text-sm font-medium text-slate-700">{claim.eventType}</p>
                          <p className="text-xs text-slate-500">{claim.city}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-brand-green">{formatCurrency(claim.amount)}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        claim.status === 'Approved' ? 'bg-brand-gold/20 text-brand-green' :
                        claim.status === 'Pending' ? 'bg-brand-green/10 text-brand-green' :
                        'bg-rose-100 text-rose-600'
                      }`}>
                        {claim.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {claim.status === 'Pending' ? (
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => handleStatus(claim.id, 'Approved')}
                            className="p-2 bg-brand-gold/20 text-brand-green rounded-lg hover:bg-brand-gold hover:text-black transition-all"
                            title="Approve Payout"
                          >
                            <Check size={18} />
                          </button>
                          <button 
                            onClick={() => handleStatus(claim.id, 'Rejected')}
                            className="p-2 bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-600 hover:text-white transition-all"
                            title="Reject Claim"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      ) : (
                        <button className="text-xs font-bold text-brand-gold hover:underline">View Details</button>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-brand-gold/10 border border-brand-gold/20 rounded-2xl p-6 flex items-start gap-4">
        <AlertCircle className="text-brand-gold shrink-0" size={24} />
        <div>
          <h4 className="font-bold text-brand-green mb-1">AI Fraud Detection Active</h4>
          <p className="text-sm text-brand-green/80">Our system has flagged 3 claims for manual review due to inconsistent GPS data during the reported disruption period. Please verify these before processing payouts.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminClaimsPage;
