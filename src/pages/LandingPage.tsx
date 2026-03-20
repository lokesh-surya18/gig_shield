import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, CheckCircle2, Zap, CloudRain, ThermometerSun, AlertTriangle, ShieldCheck, Activity, Map, Globe } from 'lucide-react';
import { motion } from 'motion/react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-brand-green font-sans text-white selection:bg-brand-gold selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-brand-green/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <Shield size={24} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-black uppercase tracking-tighter">GigShield <span className="text-brand-gold">AI</span></span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-brand-gold transition-colors">Features</a>
            <a href="#how-it-works" className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-brand-gold transition-colors">How it Works</a>
            <a href="#plans" className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-brand-gold transition-colors">Plans</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors">Login</Link>
            <Link to="/register" className="rounded-lg bg-brand-gold px-6 py-2.5 text-xs font-black uppercase tracking-widest text-black transition-all hover:bg-brand-gold/90 hover:scale-105 active:scale-95">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,#043c32_0%,#022c22_100%)]"></div>
        <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8 inline-flex items-center gap-2 rounded-lg border border-brand-gold/30 bg-brand-gold/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-gold"></span>
                </span>
                System Status: Operational
              </div>
              <h1 className="mb-8 text-6xl font-black leading-[0.9] tracking-tighter lg:text-8xl uppercase">
                Income <br />
                <span className="text-brand-gold">Protected</span> <br />
                By Code.
              </h1>
              <p className="mb-12 max-w-lg text-lg leading-relaxed text-white/50 font-medium">
                The world's first AI-driven parametric insurance for the gig economy. No claims, no paperwork, just instant payouts when weather disrupts your work.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/register" className="flex items-center justify-center gap-3 rounded-xl bg-brand-gold px-10 py-5 text-sm font-black uppercase tracking-widest text-black transition-all hover:bg-brand-gold/90 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-1">
                  Join the Network <ArrowRight size={20} />
                </Link>
                <Link to="/login" className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-10 py-5 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-white/10">
                  Dashboard
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Typographic Hero Element instead of Image */}
              <div className="relative aspect-square w-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-3xl overflow-hidden group">
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                </div>
                
                <div className="relative h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-gold mb-2">Real-time Node</div>
                      <div className="text-4xl font-black tracking-tighter uppercase">Mumbai_Node_04</div>
                    </div>
                    <Activity className="text-brand-gold animate-pulse" size={32} />
                  </div>

                  <div className="space-y-6">
                    <div className="p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Rain Intensity</span>
                        <span className="text-xs font-black text-brand-gold">88%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: '88%' }}
                          transition={{ duration: 2, delay: 1 }}
                          className="h-full bg-brand-gold shadow-[0_0_10px_#d4af37]"
                        ></motion.div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Heat Index</span>
                        <span className="text-xs font-black text-orange-500">42°C</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: '65%' }}
                          transition={{ duration: 2, delay: 1.2 }}
                          className="h-full bg-orange-500 shadow-[0_0_10px_#f97316]"
                        ></motion.div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl border border-brand-gold/20 bg-brand-gold/5">
                    <Zap className="text-brand-gold" size={24} />
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Auto-Payout Triggered</div>
                      <div className="text-xl font-black tracking-tight">₹1,240,000 DISBURSED</div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-gold/10 rounded-full blur-[100px]"></div>
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="border-y border-white/10 bg-white/[0.02] py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="text-2xl font-black uppercase tracking-tighter opacity-20 italic">Trusted by 50,000+ Workers</span>
              <div className="h-2 w-2 rounded-full bg-brand-gold"></div>
              <span className="text-2xl font-black uppercase tracking-tighter opacity-20 italic">Real-time AI Payouts</span>
              <div className="h-2 w-2 rounded-full bg-brand-gold"></div>
              <span className="text-2xl font-black uppercase tracking-tighter opacity-20 italic">No Manual Claims</span>
              <div className="h-2 w-2 rounded-full bg-brand-gold"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold mb-4">Capabilities</div>
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-none lg:text-7xl">
                Engineered for <br />
                <span className="text-white/30">Resilience.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm font-medium text-white/40 leading-relaxed">
              Our infrastructure combines global weather satellites with local IoT sensors to create an unbreakable safety net.
            </p>
          </div>

          <div className="grid gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-3">
              {[
                { icon: <Zap size={32} />, title: "AI Risk Engine", desc: "Predictive models that anticipate disruptions before they happen." },
                { icon: <ShieldCheck size={32} />, title: "Smart Contracts", desc: "Payouts are hardcoded into the system. No human intervention needed." },
                { icon: <Globe size={32} />, title: "Hyper-Local", desc: "Precise monitoring down to 500m radius of your delivery zone." }
              ].map((f, i) => (
                <div key={i} className="bg-brand-green p-12 hover:bg-white/[0.02] transition-colors group">
                  <div className="text-brand-gold mb-8 group-hover:scale-110 transition-transform origin-left">{f.icon}</div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{f.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed font-medium">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3">
              {[
                { icon: <CloudRain size={32} />, title: "Rain Shield", desc: "Automatic compensation for heavy monsoon disruptions." },
                { icon: <ThermometerSun size={32} />, title: "Heat Guard", desc: "Protection against extreme temperature health risks." },
                { icon: <Map size={32} />, title: "Geo-Fencing", desc: "Verified location data ensures payouts only for affected zones." }
              ].map((f, i) => (
                <div key={i} className="bg-brand-green p-12 hover:bg-white/[0.02] transition-colors group">
                  <div className="text-brand-gold mb-8 group-hover:scale-110 transition-transform origin-left">{f.icon}</div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{f.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed font-medium">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Brutalist List */}
      <section id="how-it-works" className="py-32 bg-white text-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green mb-4">Protocol</div>
              <h2 className="text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-12 lg:text-8xl">
                Zero <br />
                Effort <br />
                <span className="text-brand-green">Security.</span>
              </h2>
              <Link to="/register" className="inline-flex items-center gap-4 group">
                <div className="h-16 w-16 rounded-full bg-brand-green text-white flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                  <ArrowRight size={24} />
                </div>
                <span className="text-xl font-black uppercase tracking-tight">Start Protection</span>
              </Link>
            </div>
            <div className="space-y-12">
              {[
                { step: "01", title: "Identity Sync", desc: "Connect your delivery partner ID. Our AI verifies your profile in seconds." },
                { step: "02", title: "Select Tier", desc: "Choose your weekly protection level based on your income targets." },
                { step: "03", title: "Live Sync", desc: "Our nodes monitor your city's environmental data 24/7." },
                { step: "04", title: "Auto-Disburse", desc: "Disruptions trigger instant payouts. No claims, no waiting." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 pb-12 border-b border-black/10 last:border-0">
                  <span className="text-4xl font-black text-black/10">{item.step}</span>
                  <div>
                    <h4 className="text-2xl font-black uppercase tracking-tight mb-2">{item.title}</h4>
                    <p className="text-black/60 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-32 bg-brand-green text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold mb-4">Pricing Protocol</div>
            <h2 className="text-5xl font-black uppercase tracking-tighter lg:text-7xl mb-6">
              Select Your <span className="text-brand-gold">Shield.</span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/50 font-medium">
              Weekly protection tiers designed for every level of delivery partner. No long-term contracts, cancel anytime.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { 
                name: "Basic Shield", 
                price: "15", 
                coverage: "300", 
                desc: "Essential protection for part-time partners.",
                features: ["Rain Disruption Coverage", "Heatwave Protection", "Instant AI Payouts"],
                icon: <CloudRain size={24} />
              },
              { 
                name: "Standard Shield", 
                price: "25", 
                coverage: "500", 
                popular: true,
                desc: "The standard for full-time delivery professionals.",
                features: ["Rain Disruption Coverage", "Heatwave Protection", "Instant AI Payouts", "Pollution Alert Coverage"],
                icon: <Zap size={24} />
              },
              { 
                name: "Premium Shield", 
                price: "40", 
                coverage: "800", 
                desc: "Maximum security for high-volume earners.",
                features: ["Rain Disruption Coverage", "Heatwave Protection", "Instant AI Payouts", "Pollution Alert Coverage", "Curfew Compensation"],
                icon: <ShieldCheck size={24} />
              }
            ].map((plan, i) => (
              <div 
                key={i} 
                className={`relative flex flex-col p-8 rounded-3xl border-2 transition-all hover:-translate-y-2 group ${
                  plan.popular 
                    ? 'border-brand-gold bg-white/5 shadow-[0_0_40px_rgba(212,175,55,0.1)]' 
                    : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${plan.popular ? 'bg-brand-gold text-black' : 'bg-white/10 text-brand-gold'}`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{plan.name}</h3>
                  <p className="text-white/40 text-sm font-medium">{plan.desc}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white">₹{plan.price}</span>
                    <span className="text-white/40 font-bold uppercase text-xs tracking-widest">/week</span>
                  </div>
                  <div className="mt-4 p-3 rounded-xl bg-brand-gold/10 border border-brand-gold/20 inline-block">
                    <p className="text-xs font-black text-brand-gold uppercase tracking-widest">Coverage: ₹{plan.coverage}/day</p>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium text-white/70">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold">
                        <CheckCircle2 size={12} strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/register" 
                  className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-center transition-all ${
                    plan.popular 
                      ? 'bg-brand-gold text-black hover:bg-brand-gold/90 shadow-[0_0_20px_rgba(212,175,55,0.2)]' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Activate Shield
                </Link>
              </div>
            ))}
          </div>

          {/* Comparison Summary */}
          <div className="mt-20 p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <div className="md:col-span-1">
                <h4 className="text-xl font-black uppercase tracking-tight mb-2">Why GigShield?</h4>
                <p className="text-sm text-white/40 font-medium">Our parametric model ensures you get paid when it matters most.</p>
              </div>
              <div className="md:col-span-3 grid grid-cols-3 gap-4 text-center">
                <div className="p-4 border-r border-white/10">
                  <div className="text-2xl font-black text-brand-gold mb-1">2hr</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Avg. Payout Time</div>
                </div>
                <div className="p-4 border-r border-white/10">
                  <div className="text-2xl font-black text-brand-gold mb-1">0</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Paperwork Needed</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-black text-brand-gold mb-1">100%</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40">AI Automated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-brand-green py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold text-black">
                  <Shield size={24} strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-black uppercase tracking-tighter">GigShield <span className="text-brand-gold">AI</span></span>
              </div>
              <p className="max-w-sm text-white/40 font-medium leading-relaxed">
                Empowering the backbone of the digital economy with algorithmic financial security.
              </p>
            </div>
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-widest text-brand-gold mb-6">Platform</h5>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-tight text-white/60">
                <li><a href="#" className="hover:text-white">Network Status</a></li>
                <li><a href="#" className="hover:text-white">Coverage Maps</a></li>
                <li><a href="#" className="hover:text-white">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-widest text-brand-gold mb-6">Legal</h5>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-tight text-white/60">
                <li><a href="#" className="hover:text-white">Privacy Protocol</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Security Whitepaper</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-black uppercase tracking-widest text-white/20">© 2024 GigShield AI Protocol. All rights reserved.</p>
            <div className="flex gap-6">
              <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 cursor-pointer transition-all">
                <Globe size={16} />
              </div>
              <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 cursor-pointer transition-all">
                <Shield size={16} />
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
};

export default LandingPage;

