import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, Variants } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  Menu, 
  X,
  ChevronUp,
  Trophy,
  User,
  Rocket,
  Palette,
  Sparkles,
  Code2,
  Cpu
} from 'lucide-react';
import { SOCIAL_LINKS, SKILLS, PROJECTS, ACHIEVEMENTS } from './constants';
import TiltCard from './components/TiltCard';
import FloatingShape from './components/FloatingShape';

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 }
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-rose-surface text-black-bean font-sans">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-ny-pink to-cordovan origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Decorative Backgrounds */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <FloatingShape color="#E7C0BC" size={500} top="-15%" left="-10%" delay={0} />
        <FloatingShape color="#D97E8A" size={400} top="30%" left="85%" delay={2} />
        <FloatingShape color="#EC9FAB" size={450} top="75%" left="5%" delay={4} />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full glass-nav z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-serif font-bold text-cordovan tracking-wide flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-cordovan text-white flex items-center justify-center">
              <span className="font-sans font-bold text-lg">S.</span>
            </div>
            <span>Srimathi K</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-5 py-2 rounded-full text-sm font-medium text-black-bean/80 hover:text-cordovan hover:bg-white/50 transition-all duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg glass-btn text-black-bean" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-white/90 backdrop-blur-3xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-3xl font-serif font-bold text-black-bean hover:text-cordovan hover:scale-110 transition-transform"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass-card text-cordovan font-medium text-sm tracking-wider">
              <Sparkles size={16} className="text-ny-pink" />
              FULL STACK DEVELOPER
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cordovan to-ny-pink">Srimathi</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-black-bean/70 mb-10 max-w-lg leading-relaxed font-light">
              AI Enthusiast & Problem Solver. I build responsive, user-friendly web applications with a focus on rich UI/UX and modern technologies.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-cordovan text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-cordovan/20 hover:shadow-cordovan/40 hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                View Work <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="glass-btn text-cordovan px-8 py-4 rounded-full font-semibold"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="relative hidden md:flex justify-center"
          >
             {/* 3D Glass Card */}
            <TiltCard className="w-80 h-[28rem]">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-cordovan via-ny-pink to-baby-pink p-[1px] shadow-2xl">
                    <div className="w-full h-full rounded-3xl bg-white/20 backdrop-blur-xl border border-white/40 flex flex-col items-center justify-center p-8 text-white relative overflow-hidden">
                        {/* Background sheen */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-50"></div>
                        
                        <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mb-6 shadow-inner ring-1 ring-white/30 backdrop-blur-md overflow-hidden">
                          <img src="/avatar.png" alt="SK Avatar" className="w-24 h-24 rounded-full object-cover" />
                        </div>
                        
                        <div className="font-serif text-3xl font-bold mb-2 text-shadow-sm">Srimathi K</div>
                        <div className="text-xs font-medium uppercase tracking-[0.2em] opacity-90 bg-white/10 px-3 py-1 rounded-full">Engineer</div>
                        
                        <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                             <div className="bg-white/10 p-4 rounded-2xl text-center backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors">
                                <div className="text-2xl font-bold">8.36</div>
                                <div className="text-[10px] uppercase opacity-80 mt-1">CGPA</div>
                             </div>
                             <div className="bg-white/10 p-4 rounded-2xl text-center backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors">
                                <div className="text-2xl font-bold">1k+</div>
                                <div className="text-[10px] uppercase opacity-80 mt-1">Problems</div>
                             </div>
                        </div>
                    </div>
                </div>
            </TiltCard>
            
            {/* Floating Icons */}
            <motion.div 
                animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-5 glass-card p-4 rounded-2xl z-20 flex items-center justify-center text-cordovan"
            >
                <Rocket size={32} strokeWidth={1.5} />
            </motion.div>
            <motion.div 
                animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 -left-10 glass-card p-4 rounded-2xl z-20 flex items-center justify-center text-cordovan"
            >
                <Palette size={32} strokeWidth={1.5} />
            </motion.div>
             <motion.div 
                animate={{ x: [-10, 10, -10] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -right-16 glass-card p-3 rounded-full z-10 text-cordovan opacity-80"
            >
                <Code2 size={24} strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-cordovan/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-ny-pink/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>
                
                <h2 className="text-4xl font-serif font-bold text-cordovan mb-8 relative z-10">About Me</h2>
                <div className="space-y-6 text-lg leading-relaxed text-black-bean/80 font-light relative z-10">
                    <p>
                        I am a Computer Science and Engineering student at <strong className="text-black-bean font-semibold border-b-2 border-baby-pink">KIT – Kalaignarkarunanidhi Institute of Technology</strong>, Coimbatore. currently in my pre-final year with a CGPA of <strong className="text-cordovan font-bold">8.36</strong>.
                    </p>
                    <p>
                        I have hands-on experience in full-stack development, competitive programming, and building real-world projects. I enjoy learning, coding, and continuously improving my technical skills to create impactful digital solutions.
                    </p>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-cordovan mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cordovan to-transparent mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {SKILLS.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <TiltCard className="h-full">
                  <div className="glass-card rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center group hover:bg-white/80 transition-all duration-300">
                      <div className="text-xs text-ny-pink font-semibold tracking-widest uppercase mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
                          {skill.category}
                      </div>
                      <span className="font-bold text-lg text-black-bean group-hover:text-cordovan transition-colors">
                          {skill.name}
                      </span>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-cordovan mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cordovan to-transparent mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <TiltCard className="h-full">
                    <div className="h-full glass-card rounded-3xl overflow-hidden flex flex-col relative group transition-all duration-300 hover:shadow-2xl hover:shadow-cordovan/10">
                        <div className="h-48 bg-gradient-to-br from-rose-100 to-white flex items-center justify-center relative overflow-hidden">
                             {/* Abstract Geometric shapes instead of image */}
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cordovan/5 rounded-full blur-2xl group-hover:bg-cordovan/10 transition-colors"></div>
                             <div className="relative z-10 p-6 text-center">
                               <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center text-cordovan mb-3">
                                  <Code2 size={32} strokeWidth={1.5} />
                               </div>
                             </div>
                             
                             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/60 to-transparent"></div>
                        </div>
                        
                        <div className="p-8 flex-grow flex flex-col relative z-20">
                            <h3 className="text-2xl font-serif font-bold text-black-bean mb-3">{project.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-cordovan/5 text-cordovan rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm text-black-bean/70 leading-relaxed mb-6 flex-grow font-light">
                                {project.description}
                            </p>
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center text-cordovan font-bold text-sm hover:text-ny-pink transition-colors gap-2 group-hover:translate-x-1 duration-300"
                            >
                                View Project <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-serif font-bold text-cordovan mb-4">Achievements</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cordovan to-transparent mx-auto rounded-full"></div>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
            >
                {ACHIEVEMENTS.map((ach, index) => {
                    const Icon = ach.icon || Trophy;
                    return (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="glass-card p-6 rounded-3xl text-center flex flex-col items-center justify-center gap-4 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-100 to-white flex items-center justify-center text-cordovan shadow-sm group-hover:scale-110 transition-transform duration-500">
                                <Icon size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-bold text-black-bean text-lg">{ach.title}</h3>
                                <p className="text-sm text-ny-pink font-medium mt-1">{ach.value}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card-dark rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden"
          >
            {/* Background glowing orbs within the dark card */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
               <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-cordovan rounded-full opacity-30 blur-[100px]"></div>
               <div className="absolute bottom-[-20%] left-[-10%] w-96 h-96 bg-ny-pink rounded-full opacity-20 blur-[100px]"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-rose-surface mb-6">Let's Connect</h2>
              <p className="text-lg text-rose-surface/80 mb-12 max-w-xl mx-auto font-light">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              <a 
                href="mailto:srimathi4125@gmail.com"
                className="inline-block text-2xl md:text-4xl font-bold text-white hover:text-marvelous transition-colors mb-16 border-b-2 border-white/20 hover:border-marvelous pb-2"
              >
                srimathi4125@gmail.com
              </a>

              <div className="flex flex-wrap justify-center gap-6">
                  {SOCIAL_LINKS.map((link) => (
                      <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-white/10 p-4 rounded-full text-white hover:bg-white hover:text-black-bean transition-all hover:-translate-y-2 backdrop-blur-md border border-white/10"
                          title={link.name}
                      >
                          <link.icon size={24} />
                      </a>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-black-bean/50 relative z-10">
        <p>© 2025 Srimathi K. All rights reserved.</p>
      </footer>

      {/* Scroll To Top */}
      <AnimatePresence>
        <motion.button
          className="fixed bottom-8 right-8 bg-white/80 backdrop-blur-md text-cordovan p-4 rounded-full shadow-xl z-50 hover:bg-white transition-colors border border-white/50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp size={24} />
        </motion.button>
      </AnimatePresence>
    </div>
  );
}

export default App;
