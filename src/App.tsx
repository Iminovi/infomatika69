/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Smartphone, 
  Database, 
  Terminal, 
  Layout, 
  CheckCircle2, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  Star, 
  ChevronRight, 
  Menu, 
  X, 
  Github,
  Cpu,
  BrainCircuit,
  Lock,
  Clock3,
  FileText,
  Building2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

// --- Constants ---
const SERVICES: Service[] = [
  {
    title: 'Web Development',
    description: 'HTML, CSS, JS, React, Next.js, Node.js, PHP/Laravel.',
    icon: Code2,
  },
  {
    title: 'Mobile App',
    description: 'Flutter, React Native, Java, Kotlin.',
    icon: Smartphone,
  },
  {
    title: 'Data Science',
    description: 'Python, R, Machine Learning, Data Visualization.',
    icon: BrainCircuit,
  },
  {
    title: 'Report & Documentation',
    description: 'Laporan Praktikum, Skripsi, Jurnal, dan Dokumentasi Teknis.',
    icon: FileText,
  },
  {
    title: 'Corporate Solutions',
    description: 'Sistem Inventory, HRIS, CRM, dan Automasi Bisnis.',
    icon: Building2,
  },
  {
    title: 'Algorithms & DS',
    description: 'C, C++, Java, Sorting, Graph, Tree, Complexity.',
    icon: Terminal,
  },
];

const FEATURES: Feature[] = [
  {
    title: 'Privasi Terjamin',
    description: 'Data dan identitas kamu aman 100% bersama kami.',
    icon: ShieldCheck,
  },
  {
    title: 'Pengerjaan Cepat',
    description: 'Deadline mepet? Kami siap selesaikan tepat waktu.',
    icon: Zap,
  },
  {
    title: 'Kualitas Premium',
    description: 'Kode bersih, dokumentasi lengkap, dan mudah dipahami.',
    icon: CheckCircle2,
  },
  {
    title: 'Revisi Gratis',
    description: 'Belum puas? Kami berikan revisi sampai sesuai harapan.',
    icon: MessageSquare,
  },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/60 backdrop-blur-xl border-b border-slate-800/50 py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center text-slate-300">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <span className="text-white font-bold text-sm">I69</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase font-display">
            Informatika<span className="text-cyan-400">69</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="text-cyan-400">Beranda</a>
          <a href="#services" className="hover:text-white transition-colors">Layanan</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">Alur Kerja</a>
          <a href="#why-us" className="hover:text-white transition-colors">Keunggulan</a>
          <button className="px-5 py-2 bg-slate-800 border border-slate-700 rounded-full text-xs font-bold text-white hover:bg-slate-700 transition-all">
            Cek Pesanan
          </button>
        </div>

        <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 shadow-2xl md:hidden p-6 flex flex-col gap-6 text-sm font-medium"
          >
            <a href="#" onClick={() => setIsOpen(false)}>Beranda</a>
            <a href="#services" onClick={() => setIsOpen(false)}>Layanan</a>
            <a href="#how-it-works" onClick={() => setIsOpen(false)}>Alur Kerja</a>
            <a href="#why-us" onClick={() => setIsOpen(false)}>Keunggulan</a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 text-slate-900 px-5 py-3 rounded-xl text-center font-bold">
              Order Via WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Ambient Background Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] -z-10 transform-gpu pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-blue-900/10 rounded-full blur-[150px] -z-10 transform-gpu pointer-events-none" />

      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-7/12 flex flex-col gap-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 w-fit mx-auto lg:mx-0"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Trusted IT Experts 2024</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] font-display"
            >
              Tugas Coding <br/>
              <span className="text-gradient">
                Beres Tanpa Stres.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-400 max-w-xl leading-relaxed lg:mx-0 mx-auto"
            >
              Partner terpercaya mahasiswa & bisnis di bidang IT. Pengerjaan cepat, clean code, bebas plagiasi, solusi korporasi, dan full penjelasan sampai paham.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4"
            >
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl shadow-xl shadow-cyan-500/20 transition-all text-center">
                Mulai Joki Sekarang
              </a>
              <button className="px-10 py-4 bg-slate-800/50 border border-slate-700 text-white font-bold rounded-xl backdrop-blur-sm hover:bg-slate-800 transition-all">
                Lihat Portfolio
              </button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/40">
                <div className="text-2xl font-bold text-white">12k+</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Tugas Selesai</div>
              </div>
              <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/40">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Client Puas (A+)</div>
              </div>
              <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/40">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Support Aktif</div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-5/12 relative"
          >
            <div className="w-full aspect-square bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-6 flex flex-col relative overflow-hidden ring-1 ring-white/5">
              {/* Code Window Mockup */}
              <div className="flex gap-1.5 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-3 text-[10px] text-slate-500 font-mono italic tracking-tight">main.py — Assignment_Solver</div>
              </div>
              <div className="flex-1 font-mono text-sm leading-relaxed overflow-hidden">
                <div className="text-pink-400 italic mb-2"># Professional Assignment Service</div>
                <div className="text-blue-400">def <span className="text-yellow-300">finish_assignment</span>(task_id):</div>
                <div className="pl-4 text-slate-300">student = Database.get_client(task_id)</div>
                <div className="pl-4 text-slate-300">quality = <span className="text-orange-400">\"PREMIUM_A\"</span></div>
                <div className="pl-4 text-purple-400 mt-2">if <span className="text-slate-300">student.stress_level &gt; </span><span className="text-cyan-400">80</span>:</div>
                <div className="pl-8 text-cyan-400 font-bold">Informatika69.solve(task_id, fast_track=True)</div>
                <div className="pl-4 text-blue-400 mt-2">return <span className="text-slate-300 text-sm italic\">\"Done with Excellence\"</span></div>
                <div className="mt-4 text-white cursor-blink\">|</div>
              </div>
              {/* Badge */}
              <div className="absolute -right-10 top-10 bg-blue-600 text-white text-[10px] font-bold px-8 py-2 rotate-45 shadow-lg whitespace-nowrap">
                ANTI-PLAGIASI 100%
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
               className="absolute -bottom-6 -left-6 p-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xl shadow-inner">🐍</div>
              <div>
                <div className="text-xs text-white font-bold">Python Expert</div>
                <div className="text-[10px] text-slate-400 tracking-tight text-nowrap">Data Science Specialist</div>
              </div>
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-cyan-500/10 rounded-full blur-[100px] -z-10 opacity-30 transform-gpu pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-bg-deep border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-10 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 border border-slate-700 w-fit mb-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Our Expertise</span>
        </div>
        <h3 className="text-4xl lg:text-5xl font-display font-bold mb-16 text-white">Apa Saja Yang Bisa Kami Bantu?</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10, borderColor: 'rgba(34, 211, 238, 0.3)' }}
              className="p-8 rounded-3xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl group-hover:bg-cyan-500/10 transition-all" />
              <div className="bg-slate-800 p-4 rounded-2xl w-fit mb-6 shadow-xl">
                <service.icon className="text-cyan-400 w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-white font-display uppercase tracking-tight">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-bg-deep overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full -translate-x-1/2 transform-gpu pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 w-fit mb-4">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Kenapa Kami</span>
            </div>
            <h3 className="text-4xl lg:text-6xl font-display font-bold mb-8 text-white leading-tight">Membantu Mahasiswa Adalah <span className="text-cyan-400">Prioritas</span> Kami.</h3>
            
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              {FEATURES.map((feature, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className="bg-slate-800 p-3 rounded-xl mb-4 border border-slate-700">
                    <feature.icon className="text-cyan-400 w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white">{feature.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-6 p-4">
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="bg-slate-900/40 p-10 rounded-3xl border border-slate-800 flex flex-col items-center text-center justify-center h-64 backdrop-blur-sm"
            >
              <ShieldCheck className="w-12 h-12 text-cyan-400 mb-6" />
              <span className="text-lg font-bold uppercase tracking-widest text-white">Anonymous<br/>Policy</span>
            </motion.div>
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="bg-cyan-500/90 p-10 rounded-3xl mt-12 flex flex-col items-center text-center justify-center h-64 shadow-2xl shadow-cyan-500/20"
            >
              <Zap className="w-12 h-12 text-slate-900 mb-6" />
              <span className="text-lg font-bold uppercase tracking-widest text-slate-900">Fast Lane<br/>Execution</span>
            </motion.div>
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="bg-slate-900/40 p-10 rounded-3xl border border-slate-800 flex flex-col items-center text-center justify-center h-64 backdrop-blur-sm"
            >
              <Lock className="w-12 h-12 text-cyan-400 mb-6" />
              <span className="text-lg font-bold uppercase tracking-widest text-white">Secure<br/>Escrow</span>
            </motion.div>
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="bg-slate-900/40 p-10 rounded-3xl border border-slate-800 mt-12 flex flex-col items-center text-center justify-center h-64 backdrop-blur-sm"
            >
              <Clock3 className="w-12 h-12 text-cyan-400 mb-6" />
              <span className="text-lg font-bold uppercase tracking-widest text-white">Punctuality<br/>Mastery</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: 'Kirim Detail', desc: 'Detail tugas kirim via WhatsApp.' },
    { title: 'Deal Harga', desc: 'Estimasi harga terbaik & murah.' },
    { title: 'Coding Mode', desc: 'Proses pengerjaan oleh tim pro.' },
    { title: 'Done!', desc: 'Hasil dikirim & full bergaransi.' }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-bg-deep relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 border border-slate-700 w-fit mb-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Workflow</span>
          </div>
          <h3 className="text-4xl font-display font-bold text-white">Bagaimana Kami Bekerja?</h3>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-10 right-10 h-px bg-slate-800 z-0" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center text-2xl font-black mb-8 ring-8 ring-bg-deep group-hover:bg-cyan-500 group-hover:text-slate-900 transition-all duration-300 shadow-xl">
                  0{index + 1}
                </div>
                <h4 className="text-xl font-bold mb-3 text-white font-display uppercase tracking-tight">{step.title}</h4>
                <p className="text-slate-500 text-sm px-4 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 px-10 bg-bg-deep">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-cyan-600 to-blue-800 rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl shadow-cyan-500/10 border border-white/5">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full transform-gpu pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-cyan-400/10 blur-[100px] rounded-full transform-gpu pointer-events-none" />
          
          <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-white mb-8 relative z-10 leading-tight">
            Solusi IT & Tugas, <br/> Sekarang Jadi Mudah.
          </h2>
          <p className="text-cyan-50 text-lg mb-12 max-w-xl mx-auto relative z-10 leading-relaxed font-medium">
            Dari laporan praktikum hingga sistem perusahaan, serahkan pada ahlinya di Informatika 69.
          </p>
          
          <div className="flex justify-center relative z-10">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-12 py-6 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all flex items-center gap-4 shadow-xl shadow-slate-900/20"
            >
              Order Joki Sekarang
              <MessageSquare className="w-6 h-6 fill-slate-900" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bg-deep pt-32 pb-16 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-10">
        {/* Expertise Bar */}
        <div className="flex flex-wrap items-center gap-10 mb-24 px-4 py-8 bg-slate-900/40 border border-slate-800/50 rounded-3xl justify-center lg:justify-start">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 w-full lg:w-fit text-center lg:text-left mb-4 lg:mb-0">Kami Menguasai</span>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6 justify-center">
            <span className="text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-default uppercase tracking-tight">C++ / C#</span>
            <span className="text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-default uppercase tracking-tight">Java Spring</span>
            <span className="text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-default uppercase tracking-tight">React / Node.js</span>
            <span className="text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-default uppercase tracking-tight">Cyber Security</span>
            <span className="text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-default uppercase tracking-tight">Data Science</span>
            <span className="text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-default uppercase tracking-tight">Database SQL/NoSQL</span>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs uppercase tracking-tighter">I69</span>
              </div>
              <span className="text-2xl font-black text-white uppercase tracking-tighter font-display italic">
                Informatika<span className="text-cyan-400">69</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm mb-10 leading-loose text-sm">
              Platform jasa pengerjaan tugas informatika dengan standarisasi industri. Kami membantu kesuksesan akademik dan skill mahasiswa melalui solusi IT yang matang.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all group">
                <Github size={20} />
              </a>
              <a href="#" className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all">
                <Smartphone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-8 text-white uppercase text-xs tracking-widest">Layanan</h5>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Mobile Engineering</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Machine Learning</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Desktop Scripting</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-8 text-white uppercase text-xs tracking-widest">Informatika 69</h5>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Testimoni</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Syarat & Layanan</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Kebijakan Privasi</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-xs font-medium tracking-tight">© 2024 Informatika 69 — Premium Assignment Experts.</p>
          <div className="flex items-center gap-4">
             <span className="text-[10px] text-slate-600 italic font-mono">Secure SSL Active</span>
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary-100 selection:text-primary-900">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}
