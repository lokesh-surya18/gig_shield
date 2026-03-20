import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { CheckCircle2, Clock, AlertCircle, CreditCard, ArrowUpRight } from 'lucide-react';
import { formatCurrency } from '../lib/utils';
import { MOCK_CLAIMS } from '../types';

const NotificationsPage = () => {
  const payouts = [
    { id: 'PAY-882', claimId: 'CLM-001', amount: 500, status: 'Paid', date: '2024-03-10', method: 'UPI (Paytm)' },
    { id: 'PAY-881', claimId: 'CLM-003', amount: 800, status: 'Failed', date: '2024-03-08', method: 'Bank Transfer' },
    { id: 'PAY-883', claimId: 'CLM-004', amount: 300, status: 'Processing', date: '2024-03-14', method: 'UPI (GPay)' },
  ];

  return (
    <DashboardLayout title="Payout Notifications" subtitle="Track your compensation payments and transaction history.">
      <div className="space-y-6">
        {payouts.map((payout) => (
          <div key={payout.id} className="bg-white rounded-2xl p-6 border border-brand-green/5 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${
                  payout.status === 'Paid' ? 'bg-brand-gold/20 text-brand-green' :
                  payout.status === 'Processing' ? 'bg-brand-green/10 text-brand-green' :
                  'bg-rose-100 text-rose-600'
                }`}>
                  {payout.status === 'Paid' ? <CheckCircle2 size={24} /> : payout.status === 'Processing' ? <Clock size={24} /> : <AlertCircle size={24} />}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-brand-green">Payout for {payout.claimId}</h4>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      payout.status === 'Paid' ? 'bg-brand-gold/20 text-brand-green' :
                      payout.status === 'Processing' ? 'bg-brand-green/10 text-brand-green' :
                      'bg-rose-100 text-rose-600'
                    }`}>
                      {payout.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mb-2">Transaction ID: {payout.id} • {payout.date}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <CreditCard size={14} />
                    <span>Sent via {payout.method}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between md:text-right gap-4">
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Amount</p>
                  <p className="text-2xl font-extrabold text-brand-green">{formatCurrency(payout.amount)}</p>
                </div>
                <button className="p-2 bg-slate-50 text-slate-400 hover:text-brand-gold rounded-lg transition-all">
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-slate-400 text-sm">Showing last 30 days of payout history.</p>
        <button className="mt-4 text-sm font-bold text-brand-gold hover:underline">Download Statement (PDF)</button>
      </div>
    </DashboardLayout>
  );
};

export default NotificationsPage;
