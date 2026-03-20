import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Check, X, Eye, FileText, ExternalLink, Search } from 'lucide-react';
import { MOCK_WORKERS, User } from '../types';
import { motion, AnimatePresence } from 'motion/react';

const AdminVerificationPage = () => {
  const [workers, setWorkers] = useState<User[]>(MOCK_WORKERS);

  const handleStatus = (id: string, newStatus: 'verified' | 'rejected') => {
    setWorkers(workers.map(w => w.id === id ? { ...w, status: newStatus } : w));
  };

  return (
    <DashboardLayout title="Worker Verification" subtitle="Review and approve delivery partner registration requests." role="admin">
      <div className="bg-white rounded-2xl shadow-sm border border-brand-green/5 overflow-hidden">
        <div className="p-6 border-b border-brand-green/5 flex items-center justify-between">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search workers..." 
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:border-brand-gold"
            />
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-brand-green/5 text-brand-green rounded-lg text-xs font-bold uppercase tracking-wider">Pending</button>
            <button className="px-4 py-2 text-slate-400 rounded-lg text-xs font-bold uppercase tracking-wider">All</button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-brand-green/5 text-brand-green text-xs font-bold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Worker Name</th>
                <th className="px-6 py-4">Platform</th>
                <th className="px-6 py-4">Worker ID</th>
                <th className="px-6 py-4">Document</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-green/5">
              <AnimatePresence>
                {workers.map((worker) => (
                  <motion.tr 
                    key={worker.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="hover:bg-brand-green/5 transition-all"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-bold text-brand-green">{worker.name}</p>
                        <p className="text-xs text-slate-500">{worker.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-slate-700">{worker.platform}</span>
                    </td>
                    <td className="px-6 py-4">
                      <code className="text-xs bg-brand-green/5 px-2 py-1 rounded font-mono text-brand-green">{worker.workerId}</code>
                    </td>
                    <td className="px-6 py-4">
                      <button className="flex items-center gap-2 text-brand-gold text-sm font-bold hover:underline">
                        <FileText size={16} />
                        View ID
                        <ExternalLink size={12} />
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        worker.status === 'verified' ? 'bg-brand-gold/20 text-brand-green' :
                        worker.status === 'pending' ? 'bg-brand-green/10 text-brand-green' :
                        'bg-rose-100 text-rose-600'
                      }`}>
                        {worker.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {worker.status === 'pending' ? (
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => handleStatus(worker.id, 'verified')}
                            className="p-2 bg-brand-gold/20 text-brand-green rounded-lg hover:bg-brand-gold hover:text-black transition-all"
                            title="Approve"
                          >
                            <Check size={18} />
                          </button>
                          <button 
                            onClick={() => handleStatus(worker.id, 'rejected')}
                            className="p-2 bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-600 hover:text-white transition-all"
                            title="Reject"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      ) : (
                        <button className="p-2 text-slate-400 hover:text-brand-gold transition-all">
                          <Eye size={18} />
                        </button>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminVerificationPage;
