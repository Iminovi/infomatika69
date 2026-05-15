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
  MessageCircle,
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
  Building2,
  Briefcase
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

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  stars: number;
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

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Gila, pengerjaannya cepet banget! Kodenya rapi dan dijelasin sampai paham. Nilai A+ di tangan, makasih Informatika 69!",
    name: 'Ahmad Subagja',
    role: 'Mahasiswa Teknik Informatika',
    stars: 5,
  },
  {
    quote: "Sistem CRM untuk startup saya selesai jauh lebih cepat dari ekspektasi. Fiturnya lengkap dan tim sangat responsif. Highly recommended!",
    name: 'Rina Setiawati',
    role: 'Founder, Startup Maju',
    stars: 5,
  },
  {
    quote: "Awalnya ragu, tapi ternyata hasilnya luar biasa. Laporan skripsi saya jadi lebih terstruktur dan analisis datanya tajam. Sangat membantu.",
    name: 'Budi Santoso',
    role: 'Mahasiswa Tingkat Akhir',
    stars: 4,
  },
  {
    quote: "Sangat profesional! Tugas akhir saya yang tadinya stuck berminggu-minggu bisa beres dalam beberapa hari berkat bantuan tim ini.",
    name: 'Dimas Aditya',
    role: 'Mahasiswa Sistem Informasi',
    stars: 5,
  },
  {
    quote: "Harga bersahabat untuk kantong mahasiswa tapi kualitas yang diberikan setara standar industri. Bakal order lagi semester depan!",
    name: 'Siti Nurhaliza',
    role: 'Mahasiswa Ilmu Komputer',
    stars: 5,
  },
  {
    quote: "Bukan cuma dibuatin kode, tapi juga diajarin logikanya sampai bener-bener paham. Mantap banget pelayanannya.",
    name: 'Kevin Pratama',
    role: 'Mahasiswa Rekayasa Perangkat Lunak',
    stars: 5,
  },
];

const PORTFOLIO_ITEMS = [
  {
    title: 'Sistem ERP Korporat',
    category: 'Corporate Solutions',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    desc: 'Sistem manajemen terintegrasi untuk perusahaan manufaktur dengan fitur real-time dashboard.',
  },
  {
    title: 'Aplikasi Skripsi Deteksi Penyakit',
    category: 'Machine Learning',
    tech: ['Python', 'TensorFlow', 'Flask'],
    desc: 'Model CNN untuk klasifikasi citra X-Ray paru-paru dengan akurasi 96% untuk tugas akhir.',
  },
  {
    title: 'Mobile App E-Commerce',
    category: 'Mobile Development',
    tech: ['Flutter', 'Firebase', 'Stripe'],
    desc: 'Aplikasi belanja online cross-platform dengan fitur payment gateway dan push notification.',
  }
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
          <a href="#testimonials" className="hover:text-white transition-colors">Testimoni</a>
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
            <a href="https://github.com/Iminovi" onClick={() => setIsOpen(false)}>Layanan</a>
            <a href="#how-it-works" onClick={() => setIsOpen(false)}>Alur Kerja</a>
            <a href="#why-us" onClick={() => setIsOpen(false)}>Keunggulan</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimoni</a>
            <a href="https://wa.me/62895385246738" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 text-slate-900 px-5 py-3 rounded-xl text-center font-bold">
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
              <a href="https://wa.me/62895385246738" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl shadow-xl shadow-cyan-500/20 transition-all text-center">
                Mulai Joki Sekarang
              </a>
              <a href="#portfolio" className="px-10 py-4 bg-slate-800/50 border border-slate-700 text-white font-bold rounded-xl backdrop-blur-sm hover:bg-slate-800 transition-all text-center flex items-center justify-center gap-2">
                <Briefcase className="w-5 h-5" />
                Lihat Portfolio
              </a>
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

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-bg-deep border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 border border-slate-700 w-fit mb-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Our Works</span>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">Project & Portfolio</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 group hover:border-cyan-500/50 transition-all flex flex-col h-full"
            >
              <div className="aspect-video w-full bg-slate-800 rounded-2xl mb-6 overflow-hidden relative border border-slate-700 group-hover:border-cyan-500/30 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <Code2 className="w-12 h-12 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
              <div className="mb-6 flex-grow">
                <span className="text-[10px] font-bold text-cyan-400 mb-3 block tracking-widest uppercase">{item.category}</span>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tech.map((t, i) => (
                  <span key={i} className="text-[10px] px-2 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700 font-medium">
                    {t}
                  </span>
                ))}
              </div>
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

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-bg-deep border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 border border-slate-700 w-fit mb-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Client Stories</span>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">Apa Kata Mereka Tentang Kami?</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 flex flex-col h-full"
            >
              <div className="flex items-center mb-6">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} 
                  />
                ))}
              </div>
              <p className="text-slate-300 italic mb-8 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-white">{testimonial.name}</h5>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
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
    <section className="py-16 md:py-24 px-5 md:px-10 bg-bg-deep">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-cyan-600 to-blue-800 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl shadow-cyan-500/10 border border-white/5">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full transform-gpu pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-cyan-400/10 blur-[100px] rounded-full transform-gpu pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-extrabold text-white mb-6 md:mb-8 relative z-10 leading-tight">
            Solusi IT & Tugas, <br/> Sekarang Jadi Mudah.
          </h2>
          <p className="text-cyan-50 text-base md:text-lg mb-10 md:mb-12 max-w-xl mx-auto relative z-10 leading-relaxed font-medium">
            Dari laporan praktikum hingga sistem perusahaan, serahkan pada ahlinya di Informatika 69.
          </p>
          
          <div className="flex justify-center relative z-10">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/62895385246738" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-8 py-4 md:px-12 md:py-6 rounded-2xl font-black text-lg md:text-xl hover:bg-slate-50 transition-all flex items-center gap-4 shadow-xl shadow-slate-900/20"
            >
              Order Joki Sekarang
              <MessageSquare className="w-5 h-5 md:w-6 md:h-6 fill-slate-900" />
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
      <div className="max-w-7xl mx-auto px-5 md:px-10">
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

        <div className="grid md:grid-cols-4 gap-10 md:gap-16 mb-20">
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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all group">
                <Github size={20} />
              </a>
              <a href="https://wa.me/62895385246738" target="_blank" rel="noopener noreferrer" className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all">
                <Smartphone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-8 text-white uppercase text-xs tracking-widest">Layanan</h5>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Mobile Engineering</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Machine Learning</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Desktop Scripting</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-8 text-white uppercase text-xs tracking-widest">Informatika 69</h5>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><a href="#why-us" className="hover:text-cyan-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#testimonials" className="hover:text-cyan-400 transition-colors">Testimoni</a></li>
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

const FloatingCTA = () => {
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Deteksi jika sisa scroll ke bawah kurang dari 400px (area footer)
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 400;
      setIsNearBottom(isBottom);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.a
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="https://wa.me/62895385246738"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed right-6 md:right-8 z-[99] bg-gradient-to-r from-emerald-500 to-green-500 text-white p-4 md:px-6 md:py-4 rounded-full shadow-2xl shadow-green-500/40 flex items-center gap-3 hover:shadow-green-500/60 border border-green-400/50 group transition-all duration-500 ${
        isNearBottom ? 'bottom-28 md:bottom-32' : 'bottom-6 md:bottom-8'
      }`}
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7 fill-white" />
      <span className="hidden md:block font-bold text-lg tracking-tight">Konsultasi Sekarang</span>
      
      {/* Notification dot with pulse animation */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-slate-900"></span>
      </span>
    </motion.a>
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
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <HowItWorks />
      <CTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
