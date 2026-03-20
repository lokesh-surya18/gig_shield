import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { CloudRain, AlertCircle, Plus, CheckCircle2, Loader2, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MOCK_CLAIMS, Claim } from '../types';
import { formatCurrency } from '../lib/utils';

const ClaimsPage = () => {
  const [claims, setClaims] = useState<Claim[]>(MOCK_CLAIMS);
  const [isSimulating, setIsSimulating] = useState(false);

  const simulateRainDisruption = () => {
    setIsSimulating(true);
    
    setTimeout(() => {
      const newClaim: Claim = {
        id: `CLM-00${claims.length + 1}`,
        workerId: 'W-123',
        workerName: 'Rahul Sharma',
        eventType: 'Heavy Rain',
        city: 'Mumbai',
        amount: 500,
        status: 'Pending',
        date: new Date().toISOString().split('T')[0]
      };
      
      setClaims([newClaim, ...claims]);
      setIsSimulating(false);
    }, 2000);
  };

  return (
    <DashboardLayout title="Claims Management" subtitle="Monitor your automatic payouts and disruption history.">
      <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-brand-green/10">
          <button className="px-4 py-2 bg-brand-green text-white rounded-lg text-sm font-bold">All Claims</button>
          <button className="px-4 py-2 text-slate-500 hover:text-brand-gold rounded-lg text-sm font-bold">Approved</button>
          <button className="px-4 py-2 text-slate-500 hover:text-brand-gold rounded-lg text-sm font-bold">Pending</button>
        </div>
        
        <button 
          onClick={simulateRainDisruption}
          disabled={isSimulating}
          className="flex items-center gap-2 bg-brand-green text-brand-gold px-6 py-3 rounded-xl font-bold shadow-lg shadow-brand-green/20 hover:bg-brand-green/90 disabled:opacity-50 transition-all"
        >
          {isSimulating ? <Loader2 className="animate-spin" size={20} /> : <Plus size={20} />}
          Simulate Rain Disruption
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-brand-green/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-brand-green/5 text-brand-green/60 text-xs font-bold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Claim ID</th>
                <th className="px-6 py-4">Event Type</th>
                <th className="px-6 py-4">City</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-green/5">
              <AnimatePresence initial={false}>
                {claims.map((claim) => (
                  <motion.tr 
                    key={claim.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="hover:bg-brand-green/5 transition-all"
                  >
                    <td className="px-6 py-4 font-bold text-brand-green">{claim.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {claim.eventType === 'Heavy Rain' ? <CloudRain size={16} className="text-brand-gold" /> : <AlertCircle size={16} className="text-brand-gold" />}
                        <span className="text-sm text-slate-600">{claim.eventType}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{claim.city}</td>
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
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded-2xl border border-brand-green/5 shadow-sm">
          <h4 className="font-bold text-brand-green mb-4 flex items-center gap-2">
            <AlertCircle className="text-brand-gold" size={20} />
            Claim Process Info
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            GigShield uses parametric triggers. This means claims are processed automatically based on environmental data. You don't need to upload any bills or proof of loss. If our sensors detect the disruption in your city, your payout is guaranteed.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-brand-green/5 shadow-sm">
          <h4 className="font-bold text-brand-green mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-brand-gold" size={20} />
            Payout Timeline
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Once a disruption is verified (usually within 2 hours of the event), the payout is processed instantly to your linked wallet. You can track the status in the Notifications tab.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClaimsPage;
