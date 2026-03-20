import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Users, ShieldCheck, FileText, AlertTriangle, TrendingUp, MapPin, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { formatCurrency } from '../lib/utils';

const AdminDashboardPage = () => {
  const stats = [
    { label: 'Total Workers', value: '12,482', icon: <Users className="text-brand-gold" />, trend: '+124 today' },
    { label: 'Active Policies', value: '8,920', icon: <ShieldCheck className="text-brand-gold" />, trend: '71% penetration' },
    { label: 'Claims Today', value: '142', icon: <FileText className="text-brand-gold" />, trend: '98% auto-approved' },
    { label: 'Fraud Alerts', value: '12', icon: <AlertTriangle className="text-rose-600" />, trend: 'Low risk' },
  ];

  const barData = {
    labels: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai'],
    datasets: [{
      label: 'Claims by City',
      data: [450, 320, 280, 150, 120],
      backgroundColor: '#C5A059', // Brand Gold
      borderRadius: 8,
    }]
  };

  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Weekly Payout Trends (₹)',
      data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
      borderColor: '#002B1B', // Brand Green
      tension: 0.4,
      fill: true,
      backgroundColor: 'rgba(0, 43, 27, 0.1)',
    }]
  };

  const donutData = {
    labels: ['Rain', 'Heat', 'Pollution', 'Curfew'],
    datasets: [{
      data: [65, 20, 10, 5],
      backgroundColor: ['#002B1B', '#C5A059', '#1A4D3B', '#EF4444'],
      borderWidth: 0,
    }]
  };

  return (
    <DashboardLayout title="Admin Analytics" subtitle="Real-time monitoring of GigShield insurance ecosystem." role="admin">
      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
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
              <Activity size={16} className="text-slate-300" />
            </div>
            <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
            <h3 className="text-2xl font-bold text-brand-green mb-2">{stat.value}</h3>
            <p className="text-xs text-slate-400">{stat.trend}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid gap-8 lg:grid-cols-2 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-brand-green/5 shadow-sm">
          <h3 className="text-lg font-bold text-brand-green mb-6 flex items-center gap-2">
            <MapPin size={20} className="text-brand-gold" />
            Claims by City
          </h3>
          <div className="h-64">
            <Bar data={barData} options={{ maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-brand-green/5 shadow-sm">
          <h3 className="text-lg font-bold text-brand-green mb-6 flex items-center gap-2">
            <TrendingUp size={20} className="text-brand-gold" />
            Weekly Payout Trends
          </h3>
          <div className="h-64">
            <Line data={lineData} options={{ maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-2xl border border-brand-green/5 shadow-sm">
          <h3 className="text-lg font-bold text-brand-green mb-6">Disruption Frequency</h3>
          <div className="h-64 flex items-center justify-center">
            <Doughnut data={donutData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
        
        <div className="lg:col-span-2 bg-white rounded-2xl border border-brand-green/5 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-brand-green/5">
            <h3 className="text-lg font-bold text-brand-green">Recent Fraud Alerts</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-green/5 text-brand-green font-bold uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Worker ID</th>
                  <th className="px-6 py-4">Risk Level</th>
                  <th className="px-6 py-4">Reason</th>
                  <th className="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-green/5">
                {[
                  { id: 'W-992', risk: 'High', reason: 'GPS Spoofing Detected', action: 'Suspend' },
                  { id: 'W-881', risk: 'Medium', reason: 'Multiple Claims (24h)', action: 'Review' },
                  { id: 'W-772', risk: 'Low', reason: 'Inconsistent ID', action: 'Verify' },
                ].map((alert, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 font-bold text-brand-green">{alert.id}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                        alert.risk === 'High' ? 'bg-rose-100 text-rose-600' : 'bg-brand-gold/20 text-brand-green'
                      }`}>
                        {alert.risk}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{alert.reason}</td>
                    <td className="px-6 py-4">
                      <button className="text-brand-gold font-bold hover:underline">{alert.action}</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboardPage;
