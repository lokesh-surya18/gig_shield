import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Shield, LayoutDashboard, ShieldPlus, FileText, Bell, Search, LogOut, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  role?: 'worker' | 'admin';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title, subtitle, role = 'worker' }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const workerNav = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
    { id: 'policies', label: 'Buy Policy', icon: <ShieldPlus size={20} />, path: '/policies' },
    { id: 'claims', label: 'Claims', icon: <FileText size={20} />, path: '/claims' },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={20} />, path: '/notifications' },
  ];

  const adminNav = [
    { id: 'admin', label: 'Admin Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin' },
    { id: 'admin-verification', label: 'Worker Verification', icon: <ShieldPlus size={20} />, path: '/admin-verification' },
    { id: 'admin-claims', label: 'Claims Management', icon: <FileText size={20} />, path: '/admin-claims' },
  ];

  const navItems = role === 'admin' ? adminNav : workerNav;

  return (
    <div className="min-h-screen bg-brand-green/5 font-sans text-slate-900 flex">
      {/* Sidebar Desktop */}
      <aside className="hidden lg:flex w-64 bg-brand-green text-white flex-col shrink-0 fixed h-full z-30 border-r border-white/5">
        <div className="p-6 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gold text-black">
            <Shield size={18} />
          </div>
          <span className="text-lg font-bold tracking-tight uppercase">GigShield AI</span>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <Link 
              key={item.id}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${location.pathname === item.path ? 'bg-brand-gold text-black shadow-lg shadow-brand-gold/20' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 px-4 py-3 w-full text-white/40 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="h-20 bg-white border-b border-brand-green/10 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 text-brand-green"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="relative hidden md:block w-64 lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/10 outline-none transition-all text-sm"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-brand-gold hover:bg-brand-gold/5 rounded-lg transition-all relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-10 w-px bg-slate-200 mx-2 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-brand-green">{role === 'admin' ? 'Admin Panel' : 'Rahul Sharma'}</p>
                <p className="text-xs text-slate-500">{role === 'admin' ? 'System Administrator' : 'Zomato Partner'}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold font-bold">
                {role === 'admin' ? 'AD' : 'RS'}
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 lg:p-8 flex-1">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
            {subtitle && <p className="text-slate-500">{subtitle}</p>}
          </div>
          {children}
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-brand-green/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <motion.aside 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            className="absolute left-0 top-0 bottom-0 w-72 bg-brand-green text-white flex flex-col"
          >
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gold text-black">
                  <Shield size={18} />
                </div>
                <span className="text-lg font-bold tracking-tight uppercase">GigShield AI</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white/40">
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.id}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${location.pathname === item.path ? 'bg-brand-gold text-black shadow-lg shadow-brand-gold/20' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
          </motion.aside>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
